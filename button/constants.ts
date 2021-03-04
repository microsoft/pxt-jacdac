namespace jacdac.constants {
    // Service: Button
    export const SRV_BUTTON = 0x1473a263
    export const enum ButtonReg {
        /**
         * Read-only bool (uint8_t). Indicates whether the button is currently active (pressed).
         *
         * ```
         * const [pressed] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Pressed = 0x101,
    }

    export const enum ButtonEvent {
        /**
         * Emitted when button goes from inactive (`pressed == 0`) to active.
         */
        //% block="down"
        Down = 0x1,

        /**
         * Emitted when button goes from active (`pressed == 1`) to inactive.
         */
        //% block="up"
        Up = 0x2,

        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% block="click"
        Click = 0x80,

        /**
         * Emitted after button is held for 500ms. Long click events are followed by a separate up event.
         */
        //% block="long click"
        LongClick = 0x81,

        /**
         * Emitted after the button is held for 1500ms. Hold events are followed by a separate up event.
         */
        //% block="hold"
        Hold = 0x82,
    }

}
