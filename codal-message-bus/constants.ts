namespace jacdac {
    // Service: CODAL Message Bus
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

}
