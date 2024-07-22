import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace websocket_api. */
export namespace websocket_api {

    /** Properties of a ServerMessage. */
    interface IServerMessage {

        /** ServerMessage portfolio */
        portfolio?: (websocket_api.IPortfolio|null);

        /** ServerMessage marketData */
        marketData?: (websocket_api.IMarket|null);

        /** ServerMessage marketCreated */
        marketCreated?: (websocket_api.IMarket|null);

        /** ServerMessage marketSettled */
        marketSettled?: (websocket_api.IMarketSettled|null);

        /** ServerMessage orderCreated */
        orderCreated?: (websocket_api.IOrderCreated|null);

        /** ServerMessage orderCancelled */
        orderCancelled?: (websocket_api.IOrderCancelled|null);

        /** ServerMessage payments */
        payments?: (websocket_api.IPayments|null);

        /** ServerMessage paymentCreated */
        paymentCreated?: (websocket_api.IPayment|null);

        /** ServerMessage out */
        out?: (websocket_api.IOut|null);

        /** ServerMessage authenticated */
        authenticated?: (websocket_api.IAuthenticated|null);

        /** ServerMessage requestFailed */
        requestFailed?: (websocket_api.IRequestFailed|null);
    }

    /** Represents a ServerMessage. */
    class ServerMessage implements IServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IServerMessage);

        /** ServerMessage portfolio. */
        public portfolio?: (websocket_api.IPortfolio|null);

        /** ServerMessage marketData. */
        public marketData?: (websocket_api.IMarket|null);

        /** ServerMessage marketCreated. */
        public marketCreated?: (websocket_api.IMarket|null);

        /** ServerMessage marketSettled. */
        public marketSettled?: (websocket_api.IMarketSettled|null);

        /** ServerMessage orderCreated. */
        public orderCreated?: (websocket_api.IOrderCreated|null);

        /** ServerMessage orderCancelled. */
        public orderCancelled?: (websocket_api.IOrderCancelled|null);

        /** ServerMessage payments. */
        public payments?: (websocket_api.IPayments|null);

        /** ServerMessage paymentCreated. */
        public paymentCreated?: (websocket_api.IPayment|null);

        /** ServerMessage out. */
        public out?: (websocket_api.IOut|null);

        /** ServerMessage authenticated. */
        public authenticated?: (websocket_api.IAuthenticated|null);

        /** ServerMessage requestFailed. */
        public requestFailed?: (websocket_api.IRequestFailed|null);

        /** ServerMessage message. */
        public message?: ("portfolio"|"marketData"|"marketCreated"|"marketSettled"|"orderCreated"|"orderCancelled"|"payments"|"paymentCreated"|"out"|"authenticated"|"requestFailed");

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMessage instance
         */
        public static create(properties?: websocket_api.IServerMessage): websocket_api.ServerMessage;

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link websocket_api.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link websocket_api.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.ServerMessage;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.ServerMessage;

        /**
         * Verifies a ServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerMessage
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.ServerMessage;

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param message ServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Authenticated. */
    interface IAuthenticated {
    }

    /** Represents an Authenticated. */
    class Authenticated implements IAuthenticated {

        /**
         * Constructs a new Authenticated.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IAuthenticated);

        /**
         * Creates a new Authenticated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Authenticated instance
         */
        public static create(properties?: websocket_api.IAuthenticated): websocket_api.Authenticated;

        /**
         * Encodes the specified Authenticated message. Does not implicitly {@link websocket_api.Authenticated.verify|verify} messages.
         * @param message Authenticated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IAuthenticated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Authenticated message, length delimited. Does not implicitly {@link websocket_api.Authenticated.verify|verify} messages.
         * @param message Authenticated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IAuthenticated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Authenticated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Authenticated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Authenticated;

        /**
         * Decodes an Authenticated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Authenticated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Authenticated;

        /**
         * Verifies an Authenticated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Authenticated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Authenticated
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Authenticated;

        /**
         * Creates a plain object from an Authenticated message. Also converts values to other types if specified.
         * @param message Authenticated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Authenticated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Authenticated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Authenticated
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Portfolio. */
    interface IPortfolio {

        /** Portfolio totalBalance */
        totalBalance?: (string|null);

        /** Portfolio availableBalance */
        availableBalance?: (string|null);

        /** Portfolio marketExposures */
        marketExposures?: (websocket_api.Portfolio.IMarketExposure[]|null);
    }

    /** Represents a Portfolio. */
    class Portfolio implements IPortfolio {

        /**
         * Constructs a new Portfolio.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IPortfolio);

        /** Portfolio totalBalance. */
        public totalBalance: string;

        /** Portfolio availableBalance. */
        public availableBalance: string;

        /** Portfolio marketExposures. */
        public marketExposures: websocket_api.Portfolio.IMarketExposure[];

        /**
         * Creates a new Portfolio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Portfolio instance
         */
        public static create(properties?: websocket_api.IPortfolio): websocket_api.Portfolio;

        /**
         * Encodes the specified Portfolio message. Does not implicitly {@link websocket_api.Portfolio.verify|verify} messages.
         * @param message Portfolio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IPortfolio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Portfolio message, length delimited. Does not implicitly {@link websocket_api.Portfolio.verify|verify} messages.
         * @param message Portfolio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IPortfolio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Portfolio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Portfolio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Portfolio;

        /**
         * Decodes a Portfolio message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Portfolio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Portfolio;

        /**
         * Verifies a Portfolio message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Portfolio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Portfolio
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Portfolio;

        /**
         * Creates a plain object from a Portfolio message. Also converts values to other types if specified.
         * @param message Portfolio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Portfolio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Portfolio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Portfolio
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Portfolio {

        /** Properties of a MarketExposure. */
        interface IMarketExposure {

            /** MarketExposure marketId */
            marketId?: (number|Long|null);

            /** MarketExposure position */
            position?: (string|null);

            /** MarketExposure totalBidSize */
            totalBidSize?: (string|null);

            /** MarketExposure totalOfferSize */
            totalOfferSize?: (string|null);

            /** MarketExposure totalBidValue */
            totalBidValue?: (string|null);

            /** MarketExposure totalOfferValue */
            totalOfferValue?: (string|null);
        }

        /** Represents a MarketExposure. */
        class MarketExposure implements IMarketExposure {

            /**
             * Constructs a new MarketExposure.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.Portfolio.IMarketExposure);

            /** MarketExposure marketId. */
            public marketId: (number|Long);

            /** MarketExposure position. */
            public position: string;

            /** MarketExposure totalBidSize. */
            public totalBidSize: string;

            /** MarketExposure totalOfferSize. */
            public totalOfferSize: string;

            /** MarketExposure totalBidValue. */
            public totalBidValue: string;

            /** MarketExposure totalOfferValue. */
            public totalOfferValue: string;

            /**
             * Creates a new MarketExposure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MarketExposure instance
             */
            public static create(properties?: websocket_api.Portfolio.IMarketExposure): websocket_api.Portfolio.MarketExposure;

            /**
             * Encodes the specified MarketExposure message. Does not implicitly {@link websocket_api.Portfolio.MarketExposure.verify|verify} messages.
             * @param message MarketExposure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: websocket_api.Portfolio.IMarketExposure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MarketExposure message, length delimited. Does not implicitly {@link websocket_api.Portfolio.MarketExposure.verify|verify} messages.
             * @param message MarketExposure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: websocket_api.Portfolio.IMarketExposure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MarketExposure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MarketExposure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Portfolio.MarketExposure;

            /**
             * Decodes a MarketExposure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MarketExposure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Portfolio.MarketExposure;

            /**
             * Verifies a MarketExposure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MarketExposure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MarketExposure
             */
            public static fromObject(object: { [k: string]: any }): websocket_api.Portfolio.MarketExposure;

            /**
             * Creates a plain object from a MarketExposure message. Also converts values to other types if specified.
             * @param message MarketExposure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: websocket_api.Portfolio.MarketExposure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MarketExposure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MarketExposure
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Market. */
    interface IMarket {

        /** Market id */
        id?: (number|Long|null);

        /** Market name */
        name?: (string|null);

        /** Market description */
        description?: (string|null);

        /** Market ownerId */
        ownerId?: (string|null);

        /** Market createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);

        /** Market minSettlement */
        minSettlement?: (string|null);

        /** Market maxSettlement */
        maxSettlement?: (string|null);

        /** Market open */
        open?: (websocket_api.Market.IOpen|null);

        /** Market closed */
        closed?: (websocket_api.Market.IClosed|null);

        /** Market orders */
        orders?: (websocket_api.IOrder[]|null);

        /** Market trades */
        trades?: (websocket_api.ITrade[]|null);
    }

    /** Represents a Market. */
    class Market implements IMarket {

        /**
         * Constructs a new Market.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IMarket);

        /** Market id. */
        public id: (number|Long);

        /** Market name. */
        public name: string;

        /** Market description. */
        public description: string;

        /** Market ownerId. */
        public ownerId: string;

        /** Market createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /** Market minSettlement. */
        public minSettlement: string;

        /** Market maxSettlement. */
        public maxSettlement: string;

        /** Market open. */
        public open?: (websocket_api.Market.IOpen|null);

        /** Market closed. */
        public closed?: (websocket_api.Market.IClosed|null);

        /** Market orders. */
        public orders: websocket_api.IOrder[];

        /** Market trades. */
        public trades: websocket_api.ITrade[];

        /** Market status. */
        public status?: ("open"|"closed");

        /**
         * Creates a new Market instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Market instance
         */
        public static create(properties?: websocket_api.IMarket): websocket_api.Market;

        /**
         * Encodes the specified Market message. Does not implicitly {@link websocket_api.Market.verify|verify} messages.
         * @param message Market message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IMarket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Market message, length delimited. Does not implicitly {@link websocket_api.Market.verify|verify} messages.
         * @param message Market message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IMarket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Market message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Market
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Market;

        /**
         * Decodes a Market message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Market
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Market;

        /**
         * Verifies a Market message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Market message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Market
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Market;

        /**
         * Creates a plain object from a Market message. Also converts values to other types if specified.
         * @param message Market
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Market, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Market to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Market
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Market {

        /** Properties of an Open. */
        interface IOpen {
        }

        /** Represents an Open. */
        class Open implements IOpen {

            /**
             * Constructs a new Open.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.Market.IOpen);

            /**
             * Creates a new Open instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Open instance
             */
            public static create(properties?: websocket_api.Market.IOpen): websocket_api.Market.Open;

            /**
             * Encodes the specified Open message. Does not implicitly {@link websocket_api.Market.Open.verify|verify} messages.
             * @param message Open message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: websocket_api.Market.IOpen, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Open message, length delimited. Does not implicitly {@link websocket_api.Market.Open.verify|verify} messages.
             * @param message Open message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: websocket_api.Market.IOpen, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Open message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Open
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Market.Open;

            /**
             * Decodes an Open message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Open
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Market.Open;

            /**
             * Verifies an Open message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Open message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Open
             */
            public static fromObject(object: { [k: string]: any }): websocket_api.Market.Open;

            /**
             * Creates a plain object from an Open message. Also converts values to other types if specified.
             * @param message Open
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: websocket_api.Market.Open, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Open to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Open
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Closed. */
        interface IClosed {

            /** Closed settlePrice */
            settlePrice?: (string|null);
        }

        /** Represents a Closed. */
        class Closed implements IClosed {

            /**
             * Constructs a new Closed.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.Market.IClosed);

            /** Closed settlePrice. */
            public settlePrice: string;

            /**
             * Creates a new Closed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Closed instance
             */
            public static create(properties?: websocket_api.Market.IClosed): websocket_api.Market.Closed;

            /**
             * Encodes the specified Closed message. Does not implicitly {@link websocket_api.Market.Closed.verify|verify} messages.
             * @param message Closed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: websocket_api.Market.IClosed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Closed message, length delimited. Does not implicitly {@link websocket_api.Market.Closed.verify|verify} messages.
             * @param message Closed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: websocket_api.Market.IClosed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Closed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Closed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Market.Closed;

            /**
             * Decodes a Closed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Closed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Market.Closed;

            /**
             * Verifies a Closed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Closed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Closed
             */
            public static fromObject(object: { [k: string]: any }): websocket_api.Market.Closed;

            /**
             * Creates a plain object from a Closed message. Also converts values to other types if specified.
             * @param message Closed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: websocket_api.Market.Closed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Closed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Closed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an Order. */
    interface IOrder {

        /** Order id */
        id?: (number|Long|null);

        /** Order marketId */
        marketId?: (number|Long|null);

        /** Order ownerId */
        ownerId?: (string|null);

        /** Order createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);

        /** Order price */
        price?: (string|null);

        /** Order size */
        size?: (string|null);

        /** Order side */
        side?: (websocket_api.Side|null);
    }

    /** Represents an Order. */
    class Order implements IOrder {

        /**
         * Constructs a new Order.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOrder);

        /** Order id. */
        public id: (number|Long);

        /** Order marketId. */
        public marketId: (number|Long);

        /** Order ownerId. */
        public ownerId: string;

        /** Order createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /** Order price. */
        public price: string;

        /** Order size. */
        public size: string;

        /** Order side. */
        public side: websocket_api.Side;

        /**
         * Creates a new Order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Order instance
         */
        public static create(properties?: websocket_api.IOrder): websocket_api.Order;

        /**
         * Encodes the specified Order message. Does not implicitly {@link websocket_api.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link websocket_api.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Order;

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Order;

        /**
         * Verifies an Order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Order
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Order;

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @param message Order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Order
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Side enum. */
    enum Side {
        UNKNOWN = 0,
        BID = 1,
        OFFER = 2
    }

    /** Properties of a Trade. */
    interface ITrade {

        /** Trade id */
        id?: (number|Long|null);

        /** Trade marketId */
        marketId?: (number|Long|null);

        /** Trade createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);

        /** Trade price */
        price?: (string|null);

        /** Trade size */
        size?: (string|null);

        /** Trade buyerId */
        buyerId?: (string|null);

        /** Trade sellerId */
        sellerId?: (string|null);
    }

    /** Represents a Trade. */
    class Trade implements ITrade {

        /**
         * Constructs a new Trade.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ITrade);

        /** Trade id. */
        public id: (number|Long);

        /** Trade marketId. */
        public marketId: (number|Long);

        /** Trade createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /** Trade price. */
        public price: string;

        /** Trade size. */
        public size: string;

        /** Trade buyerId. */
        public buyerId: string;

        /** Trade sellerId. */
        public sellerId: string;

        /**
         * Creates a new Trade instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Trade instance
         */
        public static create(properties?: websocket_api.ITrade): websocket_api.Trade;

        /**
         * Encodes the specified Trade message. Does not implicitly {@link websocket_api.Trade.verify|verify} messages.
         * @param message Trade message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ITrade, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Trade message, length delimited. Does not implicitly {@link websocket_api.Trade.verify|verify} messages.
         * @param message Trade message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ITrade, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Trade message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Trade;

        /**
         * Decodes a Trade message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Trade;

        /**
         * Verifies a Trade message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Trade message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trade
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Trade;

        /**
         * Creates a plain object from a Trade message. Also converts values to other types if specified.
         * @param message Trade
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Trade, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trade to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Trade
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MarketSettled. */
    interface IMarketSettled {

        /** MarketSettled id */
        id?: (number|Long|null);

        /** MarketSettled settlePrice */
        settlePrice?: (string|null);
    }

    /** Represents a MarketSettled. */
    class MarketSettled implements IMarketSettled {

        /**
         * Constructs a new MarketSettled.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IMarketSettled);

        /** MarketSettled id. */
        public id: (number|Long);

        /** MarketSettled settlePrice. */
        public settlePrice: string;

        /**
         * Creates a new MarketSettled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MarketSettled instance
         */
        public static create(properties?: websocket_api.IMarketSettled): websocket_api.MarketSettled;

        /**
         * Encodes the specified MarketSettled message. Does not implicitly {@link websocket_api.MarketSettled.verify|verify} messages.
         * @param message MarketSettled message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IMarketSettled, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MarketSettled message, length delimited. Does not implicitly {@link websocket_api.MarketSettled.verify|verify} messages.
         * @param message MarketSettled message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IMarketSettled, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MarketSettled message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MarketSettled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.MarketSettled;

        /**
         * Decodes a MarketSettled message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MarketSettled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.MarketSettled;

        /**
         * Verifies a MarketSettled message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MarketSettled message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MarketSettled
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.MarketSettled;

        /**
         * Creates a plain object from a MarketSettled message. Also converts values to other types if specified.
         * @param message MarketSettled
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.MarketSettled, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MarketSettled to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MarketSettled
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderCancelled. */
    interface IOrderCancelled {

        /** OrderCancelled id */
        id?: (number|Long|null);

        /** OrderCancelled marketId */
        marketId?: (number|Long|null);
    }

    /** Represents an OrderCancelled. */
    class OrderCancelled implements IOrderCancelled {

        /**
         * Constructs a new OrderCancelled.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOrderCancelled);

        /** OrderCancelled id. */
        public id: (number|Long);

        /** OrderCancelled marketId. */
        public marketId: (number|Long);

        /**
         * Creates a new OrderCancelled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderCancelled instance
         */
        public static create(properties?: websocket_api.IOrderCancelled): websocket_api.OrderCancelled;

        /**
         * Encodes the specified OrderCancelled message. Does not implicitly {@link websocket_api.OrderCancelled.verify|verify} messages.
         * @param message OrderCancelled message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOrderCancelled, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderCancelled message, length delimited. Does not implicitly {@link websocket_api.OrderCancelled.verify|verify} messages.
         * @param message OrderCancelled message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOrderCancelled, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderCancelled message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderCancelled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.OrderCancelled;

        /**
         * Decodes an OrderCancelled message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderCancelled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.OrderCancelled;

        /**
         * Verifies an OrderCancelled message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderCancelled message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderCancelled
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.OrderCancelled;

        /**
         * Creates a plain object from an OrderCancelled message. Also converts values to other types if specified.
         * @param message OrderCancelled
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.OrderCancelled, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderCancelled to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderCancelled
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderCreated. */
    interface IOrderCreated {

        /** OrderCreated marketId */
        marketId?: (number|Long|null);

        /** OrderCreated userId */
        userId?: (string|null);

        /** OrderCreated order */
        order?: (websocket_api.IOrder|null);

        /** OrderCreated fills */
        fills?: (websocket_api.OrderCreated.IOrderFill[]|null);

        /** OrderCreated trades */
        trades?: (websocket_api.ITrade[]|null);
    }

    /** Represents an OrderCreated. */
    class OrderCreated implements IOrderCreated {

        /**
         * Constructs a new OrderCreated.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOrderCreated);

        /** OrderCreated marketId. */
        public marketId: (number|Long);

        /** OrderCreated userId. */
        public userId: string;

        /** OrderCreated order. */
        public order?: (websocket_api.IOrder|null);

        /** OrderCreated fills. */
        public fills: websocket_api.OrderCreated.IOrderFill[];

        /** OrderCreated trades. */
        public trades: websocket_api.ITrade[];

        /** OrderCreated _order. */
        public _order?: "order";

        /**
         * Creates a new OrderCreated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderCreated instance
         */
        public static create(properties?: websocket_api.IOrderCreated): websocket_api.OrderCreated;

        /**
         * Encodes the specified OrderCreated message. Does not implicitly {@link websocket_api.OrderCreated.verify|verify} messages.
         * @param message OrderCreated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOrderCreated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderCreated message, length delimited. Does not implicitly {@link websocket_api.OrderCreated.verify|verify} messages.
         * @param message OrderCreated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOrderCreated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderCreated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.OrderCreated;

        /**
         * Decodes an OrderCreated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.OrderCreated;

        /**
         * Verifies an OrderCreated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderCreated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderCreated
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.OrderCreated;

        /**
         * Creates a plain object from an OrderCreated message. Also converts values to other types if specified.
         * @param message OrderCreated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.OrderCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderCreated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderCreated
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace OrderCreated {

        /** Properties of an OrderFill. */
        interface IOrderFill {

            /** OrderFill id */
            id?: (number|Long|null);

            /** OrderFill marketId */
            marketId?: (number|Long|null);

            /** OrderFill ownerId */
            ownerId?: (string|null);

            /** OrderFill sizeFilled */
            sizeFilled?: (string|null);

            /** OrderFill sizeRemaining */
            sizeRemaining?: (string|null);

            /** OrderFill price */
            price?: (string|null);

            /** OrderFill side */
            side?: (websocket_api.Side|null);
        }

        /** Represents an OrderFill. */
        class OrderFill implements IOrderFill {

            /**
             * Constructs a new OrderFill.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.OrderCreated.IOrderFill);

            /** OrderFill id. */
            public id: (number|Long);

            /** OrderFill marketId. */
            public marketId: (number|Long);

            /** OrderFill ownerId. */
            public ownerId: string;

            /** OrderFill sizeFilled. */
            public sizeFilled: string;

            /** OrderFill sizeRemaining. */
            public sizeRemaining: string;

            /** OrderFill price. */
            public price: string;

            /** OrderFill side. */
            public side: websocket_api.Side;

            /**
             * Creates a new OrderFill instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderFill instance
             */
            public static create(properties?: websocket_api.OrderCreated.IOrderFill): websocket_api.OrderCreated.OrderFill;

            /**
             * Encodes the specified OrderFill message. Does not implicitly {@link websocket_api.OrderCreated.OrderFill.verify|verify} messages.
             * @param message OrderFill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: websocket_api.OrderCreated.IOrderFill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderFill message, length delimited. Does not implicitly {@link websocket_api.OrderCreated.OrderFill.verify|verify} messages.
             * @param message OrderFill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: websocket_api.OrderCreated.IOrderFill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderFill message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderFill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.OrderCreated.OrderFill;

            /**
             * Decodes an OrderFill message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderFill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.OrderCreated.OrderFill;

            /**
             * Verifies an OrderFill message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderFill message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderFill
             */
            public static fromObject(object: { [k: string]: any }): websocket_api.OrderCreated.OrderFill;

            /**
             * Creates a plain object from an OrderFill message. Also converts values to other types if specified.
             * @param message OrderFill
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: websocket_api.OrderCreated.OrderFill, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderFill to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrderFill
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Payment. */
    interface IPayment {

        /** Payment id */
        id?: (number|Long|null);

        /** Payment payerId */
        payerId?: (string|null);

        /** Payment recipientId */
        recipientId?: (string|null);

        /** Payment amount */
        amount?: (string|null);

        /** Payment note */
        note?: (string|null);

        /** Payment createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Payment. */
    class Payment implements IPayment {

        /**
         * Constructs a new Payment.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IPayment);

        /** Payment id. */
        public id: (number|Long);

        /** Payment payerId. */
        public payerId: string;

        /** Payment recipientId. */
        public recipientId: string;

        /** Payment amount. */
        public amount: string;

        /** Payment note. */
        public note: string;

        /** Payment createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Payment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payment instance
         */
        public static create(properties?: websocket_api.IPayment): websocket_api.Payment;

        /**
         * Encodes the specified Payment message. Does not implicitly {@link websocket_api.Payment.verify|verify} messages.
         * @param message Payment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payment message, length delimited. Does not implicitly {@link websocket_api.Payment.verify|verify} messages.
         * @param message Payment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Payment;

        /**
         * Decodes a Payment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Payment;

        /**
         * Verifies a Payment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payment
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Payment;

        /**
         * Creates a plain object from a Payment message. Also converts values to other types if specified.
         * @param message Payment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Payment
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Payments. */
    interface IPayments {

        /** Payments payments */
        payments?: (websocket_api.IPayment[]|null);
    }

    /** Represents a Payments. */
    class Payments implements IPayments {

        /**
         * Constructs a new Payments.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IPayments);

        /** Payments payments. */
        public payments: websocket_api.IPayment[];

        /**
         * Creates a new Payments instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payments instance
         */
        public static create(properties?: websocket_api.IPayments): websocket_api.Payments;

        /**
         * Encodes the specified Payments message. Does not implicitly {@link websocket_api.Payments.verify|verify} messages.
         * @param message Payments message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IPayments, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payments message, length delimited. Does not implicitly {@link websocket_api.Payments.verify|verify} messages.
         * @param message Payments message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IPayments, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payments message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Payments;

        /**
         * Decodes a Payments message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Payments;

        /**
         * Verifies a Payments message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payments message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payments
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Payments;

        /**
         * Creates a plain object from a Payments message. Also converts values to other types if specified.
         * @param message Payments
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Payments, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payments to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Payments
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestFailed. */
    interface IRequestFailed {

        /** RequestFailed requestDetails */
        requestDetails?: (websocket_api.RequestFailed.IRequestDetails|null);

        /** RequestFailed errorDetails */
        errorDetails?: (websocket_api.RequestFailed.IErrorDetails|null);
    }

    /** Represents a RequestFailed. */
    class RequestFailed implements IRequestFailed {

        /**
         * Constructs a new RequestFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IRequestFailed);

        /** RequestFailed requestDetails. */
        public requestDetails?: (websocket_api.RequestFailed.IRequestDetails|null);

        /** RequestFailed errorDetails. */
        public errorDetails?: (websocket_api.RequestFailed.IErrorDetails|null);

        /**
         * Creates a new RequestFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFailed instance
         */
        public static create(properties?: websocket_api.IRequestFailed): websocket_api.RequestFailed;

        /**
         * Encodes the specified RequestFailed message. Does not implicitly {@link websocket_api.RequestFailed.verify|verify} messages.
         * @param message RequestFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IRequestFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFailed message, length delimited. Does not implicitly {@link websocket_api.RequestFailed.verify|verify} messages.
         * @param message RequestFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IRequestFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.RequestFailed;

        /**
         * Decodes a RequestFailed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.RequestFailed;

        /**
         * Verifies a RequestFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFailed
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.RequestFailed;

        /**
         * Creates a plain object from a RequestFailed message. Also converts values to other types if specified.
         * @param message RequestFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.RequestFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestFailed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RequestFailed {

        /** Properties of a RequestDetails. */
        interface IRequestDetails {

            /** RequestDetails kind */
            kind?: (string|null);
        }

        /** Represents a RequestDetails. */
        class RequestDetails implements IRequestDetails {

            /**
             * Constructs a new RequestDetails.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.RequestFailed.IRequestDetails);

            /** RequestDetails kind. */
            public kind: string;

            /**
             * Creates a new RequestDetails instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestDetails instance
             */
            public static create(properties?: websocket_api.RequestFailed.IRequestDetails): websocket_api.RequestFailed.RequestDetails;

            /**
             * Encodes the specified RequestDetails message. Does not implicitly {@link websocket_api.RequestFailed.RequestDetails.verify|verify} messages.
             * @param message RequestDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: websocket_api.RequestFailed.IRequestDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestDetails message, length delimited. Does not implicitly {@link websocket_api.RequestFailed.RequestDetails.verify|verify} messages.
             * @param message RequestDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: websocket_api.RequestFailed.IRequestDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestDetails message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.RequestFailed.RequestDetails;

            /**
             * Decodes a RequestDetails message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.RequestFailed.RequestDetails;

            /**
             * Verifies a RequestDetails message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestDetails message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestDetails
             */
            public static fromObject(object: { [k: string]: any }): websocket_api.RequestFailed.RequestDetails;

            /**
             * Creates a plain object from a RequestDetails message. Also converts values to other types if specified.
             * @param message RequestDetails
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: websocket_api.RequestFailed.RequestDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestDetails to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RequestDetails
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ErrorDetails. */
        interface IErrorDetails {

            /** ErrorDetails message */
            message?: (string|null);
        }

        /** Represents an ErrorDetails. */
        class ErrorDetails implements IErrorDetails {

            /**
             * Constructs a new ErrorDetails.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.RequestFailed.IErrorDetails);

            /** ErrorDetails message. */
            public message: string;

            /**
             * Creates a new ErrorDetails instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorDetails instance
             */
            public static create(properties?: websocket_api.RequestFailed.IErrorDetails): websocket_api.RequestFailed.ErrorDetails;

            /**
             * Encodes the specified ErrorDetails message. Does not implicitly {@link websocket_api.RequestFailed.ErrorDetails.verify|verify} messages.
             * @param message ErrorDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: websocket_api.RequestFailed.IErrorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorDetails message, length delimited. Does not implicitly {@link websocket_api.RequestFailed.ErrorDetails.verify|verify} messages.
             * @param message ErrorDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: websocket_api.RequestFailed.IErrorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorDetails message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.RequestFailed.ErrorDetails;

            /**
             * Decodes an ErrorDetails message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.RequestFailed.ErrorDetails;

            /**
             * Verifies an ErrorDetails message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorDetails message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorDetails
             */
            public static fromObject(object: { [k: string]: any }): websocket_api.RequestFailed.ErrorDetails;

            /**
             * Creates a plain object from an ErrorDetails message. Also converts values to other types if specified.
             * @param message ErrorDetails
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: websocket_api.RequestFailed.ErrorDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorDetails to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ErrorDetails
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an Out. */
    interface IOut {

        /** Out marketId */
        marketId?: (number|Long|null);
    }

    /** Represents an Out. */
    class Out implements IOut {

        /**
         * Constructs a new Out.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOut);

        /** Out marketId. */
        public marketId: (number|Long);

        /**
         * Creates a new Out instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Out instance
         */
        public static create(properties?: websocket_api.IOut): websocket_api.Out;

        /**
         * Encodes the specified Out message. Does not implicitly {@link websocket_api.Out.verify|verify} messages.
         * @param message Out message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Out message, length delimited. Does not implicitly {@link websocket_api.Out.verify|verify} messages.
         * @param message Out message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Out message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Out
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Out;

        /**
         * Decodes an Out message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Out
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Out;

        /**
         * Verifies an Out message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Out message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Out
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Out;

        /**
         * Creates a plain object from an Out message. Also converts values to other types if specified.
         * @param message Out
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Out, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Out to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Out
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage createMarket */
        createMarket?: (websocket_api.ICreateMarket|null);

        /** ClientMessage settleMarket */
        settleMarket?: (websocket_api.ISettleMarket|null);

        /** ClientMessage createOrder */
        createOrder?: (websocket_api.ICreateOrder|null);

        /** ClientMessage cancelOrder */
        cancelOrder?: (websocket_api.ICancelOrder|null);

        /** ClientMessage out */
        out?: (websocket_api.IOut|null);

        /** ClientMessage makePayment */
        makePayment?: (websocket_api.IMakePayment|null);

        /** ClientMessage authenticate */
        authenticate?: (websocket_api.IAuthenticate|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IClientMessage);

        /** ClientMessage createMarket. */
        public createMarket?: (websocket_api.ICreateMarket|null);

        /** ClientMessage settleMarket. */
        public settleMarket?: (websocket_api.ISettleMarket|null);

        /** ClientMessage createOrder. */
        public createOrder?: (websocket_api.ICreateOrder|null);

        /** ClientMessage cancelOrder. */
        public cancelOrder?: (websocket_api.ICancelOrder|null);

        /** ClientMessage out. */
        public out?: (websocket_api.IOut|null);

        /** ClientMessage makePayment. */
        public makePayment?: (websocket_api.IMakePayment|null);

        /** ClientMessage authenticate. */
        public authenticate?: (websocket_api.IAuthenticate|null);

        /** ClientMessage message. */
        public message?: ("createMarket"|"settleMarket"|"createOrder"|"cancelOrder"|"out"|"makePayment"|"authenticate");

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        public static create(properties?: websocket_api.IClientMessage): websocket_api.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link websocket_api.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link websocket_api.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.ClientMessage;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.ClientMessage;

        /**
         * Verifies a ClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMessage
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CancelOrder. */
    interface ICancelOrder {

        /** CancelOrder id */
        id?: (number|Long|null);
    }

    /** Represents a CancelOrder. */
    class CancelOrder implements ICancelOrder {

        /**
         * Constructs a new CancelOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ICancelOrder);

        /** CancelOrder id. */
        public id: (number|Long);

        /**
         * Creates a new CancelOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelOrder instance
         */
        public static create(properties?: websocket_api.ICancelOrder): websocket_api.CancelOrder;

        /**
         * Encodes the specified CancelOrder message. Does not implicitly {@link websocket_api.CancelOrder.verify|verify} messages.
         * @param message CancelOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ICancelOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelOrder message, length delimited. Does not implicitly {@link websocket_api.CancelOrder.verify|verify} messages.
         * @param message CancelOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ICancelOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.CancelOrder;

        /**
         * Decodes a CancelOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.CancelOrder;

        /**
         * Verifies a CancelOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelOrder
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.CancelOrder;

        /**
         * Creates a plain object from a CancelOrder message. Also converts values to other types if specified.
         * @param message CancelOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.CancelOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelOrder
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Authenticate. */
    interface IAuthenticate {

        /** Authenticate jwt */
        jwt?: (string|null);
    }

    /** Represents an Authenticate. */
    class Authenticate implements IAuthenticate {

        /**
         * Constructs a new Authenticate.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IAuthenticate);

        /** Authenticate jwt. */
        public jwt: string;

        /**
         * Creates a new Authenticate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Authenticate instance
         */
        public static create(properties?: websocket_api.IAuthenticate): websocket_api.Authenticate;

        /**
         * Encodes the specified Authenticate message. Does not implicitly {@link websocket_api.Authenticate.verify|verify} messages.
         * @param message Authenticate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IAuthenticate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Authenticate message, length delimited. Does not implicitly {@link websocket_api.Authenticate.verify|verify} messages.
         * @param message Authenticate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IAuthenticate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Authenticate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Authenticate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Authenticate;

        /**
         * Decodes an Authenticate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Authenticate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Authenticate;

        /**
         * Verifies an Authenticate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Authenticate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Authenticate
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Authenticate;

        /**
         * Creates a plain object from an Authenticate message. Also converts values to other types if specified.
         * @param message Authenticate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Authenticate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Authenticate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Authenticate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MakePayment. */
    interface IMakePayment {

        /** MakePayment recipientId */
        recipientId?: (string|null);

        /** MakePayment amount */
        amount?: (string|null);

        /** MakePayment note */
        note?: (string|null);
    }

    /** Represents a MakePayment. */
    class MakePayment implements IMakePayment {

        /**
         * Constructs a new MakePayment.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IMakePayment);

        /** MakePayment recipientId. */
        public recipientId: string;

        /** MakePayment amount. */
        public amount: string;

        /** MakePayment note. */
        public note: string;

        /**
         * Creates a new MakePayment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MakePayment instance
         */
        public static create(properties?: websocket_api.IMakePayment): websocket_api.MakePayment;

        /**
         * Encodes the specified MakePayment message. Does not implicitly {@link websocket_api.MakePayment.verify|verify} messages.
         * @param message MakePayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IMakePayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MakePayment message, length delimited. Does not implicitly {@link websocket_api.MakePayment.verify|verify} messages.
         * @param message MakePayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IMakePayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MakePayment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MakePayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.MakePayment;

        /**
         * Decodes a MakePayment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MakePayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.MakePayment;

        /**
         * Verifies a MakePayment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MakePayment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MakePayment
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.MakePayment;

        /**
         * Creates a plain object from a MakePayment message. Also converts values to other types if specified.
         * @param message MakePayment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.MakePayment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MakePayment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MakePayment
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateMarket. */
    interface ICreateMarket {

        /** CreateMarket name */
        name?: (string|null);

        /** CreateMarket description */
        description?: (string|null);

        /** CreateMarket minSettlement */
        minSettlement?: (string|null);

        /** CreateMarket maxSettlement */
        maxSettlement?: (string|null);
    }

    /** Represents a CreateMarket. */
    class CreateMarket implements ICreateMarket {

        /**
         * Constructs a new CreateMarket.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ICreateMarket);

        /** CreateMarket name. */
        public name: string;

        /** CreateMarket description. */
        public description: string;

        /** CreateMarket minSettlement. */
        public minSettlement: string;

        /** CreateMarket maxSettlement. */
        public maxSettlement: string;

        /**
         * Creates a new CreateMarket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateMarket instance
         */
        public static create(properties?: websocket_api.ICreateMarket): websocket_api.CreateMarket;

        /**
         * Encodes the specified CreateMarket message. Does not implicitly {@link websocket_api.CreateMarket.verify|verify} messages.
         * @param message CreateMarket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ICreateMarket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateMarket message, length delimited. Does not implicitly {@link websocket_api.CreateMarket.verify|verify} messages.
         * @param message CreateMarket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ICreateMarket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateMarket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateMarket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.CreateMarket;

        /**
         * Decodes a CreateMarket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateMarket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.CreateMarket;

        /**
         * Verifies a CreateMarket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateMarket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateMarket
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.CreateMarket;

        /**
         * Creates a plain object from a CreateMarket message. Also converts values to other types if specified.
         * @param message CreateMarket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.CreateMarket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateMarket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateMarket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SettleMarket. */
    interface ISettleMarket {

        /** SettleMarket id */
        id?: (number|Long|null);

        /** SettleMarket settlePrice */
        settlePrice?: (string|null);
    }

    /** Represents a SettleMarket. */
    class SettleMarket implements ISettleMarket {

        /**
         * Constructs a new SettleMarket.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ISettleMarket);

        /** SettleMarket id. */
        public id: (number|Long);

        /** SettleMarket settlePrice. */
        public settlePrice: string;

        /**
         * Creates a new SettleMarket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettleMarket instance
         */
        public static create(properties?: websocket_api.ISettleMarket): websocket_api.SettleMarket;

        /**
         * Encodes the specified SettleMarket message. Does not implicitly {@link websocket_api.SettleMarket.verify|verify} messages.
         * @param message SettleMarket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ISettleMarket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettleMarket message, length delimited. Does not implicitly {@link websocket_api.SettleMarket.verify|verify} messages.
         * @param message SettleMarket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ISettleMarket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettleMarket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettleMarket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.SettleMarket;

        /**
         * Decodes a SettleMarket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettleMarket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.SettleMarket;

        /**
         * Verifies a SettleMarket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettleMarket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettleMarket
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.SettleMarket;

        /**
         * Creates a plain object from a SettleMarket message. Also converts values to other types if specified.
         * @param message SettleMarket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.SettleMarket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettleMarket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SettleMarket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateOrder. */
    interface ICreateOrder {

        /** CreateOrder marketId */
        marketId?: (number|Long|null);

        /** CreateOrder price */
        price?: (string|null);

        /** CreateOrder size */
        size?: (string|null);

        /** CreateOrder side */
        side?: (websocket_api.Side|null);
    }

    /** Represents a CreateOrder. */
    class CreateOrder implements ICreateOrder {

        /**
         * Constructs a new CreateOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ICreateOrder);

        /** CreateOrder marketId. */
        public marketId: (number|Long);

        /** CreateOrder price. */
        public price: string;

        /** CreateOrder size. */
        public size: string;

        /** CreateOrder side. */
        public side: websocket_api.Side;

        /**
         * Creates a new CreateOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateOrder instance
         */
        public static create(properties?: websocket_api.ICreateOrder): websocket_api.CreateOrder;

        /**
         * Encodes the specified CreateOrder message. Does not implicitly {@link websocket_api.CreateOrder.verify|verify} messages.
         * @param message CreateOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ICreateOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateOrder message, length delimited. Does not implicitly {@link websocket_api.CreateOrder.verify|verify} messages.
         * @param message CreateOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ICreateOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.CreateOrder;

        /**
         * Decodes a CreateOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.CreateOrder;

        /**
         * Verifies a CreateOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateOrder
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.CreateOrder;

        /**
         * Creates a plain object from a CreateOrder message. Also converts values to other types if specified.
         * @param message CreateOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.CreateOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateOrder
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
