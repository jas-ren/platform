import { PUBLIC_SERVER_URL } from '$env/static/public';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { google, websocket_api } from 'schema-js';
import { toast } from 'svelte-sonner';
import { SvelteMap } from 'svelte/reactivity';
import { kinde } from './auth.svelte';
import { notifyUser } from './notifications';

const socket = new ReconnectingWebSocket(PUBLIC_SERVER_URL);
socket.binaryType = 'arraybuffer';

export class MarketData {
	definition: websocket_api.IMarket = $state({});
	orders: websocket_api.IOrder[] = $state([]);
	trades: websocket_api.ITrade[] = $state([]);
	hasFullOrderHistory: boolean = $state(false);
	hasFullTradeHistory: boolean = $state(false);
}

const insertTransaction = (transaction: websocket_api.ITransaction | null | undefined) => {
	if (transaction?.id && transaction.timestamp) {
		serverState.transactions.set(transaction.id, transaction.timestamp);
		serverState.lastKnownTransactionId = transaction.id;
	}
};

export const serverState = $state({
	stale: true,
	userId: undefined as number | undefined,
	actingAs: undefined as number | undefined,
	portfolio: undefined as websocket_api.IPortfolio | undefined,
	payments: [] as websocket_api.IPayment[],
	ownerships: [] as websocket_api.IOwnership[],
	users: new SvelteMap<number, websocket_api.IUser>(),
	markets: new SvelteMap<number, MarketData>(),
	transactions: new SvelteMap<number, google.protobuf.ITimestamp>(),
	lastKnownTransactionId: 0
});

let resolveConnectionToast: ((value: unknown) => void) | undefined;
const startConnectionToast = () => {
	toast.promise(
		() =>
			new Promise((resolve) => {
				resolveConnectionToast = resolve;
			}),
		{
			loading: 'Connecting...',
			success: 'Connected!',
			error: 'Error connecting'
		}
	);
};

let messageQueue: websocket_api.IClientMessage[] = [];
let hasAuthenticated = false;

export const sendClientMessage = (msg: websocket_api.IClientMessage) => {
	if (hasAuthenticated || 'authenticate' in msg) {
		const data = websocket_api.ClientMessage.encode(msg).finish();
		socket.send(data);
		hasAuthenticated = true;
		for (const m of messageQueue) {
			sendClientMessage(m);
		}
		messageQueue = [];
	} else {
		messageQueue.push(msg);
	}
};

socket.onopen = async () => {
	startConnectionToast();
	const accessToken = await kinde.getToken();
	const idToken = await kinde.getIdToken();
	if (!accessToken) {
		console.log('no access token');
		return;
	}
	if (!idToken) {
		console.log('no id token');
		return;
	}
	const actAs = Number(localStorage.getItem('actAs'));
	const authenticate = {
		jwt: accessToken,
		idJwt: idToken,
		actAs: Number.isNaN(actAs) ? undefined : actAs
	};
	console.log('Auth info:', authenticate);
	sendClientMessage({ authenticate });
};

socket.onclose = () => {
	serverState.stale = true;
};

let initialLoadDoneResolve: ((value: unknown) => void) | undefined;
export const initialLoadDone = new Promise((resolve) => {
	initialLoadDoneResolve = resolve;
});

