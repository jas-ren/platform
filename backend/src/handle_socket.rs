use crate::{
    auth::{validate_access_and_id, Role, ValidatedClient},
    db::{
        self, CancelOrderStatus, CreateBotStatus, CreateMarketStatus, CreateOrderStatus,
        EnsureUserCreatedStatus, MakePaymentStatus, SettleMarketStatus, DB,
    },
    websocket_api::{
        client_message::Message as CM,
        order_created::OrderFill,
        request_failed::{ErrorDetails, RequestDetails},
        server_message::Message as SM,
        ActAs, ActingAs, Authenticated, ClientMessage, Market, MarketSettled, Order,
        OrderCancelled, OrderCreated, Ownership, OwnershipGiven, Ownerships, Payment, Payments,
        Redeem, Redeemed, RequestFailed, ServerMessage, Side, Size, Trade, UpgradeMarketData, User,
        Users,
    },
    AppState, HIDE_USER_IDS,
};
use anyhow::{anyhow, bail};
use async_stream::stream;
use axum::extract::{ws, ws::WebSocket};
use futures::{Stream, StreamExt, TryStreamExt};
use prost::{bytes::Bytes, Message};
use rust_decimal_macros::dec;
use tokio::sync::broadcast::error::RecvError;

pub async fn handle_socket(socket: WebSocket, app_state: AppState) {
    if let Err(e) = handle_socket_fallible(socket, app_state).await {
        tracing::error!("Error handling socket: {e}");
    } else {
        tracing::info!("Client disconnected");
    }
}

#[allow(clippy::too_many_lines)]
async fn handle_socket_fallible(mut socket: WebSocket, app_state: AppState) -> anyhow::Result<()> {
    let AuthenticatedClient {
        validated_client: client,
        act_as,
        request_id,
    } = authenticate(&app_state, &mut socket).await?;
    if app_state.connect_ratelimit.check_key(&client.id).is_err() {
        let resp = request_failed(request_id, "Authenticate", "Rate Limited (connecting)");
        socket.send(resp).await?;
        return Ok(());
    };
    let resp = ServerMessage {
        request_id,
        message: Some(SM::Authenticated(Authenticated {})),
    };
    socket.send(resp.encode_to_vec().into()).await?;
    let is_admin = client.roles.contains(&Role::Admin);
    let initial_balance = if is_admin { dec!(1_000_000) } else { dec!(0) };

    let status = app_state
        .db
        .ensure_user_created(&client.id, client.name.as_deref(), initial_balance)
        .await?;
    if let EnsureUserCreatedStatus::CreatedOrUpdated { name } = status {
        app_state.subscriptions.send_public(ServerMessage {
            request_id: String::new(),
            message: Some(SM::UserCreated(User {
                id: client.id.clone(),
                name: name.to_string(),
                is_bot: false,
            })),
        });
    }

    let mut acting_as = act_as.unwrap_or_else(|| client.id.clone());
    let mut portfolio_watcher = app_state.subscriptions.subscribe_portfolio(&acting_as);
    let mut private_user_receiver = app_state.subscriptions.subscribe_private_user(&client.id);
    let mut private_actor_receiver = app_state.subscriptions.subscribe_private_actor(&acting_as);
    let mut public_receiver = app_state.subscriptions.subscribe_public();

    send_initial_private_user_data(&app_state.db, &client.id, &mut socket).await?;
    send_initial_public_data(&app_state.db, &acting_as, &mut socket).await?;
    // Important that this is last - it doubles as letting the client know we're done sending initial data
    send_initial_private_actor_data(&app_state.db, &acting_as, &mut socket).await?;

    loop {
        tokio::select! {
            biased;
            msg = public_receiver.recv() => {
                match msg {
                    Ok(mut msg) => {
                        conditionally_hide_user_ids(&acting_as, &mut msg);
                        socket.send(msg.encode_to_vec().into()).await?;
                    },
                    Err(RecvError::Lagged(n)) => {
                        tracing::warn!("Lagged {n}");
                        send_initial_public_data(&app_state.db, &acting_as, &mut socket).await?;
                    }
                    Err(RecvError::Closed) => {
                        bail!("Market sender closed");
                    }
                };
            }
            msg = private_user_receiver.recv() => {
                if let Some(Lagged) = handle_subscription_message(&mut socket, msg).await? {
                    send_initial_private_user_data(&app_state.db, &client.id, &mut socket).await?;
                };
            }
            msg = private_actor_receiver.recv() => {
                if let Some(Lagged) = handle_subscription_message(&mut socket, msg).await? {
                    send_initial_private_actor_data(&app_state.db, &acting_as, &mut socket).await?;
                };
            }
            msg = socket.recv() => {
                let Some(msg) = msg else {
                    // client disconnected
                    break Ok(())
                };
                let msg = msg?;
                if let ws::Message::Close(_) = msg {
                    break Ok(());
                }
                if let Some(act_as) = handle_client_message(
                    &mut socket,
                    &app_state,
                    &client.id,
                    &acting_as,
                    msg,
                )
                .await? {
                    acting_as = act_as.user_id;
                    portfolio_watcher = app_state.subscriptions.subscribe_portfolio(&acting_as);
                    private_actor_receiver = app_state.subscriptions.subscribe_private_actor(&acting_as);
                    if *HIDE_USER_IDS {
                        // We can tell them which orders/trades are theirs now
                        send_initial_public_data(&app_state.db, &acting_as, &mut socket).await?;
                    }
                    send_initial_private_actor_data(&app_state.db, &acting_as, &mut socket).await?;
                }
            }
            r = portfolio_watcher.changed() => {
                r?;
                let portfolio = app_state.db.get_portfolio(&acting_as).await?.ok_or_else(|| anyhow!("Authenticated user not found"))?;
                let resp = server_message(String::new(), SM::Portfolio(portfolio.into()));
                socket.send(resp).await?;
            }
        }
    }
}

