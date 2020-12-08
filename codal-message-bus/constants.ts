namespace jacdac {
    // Service: CODAL Message Bus
    export const SRV_CODAL_MESSAGE_BUS = 0x16ad7cd5
    export const SRV_CODAL_MESSAGE_BUS_SEND_COMMAND_PACK_FORMAT = "u16 u16"
    export const enum CodalMessageBusCmd {
        /**
         * Sends a new event on the message bus.
         *
         * ```
         * const [id, event] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        Send = 0x80,
    }

}