socket.onmessage = (event: MessageEvent) => {
	const data = event.data;
	const msg = websocket_api.ServerMessage.decode(new Uint8Array(data));

	notifyUser(msg);

	if (msg.authenticated) {
		serverState.userId = msg.authenticated.userId;
	}

	if (msg.actingAs) {
		serverState.stale = false;
		if (resolveConnectionToast) {
			resolveConnectionToast('connected');
			resolveConnectionToast = undefined;
		}
		if (initialLoadDoneResolve) {
			initialLoadDoneResolve(true);
			initialLoadDoneResolve = undefined;
		}
		if (msg.actingAs.userId) {
			localStorage.setItem('actAs', msg.actingAs.userId.toString());
		}
		serverState.actingAs = msg.actingAs.userId;
	}

	if (msg.transactions) {
		const transactions = msg.transactions.transactions || [];
		serverState.transactions.clear();
		for (const t of transactions) {
			if (t.id && t.timestamp) {
				serverState.transactions.set(t.id, t.timestamp);
			}
		}
		// transactions always arrive sorted
		serverState.lastKnownTransactionId = transactions[transactions.length - 1]?.id ?? 0;
	}

	if (msg.portfolio) {
		serverState.portfolio = msg.portfolio;
	}

	if (msg.payments) {
		serverState.payments = msg.payments.payments || [];
	}

	const paymentCreated = msg.paymentCreated;
	if (paymentCreated) {
		insertTransaction(paymentCreated.transaction);
		if (!serverState.payments.find((p) => p.id === paymentCreated.id)) {
			serverState.payments.push(paymentCreated);
		}
	}

	if (msg.ownerships) {
		serverState.ownerships = msg.ownerships.ownerships || [];
	}

	const ownershipReceived = msg.ownershipReceived;
	if (ownershipReceived) {
		if (!serverState.ownerships.find((o) => o.ofBotId === ownershipReceived.ofBotId)) {
			serverState.ownerships.push(ownershipReceived);
		}
	}

	if (msg.users) {
		serverState.users.clear();
		for (const user of msg.users.users || []) {
			serverState.users.set(user.id, user);
		}
	}

	const userCreated = msg.userCreated;
	if (userCreated) {
		serverState.users.set(userCreated.id, userCreated);
	}

	const market = msg.market;
	if (market) {
		insertTransaction(market.transaction);
		const marketData = serverState.markets.get(market.id) || new MarketData();
		serverState.markets.set(market.id, marketData);
		marketData.definition = websocket_api.Market.toObject(market as websocket_api.Market, {
			defaults: true
		});
	}

	const orders = msg.orders;
	if (orders) {
		const marketData = serverState.markets.get(orders.marketId) || new MarketData();
		serverState.markets.set(orders.marketId, marketData);
		marketData.orders = (orders.orders || []).map((order) =>
			websocket_api.Order.toObject(order as websocket_api.Order, { defaults: true })
		);
		marketData.hasFullOrderHistory = orders.hasFullHistory || false;
	}

	const trades = msg.trades;
	if (trades) {
		const marketData = serverState.markets.get(trades.marketId) || new MarketData();
		serverState.markets.set(trades.marketId, marketData);
		marketData.trades = (trades.trades ?? []).map((trade) =>
			websocket_api.Trade.toObject(trade as websocket_api.Trade, { defaults: true })
		);
		marketData.hasFullTradeHistory = trades.hasFullHistory ?? false;
	}

	const marketSettled = msg.marketSettled;
	if (marketSettled) {
		insertTransaction(marketSettled.transaction);
		const marketData = serverState.markets.get(marketSettled.id);
		if (marketData) {
			marketData.definition.closed = {
				settlePrice: marketSettled.settlePrice,
				transactionId: marketSettled.transaction?.id
			};
			marketData.orders = [];
		} else {
			console.error(`Market ${marketSettled.id} not already in state`);
		}
	}

	const ordersCancelled = msg.ordersCancelled;
	if (ordersCancelled) {
		insertTransaction(ordersCancelled.transaction);
		const marketData = serverState.markets.get(ordersCancelled.marketId);
		if (!marketData) {
			console.error(`Market ${ordersCancelled.marketId} not already in state`);
			return;
		}

		if (marketData.hasFullOrderHistory) {
			for (const order of marketData.orders) {
				if (ordersCancelled.orderIds?.includes(order.id)) {
					order.size = 0;
					order.sizes = order.sizes || [];
					order.sizes.push({
						transactionId: ordersCancelled.transaction?.id,
						size: 0
					});
				}
			}
		} else {
			marketData.orders = marketData.orders.filter(
				(order) => !ordersCancelled.orderIds?.includes(order.id)
			);
		}
	}

	const orderCreated = msg.orderCreated;
	if (orderCreated) {
		insertTransaction(orderCreated.transaction);
		const marketData = serverState.markets.get(orderCreated.marketId);
		if (!marketData) {
			console.error(`Market ${orderCreated.marketId} not already in state`);
			return;
		}

		if (orderCreated.order) {
			marketData.orders.push(
				websocket_api.Order.toObject(orderCreated.order as websocket_api.Order, { defaults: true })
			);
		}

		const fills = orderCreated.fills;
		if (fills && fills.length) {
			if (marketData.hasFullOrderHistory) {
				for (const order of marketData.orders) {
					const fill = fills.find((f) => f.id === order.id);
					if (fill?.sizeRemaining !== undefined) {
						order.size = fill.sizeRemaining;
						order.sizes = order.sizes || [];
						order.sizes.push({
							transactionId: orderCreated.transaction?.id,
							size: fill.sizeRemaining
						});
					}
				}
			} else {
				const fullyFilledOrders = fills
					.filter((fill) => fill.sizeRemaining === 0)
					.map((fill) => fill.id);
				marketData.orders = marketData.orders.filter(
					(order) => !fullyFilledOrders.includes(order.id)
				);
				const partialFills = fills.filter((fill) => fill.sizeRemaining !== 0);
				for (const order of marketData.orders) {
					const fill = partialFills.find((f) => f.id === order.id);
					if (fill) {
						order.size = fill.sizeRemaining;
					}
				}
			}
		}

		if (orderCreated.trades) {
			marketData.trades.push(
				...orderCreated.trades.map((trade) =>
					websocket_api.Trade.toObject(trade as websocket_api.Trade, { defaults: true })
				)
			);
		}
	}
};
