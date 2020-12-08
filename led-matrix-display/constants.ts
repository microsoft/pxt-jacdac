namespace jacdac {
    // Service: LED Matrix Display
    export const SRV_LED_MATRIX_DISPLAY = 0x110d154b
    export const SRV_LED_MATRIX_DISPLAY_LEDS_RO_PACK_FORMAT = "b"
    export const enum LedMatrixDisplayReg {
        /**
         * Read-only bytes. Streams the state of the screen where pixel on/off state is
         * stored as a bit, column by column. The column should be byte aligned.
         */
        Leds = 0x101,
    }

}