async fn send_initial_private_actor_data(
    db: &DB,
    user_id: &str,
    socket: &mut WebSocket,
) -> anyhow::Result<()> {
    let portfolio = db
        .get_portfolio(user_id)
        .await?
        .ok_or_else(|| anyhow!("Authenticated user not found"))?;
    let portfolio_msg = server_message(String::new(), SM::Portfolio(portfolio.into()));
    socket.send(portfolio_msg).await?;

    let payments = db
        .get_payments(user_id)
        .map(|payment| payment.map(Payment::from))
        .try_collect::<Vec<_>>()
        .await?;
    let payments_msg = server_message(String::new(), SM::Payments(Payments { payments }));
    socket.send(payments_msg).await?;

    // actAs doubles as letting the client know we're done sending initial data
    let acting_as_msg = server_message(
        String::new(),
        SM::ActingAs(ActingAs {
            user_id: user_id.to_string(),
        }),
    );
    socket.send(acting_as_msg).await?;
    Ok(())
}

async fn send_initial_private_user_data(
    db: &DB,
    user_id: &str,
    socket: &mut WebSocket,
) -> anyhow::Result<()> {
    let ownerships = db
        .get_ownerships(user_id)
        .map(|ownership| ownership.map(Ownership::from))
        .try_collect::<Vec<_>>()
        .await?;
    let ownerships_msg = server_message(String::new(), SM::Ownerships(Ownerships { ownerships }));
    socket.send(ownerships_msg).await?;
    Ok(())
}

