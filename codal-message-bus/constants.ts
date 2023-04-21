namespace jacdac {
    // Service CODAL Message Bus constants
    export const SRV_CODAL_MESSAGE_BUS = 0x121ff81d
    export const enum CodalMessageBusCmd {
        /**
         * Send a message on the CODAL bus. If `source` is `0`, it is treated as wildcard.
         *
         * ```
         * const [source, value] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        Send = 0x80,
    }

    export namespace CodalMessageBusCmdPack {
        /**
         * Pack format for 'send' data.
         */
        export const Send = "u16 u16"
    }

    export const enum CodalMessageBusEvent {
        /**
         * Raised by the server is triggered by the server. The filtering logic of which event to send over Jacdac is up to the server implementation.
         *
         * ```
         * const [source, value] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        //% block="message"
        Message = 0x80,
    }

    export namespace CodalMessageBusEventPack {
        /**
         * Pack format for 'message' data.
         */
        export const Message = "u16 u16"
    }
}
