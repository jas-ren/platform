import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace websocket_api. */
export namespace websocket_api {

    /** Properties of a ServerMessage. */
    interface IServerMessage {

        /** ServerMessage requestId */
        requestId?: (string|null);

        /** ServerMessage portfolio */
        portfolio?: (websocket_api.IPortfolio|null);

        /** ServerMessage market */
        market?: (websocket_api.IMarket|null);

        /** ServerMessage marketSettled */
        marketSettled?: (websocket_api.IMarketSettled|null);

        /** ServerMessage orderCreated */
        orderCreated?: (websocket_api.IOrderCreated|null);

        /** ServerMessage ordersCancelled */
        ordersCancelled?: (websocket_api.IOrdersCancelled|null);

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

        /** ServerMessage userCreated */
        userCreated?: (websocket_api.IUser|null);

        /** ServerMessage users */
        users?: (websocket_api.IUsers|null);

        /** ServerMessage actingAs */
        actingAs?: (websocket_api.IActingAs|null);

        /** ServerMessage ownershipReceived */
        ownershipReceived?: (websocket_api.IOwnership|null);

        /** ServerMessage ownerships */
        ownerships?: (websocket_api.IOwnerships|null);

        /** ServerMessage ownershipGiven */
        ownershipGiven?: (websocket_api.IOwnershipGiven|null);

        /** ServerMessage redeemed */
        redeemed?: (websocket_api.IRedeemed|null);

        /** ServerMessage orders */
        orders?: (websocket_api.IOrders|null);

        /** ServerMessage trades */
        trades?: (websocket_api.ITrades|null);

        /** ServerMessage transactions */
        transactions?: (websocket_api.ITransactions|null);
    }