async fn send_initial_public_data(
    db: &DB,
    user_id: &str,
    socket: &mut WebSocket,
) -> anyhow::Result<()> {
    let users = db
        .get_all_users()
        .map(|user| user.map(User::from))
        .try_collect::<Vec<_>>()
        .await?;
    let users_msg = server_message(String::new(), SM::Users(Users { users }));
    socket.send(users_msg).await?;
    let mut markets = db.get_all_markets().map(|market| market.map(Market::from));
    let mut all_live_orders = db.get_all_live_orders().map(|order| order.map(Order::from));
    let mut all_trades = db.get_all_trades().map(|trade| trade.map(Trade::from));
    let mut next_order = all_live_orders.try_next().await?;
    let mut next_trade = all_trades.try_next().await?;
    while let Some(mut market) = markets.try_next().await? {
        let orders_stream = next_stream_chunk(
            &mut next_order,
            |order| order.market_id == market.id,
            &mut all_live_orders,
        );
        let trades_stream = next_stream_chunk(
            &mut next_trade,
            |trade| trade.market_id == market.id,
            &mut all_trades,
        );
        let (orders, trades) = tokio::join!(
            orders_stream.try_collect::<Vec<_>>(),
            trades_stream.try_collect::<Vec<_>>(),
        );
        market.orders = orders?;
        market.trades = trades?;
        for order in &mut market.orders {
            hide_id(user_id, &mut order.owner_id);
        }
        for trade in &mut market.trades {
            hide_id(user_id, &mut trade.buyer_id);
            hide_id(user_id, &mut trade.seller_id);
        }
        let market_msg = server_message(String::new(), SM::MarketData(market));
        socket.send(market_msg).await?;
    }
    Ok(())
}

fn hide_id(acting_as: &str, id: &mut String) {
    if *HIDE_USER_IDS && id != acting_as {
        *id = "hidden".into();
    }
}

fn conditionally_hide_user_ids(acting_as: &str, msg: &mut ServerMessage) {
    if let ServerMessage {
        message: Some(SM::OrderCreated(order_created)),
        ..
    } = msg
    {
        hide_id(acting_as, &mut order_created.user_id);
        if let Some(order) = order_created.order.as_mut() {
            hide_id(acting_as, &mut order.owner_id);
        }
        for fill in &mut order_created.fills {
            hide_id(acting_as, &mut fill.owner_id);
        }
        for trade in &mut order_created.trades {
            hide_id(acting_as, &mut trade.buyer_id);
            hide_id(acting_as, &mut trade.seller_id);
        }
    };
    if let ServerMessage {
        message: Some(SM::Redeemed(Redeemed { user_id, .. })),
        ..
    } = msg
    {
        hide_id(acting_as, user_id);
    }
}

async fn handle_subscription_message(
    socket: &mut WebSocket,
    msg: Result<ws::Message, RecvError>,
) -> anyhow::Result<Option<Lagged>> {
    match msg {
        Ok(msg) => socket.send(msg).await?,
        Err(RecvError::Lagged(n)) => {
            tracing::warn!("Lagged {n}");
            return Ok(Some(Lagged));
        }
        Err(RecvError::Closed) => {
            bail!("Market sender closed");
        }
    };
    Ok(None)
}

struct Lagged;

