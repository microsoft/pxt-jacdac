namespace jacdac {
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
        Down = 0x1,

        /**
         * Emitted when button goes from active (`pressed == 1`) to inactive.
         */
        Up = 0x2,

        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        Click = 0x3,

        /**
         * Emitted together with `up` when the press time was more than 500ms.
         */
        LongClick = 0x4,
    }

}