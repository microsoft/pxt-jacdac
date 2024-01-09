namespace jacdac {
    // Service Keyboard client constants
    export const SRV_KEYBOARD_CLIENT = 0x113d023e
    export const enum KeyboardClientEvent {
        /**
         * Argument: key uint16_t. Emitted when a key is pressed.
         *
         * ```
         * const [key] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        //% block="down"
        Down = 0x1,

        /**
         * Argument: key uint16_t. Emitted when a key is held.
         *
         * ```
         * const [key] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        //% block="hold"
        Hold = 0x81,
    }

    export namespace KeyboardClientEventPack {
        /**
         * Pack format for 'down' data.
         */
        export const Down = "u16"

        /**
         * Pack format for 'hold' data.
         */
        export const Hold = "u16"
    }
}