#[allow(clippy::too_many_lines)]
#[allow(clippy::similar_names)]
async fn handle_client_message(
    socket: &mut WebSocket,
    app_state: &AppState,
    client_id: &String,
    acting_as: &str,
    msg: ws::Message,
) -> anyhow::Result<Option<ActAs>> {
    let ws::Message::Binary(msg) = msg else {
        let resp = request_failed(String::new(), "Unknown", "Expected Binary message");
        socket.send(resp).await?;
        return Ok(None);
    };
    let Ok(ClientMessage {
        request_id,
        message: Some(msg),
    }) = ClientMessage::decode(Bytes::from(msg))
    else {
        let resp = request_failed(String::new(), "Unknown", "Expected Client message");
        socket.send(resp).await?;
        return Ok(None);
    };
    match msg {
        CM::CreateMarket(create_market) => {
            let Ok(min_settlement) = create_market.min_settlement.try_into() else {
                let resp = request_failed(
                    request_id,
                    "CreateMarket",
                    "Failed converting min_settlement to decimal",
                );
                socket.send(resp).await?;
                return Ok(None);
            };
            let Ok(max_settlement) = create_market.max_settlement.try_into() else {
                let resp = request_failed(
                    request_id,
                    "CreateMarket",
                    "Failed converting max_settlement to decimal",
                );
                socket.send(resp).await?;
                return Ok(None);
            };
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "CreateMarket", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            let CreateMarketStatus::Success(market) = app_state
                .db
                .create_market(
                    &create_market.name,
                    &create_market.description,
                    client_id,
                    min_settlement,
                    max_settlement,
                )
                .await?
            else {
                let resp = request_failed(request_id, "CreateMarket", "Invalid settlement prices");
                socket.send(resp).await?;
                return Ok(None);
            };
            let msg = ServerMessage {
                request_id,
                message: Some(SM::MarketCreated(market.into())),
            };
            app_state.subscriptions.send_public(msg);
        }
        CM::SettleMarket(settle_market) => {
            let Ok(settled_price) = settle_market.settle_price.try_into() else {
                let resp = request_failed(
                    request_id,
                    "SettleMarket",
                    "Failed converting settle_price to decimal",
                );
                socket.send(resp).await?;
                return Ok(None);
            };
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "SettleMarket", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            match app_state
                .db
                .settle_market(settle_market.market_id, settled_price, client_id)
                .await?
            {
                SettleMarketStatus::Success { affected_users } => {
                    let msg = ServerMessage {
                        request_id,
                        message: Some(SM::MarketSettled(MarketSettled {
                            id: settle_market.market_id,
                            settle_price: settle_market.settle_price,
                        })),
                    };
                    app_state.subscriptions.send_public(msg);
                    for user in affected_users {
                        app_state.subscriptions.notify_user_portfolio(&user);
                    }
                }
                SettleMarketStatus::AlreadySettled => {
                    let resp = request_failed(request_id, "SettleMarket", "Market already settled");
                    socket.send(resp).await?;
                }
                SettleMarketStatus::NotOwner => {
                    let resp = request_failed(request_id, "SettleMarket", "Not market owner");
                    socket.send(resp).await?;
                }
                SettleMarketStatus::InvalidSettlementPrice => {
                    let resp =
                        request_failed(request_id, "SettleMarket", "Invalid settlement price");
                    socket.send(resp).await?;
                }
            }
        }
        CM::CreateOrder(create_order) => {
            let Ok(size) = create_order.size.try_into() else {
                let resp = request_failed(
                    request_id,
                    "CreateOrder",
                    "Failed converting size to decimal",
                );
                socket.send(resp).await?;
                return Ok(None);
            };
            let Ok(price) = create_order.price.try_into() else {
                let resp = request_failed(
                    request_id,
                    "CreateOrder",
                    "Failed converting price to decimal",
                );
                socket.send(resp).await?;
                return Ok(None);
            };
            let side = match create_order.side() {
                Side::Unknown => {
                    let resp = request_failed(request_id, "CreateOrder", "Unknown side");
                    socket.send(resp).await?;
                    return Ok(None);
                }
                Side::Bid => db::Side::Bid,
                Side::Offer => db::Side::Offer,
            };
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "CreateOrder", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            match app_state
                .db
                .create_order(create_order.market_id, acting_as, price, size, side)
                .await?
            {
                CreateOrderStatus::MarketSettled => {
                    let resp = request_failed(request_id, "CreateOrder", "Market already settled");
                    socket.send(resp).await?;
                }
                CreateOrderStatus::InvalidSize => {
                    let resp = request_failed(request_id, "CreateOrder", "Invalid size");
                    socket.send(resp).await?;
                }
                CreateOrderStatus::InvalidPrice => {
                    let resp = request_failed(request_id, "CreateOrder", "Invalid price");
                    socket.send(resp).await?;
                }
                CreateOrderStatus::InsufficientFunds => {
                    let resp = request_failed(request_id, "CreateOrder", "Insufficient funds");
                    socket.send(resp).await?;
                }
                CreateOrderStatus::Success {
                    order,
                    fills,
                    trades,
                } => {
                    for user_id in fills.iter().map(|fill| &fill.owner_id) {
                        app_state.subscriptions.notify_user_portfolio(user_id);
                    }
                    app_state.subscriptions.notify_user_portfolio(acting_as);
                    let order = order.map(|o| {
                        let mut order = Order::from(o);
                        order.sizes = vec![Size {
                            transaction_id: order.transaction_id,
                            size: order.size,
                        }];
                        order
                    });
                    let msg = ServerMessage {
                        request_id,
                        message: Some(SM::OrderCreated(OrderCreated {
                            market_id: create_order.market_id,
                            user_id: acting_as.to_string(),
                            order,
                            fills: fills.into_iter().map(OrderFill::from).collect(),
                            trades: trades.into_iter().map(Trade::from).collect(),
                        })),
                    };
                    app_state.subscriptions.send_public(msg);
                }
                CreateOrderStatus::MarketNotFound => {
                    let resp = request_failed(request_id, "CreateOrder", "Market not found");
                    socket.send(resp).await?;
                }
                CreateOrderStatus::UserNotFound => {
                    tracing::error!("Authenticated user not found");
                    let resp = request_failed(request_id, "CreateOrder", "User not found");
                    socket.send(resp).await?;
                }
            }
        }
        CM::CancelOrder(cancel_order) => {
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "CancelOrder", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            match app_state
                .db
                .cancel_order(cancel_order.id, acting_as)
                .await?
            {
                CancelOrderStatus::Success { market_id } => {
                    let resp = ServerMessage {
                        request_id,
                        message: Some(SM::OrderCancelled(OrderCancelled {
                            id: cancel_order.id,
                            market_id,
                        })),
                    };
                    app_state.subscriptions.send_public(resp);
                    app_state.subscriptions.notify_user_portfolio(acting_as);
                }
                CancelOrderStatus::NotOwner => {
                    let resp = request_failed(request_id, "CancelOrder", "Not order owner");
                    socket.send(resp).await?;
                }
                CancelOrderStatus::NotFound => {
                    let resp = request_failed(request_id, "CancelOrder", "Order not found");
                    socket.send(resp).await?;
                }
            }
        }
        CM::MakePayment(make_payment) => {
            let Ok(amount) = make_payment.amount.try_into() else {
                let resp = request_failed(request_id, "MakePayment", "Failed parsing amount");
                socket.send(resp).await?;
                return Ok(None);
            };
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "MakePayment", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            match app_state
                .db
                .make_payment(
                    acting_as,
                    &make_payment.recipient_id,
                    amount,
                    &make_payment.note,
                )
                .await?
            {
                MakePaymentStatus::Success(payment) => {
                    let resp = server_message(request_id, SM::PaymentCreated(payment.into()));
                    app_state
                        .subscriptions
                        .send_private_actor(acting_as, resp.clone());
                    app_state
                        .subscriptions
                        .send_private_actor(&make_payment.recipient_id, resp);
                    app_state.subscriptions.notify_user_portfolio(acting_as);
                    app_state
                        .subscriptions
                        .notify_user_portfolio(&make_payment.recipient_id);
                }
                MakePaymentStatus::InsufficientFunds => {
                    let resp = request_failed(request_id, "MakePayment", "Insufficient funds");
                    socket.send(resp).await?;
                }
                MakePaymentStatus::InvalidAmount => {
                    let resp = request_failed(request_id, "MakePayment", "Invalid amount");
                    socket.send(resp).await?;
                }
                MakePaymentStatus::PayerNotFound => {
                    let resp = request_failed(request_id, "MakePayment", "Payer not found");
                    socket.send(resp).await?;
                }
                MakePaymentStatus::RecipientNotFound => {
                    let resp = request_failed(request_id, "MakePayment", "Recipient not found");
                    socket.send(resp).await?;
                }
                MakePaymentStatus::SameUser => {
                    let resp = request_failed(request_id, "MakePayment", "Cannot pay yourself");
                    socket.send(resp).await?;
                }
            }
        }
        CM::Out(out) => {
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "Out", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            let orders_deleted = app_state.db.out(out.market_id, acting_as).await?;
            if !orders_deleted.is_empty() {
                app_state.subscriptions.notify_user_portfolio(acting_as);
            }
            for id in orders_deleted {
                let msg = ServerMessage {
                    request_id: String::new(),
                    message: Some(SM::OrderCancelled(OrderCancelled {
                        id,
                        market_id: out.market_id,
                    })),
                };
                app_state.subscriptions.send_public(msg);
            }
            let resp = server_message(request_id, SM::Out(out));
            socket.send(resp).await?;
        }
        CM::Authenticate(_) => {
            let resp = request_failed(
                request_id,
                "Authenticate",
                "Already authenticated, to re-authenticate open a new websocket connection",
            );
            socket.send(resp).await?;
        }
        CM::ActAs(act_as) => {
            if &act_as.user_id != client_id
                && !app_state.db.is_owner_of(client_id, &act_as.user_id).await?
            {
                let resp = request_failed(request_id, "ActAs", "Not owner of user");
                socket.send(resp).await?;
                return Ok(None);
            }
            return Ok(Some(act_as));
        }
        CM::CreateBot(create_bot) => {
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "CreateBot", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            let status = app_state.db.create_bot(client_id, &create_bot.name).await?;
            match status {
                CreateBotStatus::Success(bot_user) => {
                    app_state.subscriptions.send_private_user(
                        client_id,
                        server_message(
                            request_id,
                            SM::OwnershipReceived(Ownership {
                                of_bot_id: bot_user.id.clone(),
                            }),
                        ),
                    );
                    app_state.subscriptions.send_public(ServerMessage {
                        request_id: String::new(),
                        message: Some(SM::UserCreated(bot_user.into())),
                    });
                }
                CreateBotStatus::NameAlreadyExists => {
                    let resp = request_failed(request_id, "CreateBot", "Bot name already exists");
                    socket.send(resp).await?;
                }
            }
        }
        CM::GiveOwnership(give_ownership) => {
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "GiveOwnership", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            match app_state
                .db
                .give_ownership(
                    client_id,
                    &give_ownership.of_bot_id,
                    &give_ownership.to_user_id,
                )
                .await?
            {
                db::GiveOwnershipStatus::Success => {
                    app_state.subscriptions.send_private_user(
                        &give_ownership.to_user_id,
                        server_message(
                            String::new(),
                            SM::OwnershipReceived(Ownership {
                                of_bot_id: give_ownership.of_bot_id,
                            }),
                        ),
                    );
                    let ownership_given_msg =
                        server_message(request_id, SM::OwnershipGiven(OwnershipGiven {}));
                    socket.send(ownership_given_msg).await?;
                }
                db::GiveOwnershipStatus::AlreadyOwner => {
                    let resp = request_failed(request_id, "GiveOwnership", "Already owner");
                    socket.send(resp).await?;
                }
                db::GiveOwnershipStatus::NotOwner => {
                    let resp = request_failed(request_id, "GiveOwnership", "Not owner");
                    socket.send(resp).await?;
                }
            }
        }
        CM::UpgradeMarketData(UpgradeMarketData { market_id }) => {
            if app_state.connect_ratelimit.check_key(client_id).is_err() {
                let resp =
                    request_failed(request_id, "UpgradeMarketData", "Rate Limited (connecting)");
                socket.send(resp).await?;
                return Ok(None);
            };
            let market: Market = match app_state.db.get_full_market_data(market_id).await? {
                db::GetFullMarketDataStatus::Success(market) => market.into(),
                db::GetFullMarketDataStatus::NotFound => {
                    let resp = request_failed(request_id, "UpgradeMarketData", "Market not found");
                    socket.send(resp).await?;
                    return Ok(None);
                }
            };
            let resp = server_message(request_id, SM::MarketData(market));
            socket.send(resp).await?;
        }
        CM::Redeem(Redeem {
            fund_id,
            amount: amount_float,
        }) => {
            if app_state.mutate_ratelimit.check_key(client_id).is_err() {
                let resp = request_failed(request_id, "Redeem", "Rate Limited (mutating)");
                socket.send(resp).await?;
                return Ok(None);
            };
            let Ok(amount) = amount_float.try_into() else {
                let resp =
                    request_failed(request_id, "Redeem", "Failed converting amount to decimal");
                socket.send(resp).await?;
                return Ok(None);
            };
            match app_state.db.redeem(fund_id, acting_as, amount).await? {
                db::RedeemStatus::Success { transaction_id } => {
                    let msg = ServerMessage {
                        request_id,
                        message: Some(SM::Redeemed(Redeemed {
                            transaction_id,
                            user_id: acting_as.to_string(),
                            fund_id,
                            amount: amount_float,
                        })),
                    };
                    app_state.subscriptions.send_public(msg);
                    app_state.subscriptions.notify_user_portfolio(acting_as);
                }
                db::RedeemStatus::MarketNotRedeemable => {
                    let resp = request_failed(request_id, "Redeem", "Fund not found");
                    socket.send(resp).await?;
                }
                db::RedeemStatus::InsufficientFunds => {
                    let resp = request_failed(request_id, "Redeem", "Insufficient funds");
                    socket.send(resp).await?;
                }
                db::RedeemStatus::InvalidAmount => {
                    let resp = request_failed(request_id, "Redeem", "Invalid amount");
                    socket.send(resp).await?;
                }
                db::RedeemStatus::RedeemerNotFound => {
                    tracing::error!("Redeemer not found");
                    let resp = request_failed(request_id, "Redeem", "Redeemer not found");
                    socket.send(resp).await?;
                }
            }
        }
    };
    Ok(None)
}