    /** Represents a ServerMessage. */
    class ServerMessage implements IServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IServerMessage);

        /** ServerMessage requestId. */
        public requestId: string;

        /** ServerMessage portfolio. */
        public portfolio?: (websocket_api.IPortfolio|null);

        /** ServerMessage market. */
        public market?: (websocket_api.IMarket|null);

        /** ServerMessage marketSettled. */
        public marketSettled?: (websocket_api.IMarketSettled|null);

        /** ServerMessage orderCreated. */
        public orderCreated?: (websocket_api.IOrderCreated|null);

        /** ServerMessage ordersCancelled. */
        public ordersCancelled?: (websocket_api.IOrdersCancelled|null);

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

        /** ServerMessage userCreated. */
        public userCreated?: (websocket_api.IUser|null);

        /** ServerMessage users. */
        public users?: (websocket_api.IUsers|null);

        /** ServerMessage actingAs. */
        public actingAs?: (websocket_api.IActingAs|null);

        /** ServerMessage ownershipReceived. */
        public ownershipReceived?: (websocket_api.IOwnership|null);

        /** ServerMessage ownerships. */
        public ownerships?: (websocket_api.IOwnerships|null);

        /** ServerMessage ownershipGiven. */
        public ownershipGiven?: (websocket_api.IOwnershipGiven|null);

        /** ServerMessage redeemed. */
        public redeemed?: (websocket_api.IRedeemed|null);

        /** ServerMessage orders. */
        public orders?: (websocket_api.IOrders|null);

        /** ServerMessage trades. */
        public trades?: (websocket_api.ITrades|null);

        /** ServerMessage transactions. */
        public transactions?: (websocket_api.ITransactions|null);

        /** ServerMessage message. */
        public message?: ("portfolio"|"market"|"marketSettled"|"orderCreated"|"ordersCancelled"|"payments"|"paymentCreated"|"out"|"authenticated"|"requestFailed"|"userCreated"|"users"|"actingAs"|"ownershipReceived"|"ownerships"|"ownershipGiven"|"redeemed"|"orders"|"trades"|"transactions");

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

        /** Authenticated userId */
        userId?: (number|Long|null);
    }

    /** Represents an Authenticated. */
    class Authenticated implements IAuthenticated {

        /**
         * Constructs a new Authenticated.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IAuthenticated);

        /** Authenticated userId. */
        public userId: (number|Long);

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

    /** Properties of an ActingAs. */
    interface IActingAs {

        /** ActingAs userId */
        userId?: (number|Long|null);
    }

    /** Represents an ActingAs. */
    class ActingAs implements IActingAs {

        /**
         * Constructs a new ActingAs.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IActingAs);

        /** ActingAs userId. */
        public userId: (number|Long);

        /**
         * Creates a new ActingAs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActingAs instance
         */
        public static create(properties?: websocket_api.IActingAs): websocket_api.ActingAs;

        /**
         * Encodes the specified ActingAs message. Does not implicitly {@link websocket_api.ActingAs.verify|verify} messages.
         * @param message ActingAs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IActingAs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActingAs message, length delimited. Does not implicitly {@link websocket_api.ActingAs.verify|verify} messages.
         * @param message ActingAs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IActingAs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActingAs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActingAs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.ActingAs;

        /**
         * Decodes an ActingAs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActingAs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.ActingAs;

        /**
         * Verifies an ActingAs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActingAs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActingAs
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.ActingAs;

        /**
         * Creates a plain object from an ActingAs message. Also converts values to other types if specified.
         * @param message ActingAs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.ActingAs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActingAs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ActingAs
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Ownership. */
    interface IOwnership {

        /** Ownership ofBotId */
        ofBotId?: (number|Long|null);
    }

    /** Represents an Ownership. */
    class Ownership implements IOwnership {

        /**
         * Constructs a new Ownership.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOwnership);

        /** Ownership ofBotId. */
        public ofBotId: (number|Long);

        /**
         * Creates a new Ownership instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ownership instance
         */
        public static create(properties?: websocket_api.IOwnership): websocket_api.Ownership;

        /**
         * Encodes the specified Ownership message. Does not implicitly {@link websocket_api.Ownership.verify|verify} messages.
         * @param message Ownership message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOwnership, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ownership message, length delimited. Does not implicitly {@link websocket_api.Ownership.verify|verify} messages.
         * @param message Ownership message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOwnership, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ownership message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ownership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Ownership;

        /**
         * Decodes an Ownership message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ownership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Ownership;

        /**
         * Verifies an Ownership message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ownership message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ownership
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Ownership;

        /**
         * Creates a plain object from an Ownership message. Also converts values to other types if specified.
         * @param message Ownership
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Ownership, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ownership to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ownership
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Ownerships. */
    interface IOwnerships {

        /** Ownerships ownerships */
        ownerships?: (websocket_api.IOwnership[]|null);
    }

    /** Represents an Ownerships. */
    class Ownerships implements IOwnerships {

        /**
         * Constructs a new Ownerships.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOwnerships);

        /** Ownerships ownerships. */
        public ownerships: websocket_api.IOwnership[];

        /**
         * Creates a new Ownerships instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ownerships instance
         */
        public static create(properties?: websocket_api.IOwnerships): websocket_api.Ownerships;

        /**
         * Encodes the specified Ownerships message. Does not implicitly {@link websocket_api.Ownerships.verify|verify} messages.
         * @param message Ownerships message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOwnerships, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ownerships message, length delimited. Does not implicitly {@link websocket_api.Ownerships.verify|verify} messages.
         * @param message Ownerships message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOwnerships, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ownerships message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ownerships
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Ownerships;

        /**
         * Decodes an Ownerships message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ownerships
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Ownerships;

        /**
         * Verifies an Ownerships message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ownerships message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ownerships
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Ownerships;

        /**
         * Creates a plain object from an Ownerships message. Also converts values to other types if specified.
         * @param message Ownerships
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Ownerships, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ownerships to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ownerships
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OwnershipGiven. */
    interface IOwnershipGiven {
    }

    /** Represents an OwnershipGiven. */
    class OwnershipGiven implements IOwnershipGiven {

        /**
         * Constructs a new OwnershipGiven.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOwnershipGiven);

        /**
         * Creates a new OwnershipGiven instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OwnershipGiven instance
         */
        public static create(properties?: websocket_api.IOwnershipGiven): websocket_api.OwnershipGiven;

        /**
         * Encodes the specified OwnershipGiven message. Does not implicitly {@link websocket_api.OwnershipGiven.verify|verify} messages.
         * @param message OwnershipGiven message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOwnershipGiven, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OwnershipGiven message, length delimited. Does not implicitly {@link websocket_api.OwnershipGiven.verify|verify} messages.
         * @param message OwnershipGiven message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOwnershipGiven, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OwnershipGiven message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OwnershipGiven
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.OwnershipGiven;

        /**
         * Decodes an OwnershipGiven message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OwnershipGiven
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.OwnershipGiven;

        /**
         * Verifies an OwnershipGiven message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OwnershipGiven message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OwnershipGiven
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.OwnershipGiven;

        /**
         * Creates a plain object from an OwnershipGiven message. Also converts values to other types if specified.
         * @param message OwnershipGiven
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.OwnershipGiven, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OwnershipGiven to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OwnershipGiven
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Portfolio. */
    interface IPortfolio {

        /** Portfolio totalBalance */
        totalBalance?: (number|null);

        /** Portfolio availableBalance */
        availableBalance?: (number|null);

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
        public totalBalance: number;

        /** Portfolio availableBalance. */
        public availableBalance: number;

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
            position?: (number|null);

            /** MarketExposure totalBidSize */
            totalBidSize?: (number|null);

            /** MarketExposure totalOfferSize */
            totalOfferSize?: (number|null);

            /** MarketExposure totalBidValue */
            totalBidValue?: (number|null);

            /** MarketExposure totalOfferValue */
            totalOfferValue?: (number|null);
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
            public position: number;

            /** MarketExposure totalBidSize. */
            public totalBidSize: number;

            /** MarketExposure totalOfferSize. */
            public totalOfferSize: number;

            /** MarketExposure totalBidValue. */
            public totalBidValue: number;

            /** MarketExposure totalOfferValue. */
            public totalOfferValue: number;

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
        ownerId?: (number|Long|null);

        /** Market transaction */
        transaction?: (websocket_api.ITransaction|null);

        /** Market minSettlement */
        minSettlement?: (number|null);

        /** Market maxSettlement */
        maxSettlement?: (number|null);

        /** Market redeemableFor */
        redeemableFor?: ((number|Long)[]|null);

        /** Market open */
        open?: (websocket_api.Market.IOpen|null);

        /** Market closed */
        closed?: (websocket_api.Market.IClosed|null);
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
        public ownerId: (number|Long);

        /** Market transaction. */
        public transaction?: (websocket_api.ITransaction|null);

        /** Market minSettlement. */
        public minSettlement: number;

        /** Market maxSettlement. */
        public maxSettlement: number;

        /** Market redeemableFor. */
        public redeemableFor: (number|Long)[];

        /** Market open. */
        public open?: (websocket_api.Market.IOpen|null);

        /** Market closed. */
        public closed?: (websocket_api.Market.IClosed|null);

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
            settlePrice?: (number|null);

            /** Closed transactionId */
            transactionId?: (number|Long|null);
        }

        /** Represents a Closed. */
        class Closed implements IClosed {

            /**
             * Constructs a new Closed.
             * @param [properties] Properties to set
             */
            constructor(properties?: websocket_api.Market.IClosed);

            /** Closed settlePrice. */
            public settlePrice: number;

            /** Closed transactionId. */
            public transactionId: (number|Long);

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

    /** Properties of a Transaction. */
    interface ITransaction {

        /** Transaction id */
        id?: (number|Long|null);

        /** Transaction timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ITransaction);

        /** Transaction id. */
        public id: (number|Long);

        /** Transaction timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Transaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transaction instance
         */
        public static create(properties?: websocket_api.ITransaction): websocket_api.Transaction;

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link websocket_api.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link websocket_api.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Transaction;

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Transaction;

        /**
         * Verifies a Transaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transaction
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Transaction;

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @param message Transaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transaction
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
        settlePrice?: (number|null);

        /** MarketSettled transaction */
        transaction?: (websocket_api.ITransaction|null);
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
        public settlePrice: number;

        /** MarketSettled transaction. */
        public transaction?: (websocket_api.ITransaction|null);

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

    /** Properties of an OrdersCancelled. */
    interface IOrdersCancelled {

        /** OrdersCancelled orderIds */
        orderIds?: ((number|Long)[]|null);

        /** OrdersCancelled marketId */
        marketId?: (number|Long|null);

        /** OrdersCancelled transaction */
        transaction?: (websocket_api.ITransaction|null);
    }

    /** Represents an OrdersCancelled. */
    class OrdersCancelled implements IOrdersCancelled {

        /**
         * Constructs a new OrdersCancelled.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOrdersCancelled);

        /** OrdersCancelled orderIds. */
        public orderIds: (number|Long)[];

        /** OrdersCancelled marketId. */
        public marketId: (number|Long);

        /** OrdersCancelled transaction. */
        public transaction?: (websocket_api.ITransaction|null);

        /**
         * Creates a new OrdersCancelled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrdersCancelled instance
         */
        public static create(properties?: websocket_api.IOrdersCancelled): websocket_api.OrdersCancelled;

        /**
         * Encodes the specified OrdersCancelled message. Does not implicitly {@link websocket_api.OrdersCancelled.verify|verify} messages.
         * @param message OrdersCancelled message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOrdersCancelled, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrdersCancelled message, length delimited. Does not implicitly {@link websocket_api.OrdersCancelled.verify|verify} messages.
         * @param message OrdersCancelled message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOrdersCancelled, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrdersCancelled message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrdersCancelled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.OrdersCancelled;

        /**
         * Decodes an OrdersCancelled message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrdersCancelled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.OrdersCancelled;

        /**
         * Verifies an OrdersCancelled message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrdersCancelled message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrdersCancelled
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.OrdersCancelled;

        /**
         * Creates a plain object from an OrdersCancelled message. Also converts values to other types if specified.
         * @param message OrdersCancelled
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.OrdersCancelled, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrdersCancelled to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrdersCancelled
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
        userId?: (number|Long|null);

        /** OrderCreated order */
        order?: (websocket_api.IOrder|null);

        /** OrderCreated fills */
        fills?: (websocket_api.OrderCreated.IOrderFill[]|null);

        /** OrderCreated trades */
        trades?: (websocket_api.ITrade[]|null);

        /** OrderCreated transaction */
        transaction?: (websocket_api.ITransaction|null);
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
        public userId: (number|Long);

        /** OrderCreated order. */
        public order?: (websocket_api.IOrder|null);

        /** OrderCreated fills. */
        public fills: websocket_api.OrderCreated.IOrderFill[];

        /** OrderCreated trades. */
        public trades: websocket_api.ITrade[];

        /** OrderCreated transaction. */
        public transaction?: (websocket_api.ITransaction|null);

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
            ownerId?: (number|Long|null);

            /** OrderFill sizeFilled */
            sizeFilled?: (number|null);

            /** OrderFill sizeRemaining */
            sizeRemaining?: (number|null);

            /** OrderFill price */
            price?: (number|null);

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
            public ownerId: (number|Long);

            /** OrderFill sizeFilled. */
            public sizeFilled: number;

            /** OrderFill sizeRemaining. */
            public sizeRemaining: number;

            /** OrderFill price. */
            public price: number;

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

    /** Properties of an Order. */
    interface IOrder {

        /** Order id */
        id?: (number|Long|null);

        /** Order marketId */
        marketId?: (number|Long|null);

        /** Order ownerId */
        ownerId?: (number|Long|null);

        /** Order transactionId */
        transactionId?: (number|Long|null);

        /** Order price */
        price?: (number|null);

        /** Order size */
        size?: (number|null);

        /** Order side */
        side?: (websocket_api.Side|null);

        /** Order sizes */
        sizes?: (websocket_api.ISize[]|null);
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
        public ownerId: (number|Long);

        /** Order transactionId. */
        public transactionId: (number|Long);

        /** Order price. */
        public price: number;

        /** Order size. */
        public size: number;

        /** Order side. */
        public side: websocket_api.Side;

        /** Order sizes. */
        public sizes: websocket_api.ISize[];

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

    /** Properties of a Size. */
    interface ISize {

        /** Size transactionId */
        transactionId?: (number|Long|null);

        /** Size size */
        size?: (number|null);
    }

    /** Represents a Size. */
    class Size implements ISize {

        /**
         * Constructs a new Size.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ISize);

        /** Size transactionId. */
        public transactionId: (number|Long);

        /** Size size. */
        public size: number;

        /**
         * Creates a new Size instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Size instance
         */
        public static create(properties?: websocket_api.ISize): websocket_api.Size;

        /**
         * Encodes the specified Size message. Does not implicitly {@link websocket_api.Size.verify|verify} messages.
         * @param message Size message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Size message, length delimited. Does not implicitly {@link websocket_api.Size.verify|verify} messages.
         * @param message Size message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Size message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Size
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Size;

        /**
         * Decodes a Size message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Size
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Size;

        /**
         * Verifies a Size message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Size message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Size
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Size;

        /**
         * Creates a plain object from a Size message. Also converts values to other types if specified.
         * @param message Size
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Size to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Size
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

        /** Trade transactionId */
        transactionId?: (number|Long|null);

        /** Trade price */
        price?: (number|null);

        /** Trade size */
        size?: (number|null);

        /** Trade buyerId */
        buyerId?: (number|Long|null);

        /** Trade sellerId */
        sellerId?: (number|Long|null);
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

        /** Trade transactionId. */
        public transactionId: (number|Long);

        /** Trade price. */
        public price: number;

        /** Trade size. */
        public size: number;

        /** Trade buyerId. */
        public buyerId: (number|Long);

        /** Trade sellerId. */
        public sellerId: (number|Long);

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

    /** Properties of a Payment. */
    interface IPayment {

        /** Payment id */
        id?: (number|Long|null);

        /** Payment payerId */
        payerId?: (number|Long|null);

        /** Payment recipientId */
        recipientId?: (number|Long|null);

        /** Payment transaction */
        transaction?: (websocket_api.ITransaction|null);

        /** Payment amount */
        amount?: (number|null);

        /** Payment note */
        note?: (string|null);
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
        public payerId: (number|Long);

        /** Payment recipientId. */
        public recipientId: (number|Long);

        /** Payment transaction. */
        public transaction?: (websocket_api.ITransaction|null);

        /** Payment amount. */
        public amount: number;

        /** Payment note. */
        public note: string;

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

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|Long|null);

        /** User name */
        name?: (string|null);

        /** User isBot */
        isBot?: (boolean|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IUser);

        /** User id. */
        public id: (number|Long);

        /** User name. */
        public name: string;

        /** User isBot. */
        public isBot: boolean;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: websocket_api.IUser): websocket_api.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link websocket_api.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link websocket_api.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Users. */
    interface IUsers {

        /** Users users */
        users?: (websocket_api.IUser[]|null);
    }

    /** Represents a Users. */
    class Users implements IUsers {

        /**
         * Constructs a new Users.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IUsers);

        /** Users users. */
        public users: websocket_api.IUser[];

        /**
         * Creates a new Users instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Users instance
         */
        public static create(properties?: websocket_api.IUsers): websocket_api.Users;

        /**
         * Encodes the specified Users message. Does not implicitly {@link websocket_api.Users.verify|verify} messages.
         * @param message Users message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IUsers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Users message, length delimited. Does not implicitly {@link websocket_api.Users.verify|verify} messages.
         * @param message Users message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IUsers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Users message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Users
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Users;

        /**
         * Decodes a Users message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Users
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Users;

        /**
         * Verifies a Users message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Users message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Users
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Users;

        /**
         * Creates a plain object from a Users message. Also converts values to other types if specified.
         * @param message Users
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Users, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Users to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Users
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Redeem. */
    interface IRedeem {

        /** Redeem fundId */
        fundId?: (number|Long|null);

        /** Redeem amount */
        amount?: (number|null);
    }

    /** Represents a Redeem. */
    class Redeem implements IRedeem {

        /**
         * Constructs a new Redeem.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IRedeem);

        /** Redeem fundId. */
        public fundId: (number|Long);

        /** Redeem amount. */
        public amount: number;

        /**
         * Creates a new Redeem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Redeem instance
         */
        public static create(properties?: websocket_api.IRedeem): websocket_api.Redeem;

        /**
         * Encodes the specified Redeem message. Does not implicitly {@link websocket_api.Redeem.verify|verify} messages.
         * @param message Redeem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IRedeem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Redeem message, length delimited. Does not implicitly {@link websocket_api.Redeem.verify|verify} messages.
         * @param message Redeem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IRedeem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Redeem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Redeem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Redeem;

        /**
         * Decodes a Redeem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Redeem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Redeem;

        /**
         * Verifies a Redeem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Redeem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Redeem
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Redeem;

        /**
         * Creates a plain object from a Redeem message. Also converts values to other types if specified.
         * @param message Redeem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Redeem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Redeem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Redeem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Redeemed. */
    interface IRedeemed {

        /** Redeemed transaction */
        transaction?: (websocket_api.ITransaction|null);

        /** Redeemed userId */
        userId?: (number|Long|null);

        /** Redeemed fundId */
        fundId?: (number|Long|null);

        /** Redeemed amount */
        amount?: (number|null);
    }

    /** Represents a Redeemed. */
    class Redeemed implements IRedeemed {

        /**
         * Constructs a new Redeemed.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IRedeemed);

        /** Redeemed transaction. */
        public transaction?: (websocket_api.ITransaction|null);

        /** Redeemed userId. */
        public userId: (number|Long);

        /** Redeemed fundId. */
        public fundId: (number|Long);

        /** Redeemed amount. */
        public amount: number;

        /**
         * Creates a new Redeemed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Redeemed instance
         */
        public static create(properties?: websocket_api.IRedeemed): websocket_api.Redeemed;

        /**
         * Encodes the specified Redeemed message. Does not implicitly {@link websocket_api.Redeemed.verify|verify} messages.
         * @param message Redeemed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IRedeemed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Redeemed message, length delimited. Does not implicitly {@link websocket_api.Redeemed.verify|verify} messages.
         * @param message Redeemed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IRedeemed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Redeemed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Redeemed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Redeemed;

        /**
         * Decodes a Redeemed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Redeemed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Redeemed;

        /**
         * Verifies a Redeemed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Redeemed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Redeemed
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Redeemed;

        /**
         * Creates a plain object from a Redeemed message. Also converts values to other types if specified.
         * @param message Redeemed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Redeemed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Redeemed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Redeemed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Orders. */
    interface IOrders {

        /** Orders marketId */
        marketId?: (number|Long|null);

        /** Orders orders */
        orders?: (websocket_api.IOrder[]|null);

        /** Orders hasFullHistory */
        hasFullHistory?: (boolean|null);
    }

    /** Represents an Orders. */
    class Orders implements IOrders {

        /**
         * Constructs a new Orders.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IOrders);

        /** Orders marketId. */
        public marketId: (number|Long);

        /** Orders orders. */
        public orders: websocket_api.IOrder[];

        /** Orders hasFullHistory. */
        public hasFullHistory: boolean;

        /**
         * Creates a new Orders instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Orders instance
         */
        public static create(properties?: websocket_api.IOrders): websocket_api.Orders;

        /**
         * Encodes the specified Orders message. Does not implicitly {@link websocket_api.Orders.verify|verify} messages.
         * @param message Orders message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IOrders, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Orders message, length delimited. Does not implicitly {@link websocket_api.Orders.verify|verify} messages.
         * @param message Orders message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IOrders, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Orders message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Orders
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Orders;

        /**
         * Decodes an Orders message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Orders
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Orders;

        /**
         * Verifies an Orders message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Orders message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Orders
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Orders;

        /**
         * Creates a plain object from an Orders message. Also converts values to other types if specified.
         * @param message Orders
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Orders, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Orders to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Orders
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Trades. */
    interface ITrades {

        /** Trades marketId */
        marketId?: (number|Long|null);

        /** Trades trades */
        trades?: (websocket_api.ITrade[]|null);

        /** Trades hasFullHistory */
        hasFullHistory?: (boolean|null);
    }

    /** Represents a Trades. */
    class Trades implements ITrades {

        /**
         * Constructs a new Trades.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ITrades);

        /** Trades marketId. */
        public marketId: (number|Long);

        /** Trades trades. */
        public trades: websocket_api.ITrade[];

        /** Trades hasFullHistory. */
        public hasFullHistory: boolean;

        /**
         * Creates a new Trades instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Trades instance
         */
        public static create(properties?: websocket_api.ITrades): websocket_api.Trades;

        /**
         * Encodes the specified Trades message. Does not implicitly {@link websocket_api.Trades.verify|verify} messages.
         * @param message Trades message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ITrades, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Trades message, length delimited. Does not implicitly {@link websocket_api.Trades.verify|verify} messages.
         * @param message Trades message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ITrades, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Trades message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trades
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Trades;

        /**
         * Decodes a Trades message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Trades
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Trades;

        /**
         * Verifies a Trades message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Trades message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trades
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Trades;

        /**
         * Creates a plain object from a Trades message. Also converts values to other types if specified.
         * @param message Trades
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Trades, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trades to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Trades
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Transactions. */
    interface ITransactions {

        /** Transactions transactions */
        transactions?: (websocket_api.ITransaction[]|null);
    }

    /** Represents a Transactions. */
    class Transactions implements ITransactions {

        /**
         * Constructs a new Transactions.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ITransactions);

        /** Transactions transactions. */
        public transactions: websocket_api.ITransaction[];

        /**
         * Creates a new Transactions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transactions instance
         */
        public static create(properties?: websocket_api.ITransactions): websocket_api.Transactions;

        /**
         * Encodes the specified Transactions message. Does not implicitly {@link websocket_api.Transactions.verify|verify} messages.
         * @param message Transactions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ITransactions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transactions message, length delimited. Does not implicitly {@link websocket_api.Transactions.verify|verify} messages.
         * @param message Transactions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ITransactions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transactions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transactions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.Transactions;

        /**
         * Decodes a Transactions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transactions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.Transactions;

        /**
         * Verifies a Transactions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transactions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transactions
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.Transactions;

        /**
         * Creates a plain object from a Transactions message. Also converts values to other types if specified.
         * @param message Transactions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.Transactions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transactions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transactions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage requestId */
        requestId?: (string|null);

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

        /** ClientMessage actAs */
        actAs?: (websocket_api.IActAs|null);

        /** ClientMessage createBot */
        createBot?: (websocket_api.ICreateBot|null);

        /** ClientMessage giveOwnership */
        giveOwnership?: (websocket_api.IGiveOwnership|null);

        /** ClientMessage getFullOrderHistory */
        getFullOrderHistory?: (websocket_api.IGetFullOrderHistory|null);

        /** ClientMessage getFullTradeHistory */
        getFullTradeHistory?: (websocket_api.IGetFullTradeHistory|null);

        /** ClientMessage redeem */
        redeem?: (websocket_api.IRedeem|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IClientMessage);

        /** ClientMessage requestId. */
        public requestId: string;

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

        /** ClientMessage actAs. */
        public actAs?: (websocket_api.IActAs|null);

        /** ClientMessage createBot. */
        public createBot?: (websocket_api.ICreateBot|null);

        /** ClientMessage giveOwnership. */
        public giveOwnership?: (websocket_api.IGiveOwnership|null);

        /** ClientMessage getFullOrderHistory. */
        public getFullOrderHistory?: (websocket_api.IGetFullOrderHistory|null);

        /** ClientMessage getFullTradeHistory. */
        public getFullTradeHistory?: (websocket_api.IGetFullTradeHistory|null);

        /** ClientMessage redeem. */
        public redeem?: (websocket_api.IRedeem|null);

        /** ClientMessage message. */
        public message?: ("createMarket"|"settleMarket"|"createOrder"|"cancelOrder"|"out"|"makePayment"|"authenticate"|"actAs"|"createBot"|"giveOwnership"|"getFullOrderHistory"|"getFullTradeHistory"|"redeem");

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

    /** Properties of a GetFullOrderHistory. */
    interface IGetFullOrderHistory {

        /** GetFullOrderHistory marketId */
        marketId?: (number|Long|null);
    }

    /** Represents a GetFullOrderHistory. */
    class GetFullOrderHistory implements IGetFullOrderHistory {

        /**
         * Constructs a new GetFullOrderHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IGetFullOrderHistory);

        /** GetFullOrderHistory marketId. */
        public marketId: (number|Long);

        /**
         * Creates a new GetFullOrderHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFullOrderHistory instance
         */
        public static create(properties?: websocket_api.IGetFullOrderHistory): websocket_api.GetFullOrderHistory;

        /**
         * Encodes the specified GetFullOrderHistory message. Does not implicitly {@link websocket_api.GetFullOrderHistory.verify|verify} messages.
         * @param message GetFullOrderHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IGetFullOrderHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFullOrderHistory message, length delimited. Does not implicitly {@link websocket_api.GetFullOrderHistory.verify|verify} messages.
         * @param message GetFullOrderHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IGetFullOrderHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFullOrderHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFullOrderHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.GetFullOrderHistory;

        /**
         * Decodes a GetFullOrderHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFullOrderHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.GetFullOrderHistory;

        /**
         * Verifies a GetFullOrderHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFullOrderHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFullOrderHistory
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.GetFullOrderHistory;

        /**
         * Creates a plain object from a GetFullOrderHistory message. Also converts values to other types if specified.
         * @param message GetFullOrderHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.GetFullOrderHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFullOrderHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetFullOrderHistory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetFullTradeHistory. */
    interface IGetFullTradeHistory {

        /** GetFullTradeHistory marketId */
        marketId?: (number|Long|null);
    }

    /** Represents a GetFullTradeHistory. */
    class GetFullTradeHistory implements IGetFullTradeHistory {

        /**
         * Constructs a new GetFullTradeHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IGetFullTradeHistory);

        /** GetFullTradeHistory marketId. */
        public marketId: (number|Long);

        /**
         * Creates a new GetFullTradeHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFullTradeHistory instance
         */
        public static create(properties?: websocket_api.IGetFullTradeHistory): websocket_api.GetFullTradeHistory;

        /**
         * Encodes the specified GetFullTradeHistory message. Does not implicitly {@link websocket_api.GetFullTradeHistory.verify|verify} messages.
         * @param message GetFullTradeHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IGetFullTradeHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFullTradeHistory message, length delimited. Does not implicitly {@link websocket_api.GetFullTradeHistory.verify|verify} messages.
         * @param message GetFullTradeHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IGetFullTradeHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFullTradeHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFullTradeHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.GetFullTradeHistory;

        /**
         * Decodes a GetFullTradeHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFullTradeHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.GetFullTradeHistory;

        /**
         * Verifies a GetFullTradeHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFullTradeHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFullTradeHistory
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.GetFullTradeHistory;

        /**
         * Creates a plain object from a GetFullTradeHistory message. Also converts values to other types if specified.
         * @param message GetFullTradeHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.GetFullTradeHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFullTradeHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetFullTradeHistory
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

        /** Authenticate idJwt */
        idJwt?: (string|null);

        /** Authenticate actAs */
        actAs?: (number|Long|null);
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

        /** Authenticate idJwt. */
        public idJwt: string;

        /** Authenticate actAs. */
        public actAs: (number|Long);

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

    /** Properties of an ActAs. */
    interface IActAs {

        /** ActAs userId */
        userId?: (number|Long|null);
    }

    /** Represents an ActAs. */
    class ActAs implements IActAs {

        /**
         * Constructs a new ActAs.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IActAs);

        /** ActAs userId. */
        public userId: (number|Long);

        /**
         * Creates a new ActAs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActAs instance
         */
        public static create(properties?: websocket_api.IActAs): websocket_api.ActAs;

        /**
         * Encodes the specified ActAs message. Does not implicitly {@link websocket_api.ActAs.verify|verify} messages.
         * @param message ActAs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IActAs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActAs message, length delimited. Does not implicitly {@link websocket_api.ActAs.verify|verify} messages.
         * @param message ActAs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IActAs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActAs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActAs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.ActAs;

        /**
         * Decodes an ActAs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActAs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.ActAs;

        /**
         * Verifies an ActAs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActAs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActAs
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.ActAs;

        /**
         * Creates a plain object from an ActAs message. Also converts values to other types if specified.
         * @param message ActAs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.ActAs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActAs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ActAs
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateBot. */
    interface ICreateBot {

        /** CreateBot name */
        name?: (string|null);
    }

    /** Represents a CreateBot. */
    class CreateBot implements ICreateBot {

        /**
         * Constructs a new CreateBot.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ICreateBot);

        /** CreateBot name. */
        public name: string;

        /**
         * Creates a new CreateBot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBot instance
         */
        public static create(properties?: websocket_api.ICreateBot): websocket_api.CreateBot;

        /**
         * Encodes the specified CreateBot message. Does not implicitly {@link websocket_api.CreateBot.verify|verify} messages.
         * @param message CreateBot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.ICreateBot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateBot message, length delimited. Does not implicitly {@link websocket_api.CreateBot.verify|verify} messages.
         * @param message CreateBot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.ICreateBot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateBot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.CreateBot;

        /**
         * Decodes a CreateBot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateBot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.CreateBot;

        /**
         * Verifies a CreateBot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateBot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateBot
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.CreateBot;

        /**
         * Creates a plain object from a CreateBot message. Also converts values to other types if specified.
         * @param message CreateBot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.CreateBot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateBot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateBot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GiveOwnership. */
    interface IGiveOwnership {

        /** GiveOwnership ofBotId */
        ofBotId?: (number|Long|null);

        /** GiveOwnership toUserId */
        toUserId?: (number|Long|null);
    }

    /** Represents a GiveOwnership. */
    class GiveOwnership implements IGiveOwnership {

        /**
         * Constructs a new GiveOwnership.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.IGiveOwnership);

        /** GiveOwnership ofBotId. */
        public ofBotId: (number|Long);

        /** GiveOwnership toUserId. */
        public toUserId: (number|Long);

        /**
         * Creates a new GiveOwnership instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveOwnership instance
         */
        public static create(properties?: websocket_api.IGiveOwnership): websocket_api.GiveOwnership;

        /**
         * Encodes the specified GiveOwnership message. Does not implicitly {@link websocket_api.GiveOwnership.verify|verify} messages.
         * @param message GiveOwnership message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket_api.IGiveOwnership, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GiveOwnership message, length delimited. Does not implicitly {@link websocket_api.GiveOwnership.verify|verify} messages.
         * @param message GiveOwnership message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: websocket_api.IGiveOwnership, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveOwnership message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveOwnership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket_api.GiveOwnership;

        /**
         * Decodes a GiveOwnership message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GiveOwnership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): websocket_api.GiveOwnership;

        /**
         * Verifies a GiveOwnership message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GiveOwnership message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GiveOwnership
         */
        public static fromObject(object: { [k: string]: any }): websocket_api.GiveOwnership;

        /**
         * Creates a plain object from a GiveOwnership message. Also converts values to other types if specified.
         * @param message GiveOwnership
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: websocket_api.GiveOwnership, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GiveOwnership to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GiveOwnership
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MakePayment. */
    interface IMakePayment {

        /** MakePayment recipientId */
        recipientId?: (number|Long|null);

        /** MakePayment amount */
        amount?: (number|null);

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
        public recipientId: (number|Long);

        /** MakePayment amount. */
        public amount: number;

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
        minSettlement?: (number|null);

        /** CreateMarket maxSettlement */
        maxSettlement?: (number|null);

        /** CreateMarket redeemableFor */
        redeemableFor?: ((number|Long)[]|null);
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
        public minSettlement: number;

        /** CreateMarket maxSettlement. */
        public maxSettlement: number;

        /** CreateMarket redeemableFor. */
        public redeemableFor: (number|Long)[];

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

        /** SettleMarket marketId */
        marketId?: (number|Long|null);

        /** SettleMarket settlePrice */
        settlePrice?: (number|null);
    }

    /** Represents a SettleMarket. */
    class SettleMarket implements ISettleMarket {

        /**
         * Constructs a new SettleMarket.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket_api.ISettleMarket);

        /** SettleMarket marketId. */
        public marketId: (number|Long);

        /** SettleMarket settlePrice. */
        public settlePrice: number;

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
        price?: (number|null);

        /** CreateOrder size */
        size?: (number|null);

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
        public price: number;

        /** CreateOrder size. */
        public size: number;

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