fn next_stream_chunk<'a, T>(
    next_value: &'a mut Option<T>,
    chunk_pred: impl Fn(&T) -> bool + 'a,
    all_values: &'a mut (impl Unpin + Stream<Item = Result<T, sqlx::Error>>),
) -> impl Stream<Item = Result<T, sqlx::Error>> + 'a {
    stream! {
        let Some(value) = next_value.take_if(|v| chunk_pred(v)) else {
            return;
        };
        yield Ok(value);
        while let Some(value) = all_values.try_next().await? {
            if !chunk_pred(&value) {
                *next_value = Some(value);
                break;
            }
            yield Ok(value);
        }
    }
}

struct AuthenticatedClient {
    validated_client: ValidatedClient,
    act_as: Option<String>,
    request_id: String,
}

async fn authenticate(
    app_state: &AppState,
    socket: &mut WebSocket,
) -> anyhow::Result<AuthenticatedClient> {
    loop {
        match socket.recv().await {
            Some(Ok(ws::Message::Binary(msg))) => {
                let Ok(ClientMessage {
                    request_id,
                    message: Some(CM::Authenticate(authenticate)),
                }) = ClientMessage::decode(Bytes::from(msg))
                else {
                    let resp =
                        request_failed(String::new(), "Unknown", "Expected Authenticate message");
                    socket.send(resp).await?;
                    continue;
                };
                let id_jwt = if authenticate.id_jwt.is_empty() {
                    None
                } else {
                    Some(authenticate.id_jwt)
                };
                let act_as = if authenticate.act_as.is_empty() {
                    None
                } else {
                    Some(authenticate.act_as)
                };
                let valid_client =
                    match validate_access_and_id(&authenticate.jwt, id_jwt.as_deref()).await {
                        Ok(valid_client) => valid_client,
                        Err(e) => {
                            tracing::error!("JWT validation failed: {e}");
                            let resp =
                                request_failed(request_id, "Authenticate", "JWT validation failed");
                            socket.send(resp).await?;
                            continue;
                        }
                    };
                if let Some(act_as) = &act_as {
                    if &valid_client.id != act_as
                        && !app_state.db.is_owner_of(&valid_client.id, act_as).await?
                    {
                        let resp = request_failed(request_id, "Authenticate", "Not owner of user");
                        socket.send(resp).await?;
                        continue;
                    }
                }
                return Ok(AuthenticatedClient {
                    validated_client: valid_client,
                    act_as,
                    request_id,
                });
            }
            Some(Ok(_)) => {
                let resp = request_failed(String::new(), "Unknown", "Expected Binary message");
                socket.send(resp).await?;
                continue;
            }
            _ => bail!("Never got Authenticate message"),
        }
    }
}

fn request_failed(request_id: String, kind: &str, message: &str) -> ws::Message {
    tracing::error!("Request failed: {kind}, {message}");
    server_message(
        request_id,
        SM::RequestFailed(RequestFailed {
            request_details: Some(RequestDetails { kind: kind.into() }),
            error_details: Some(ErrorDetails {
                message: message.into(),
            }),
        }),
    )
}

#[must_use]
pub fn server_message(request_id: String, message: SM) -> ws::Message {
    ServerMessage {
        request_id,
        message: Some(message),
    }
    .encode_to_vec()
    .into()
}
