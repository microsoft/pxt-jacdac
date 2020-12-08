namespace jacdac {
    // Service: LED Matrix Controller
    export const SRV_LED_MATRIX_CONTROLLER = 0x1d35e393
    export const enum LedMatrixControllerReg {
        /**
         * Read-write bytes. Read or writes the state of the screen where pixel on/off state is
         * stored as a bit, column by column. The column should be byte aligned.
         */
        Leds = 0x80,

        /**
         * Read-write bool (uint8_t). Disables or enables the whole screen.
         */
        Enabled = 0x81,

        /**
         * Read-write uint8_t. Sets the general brightness of the LEDs.
         */
        Brightness = 0x82,

        /**
         * Constant # uint16_t. Number of rows on the screen
         */
        Rows = 0x83,

        /**
         * Constant # uint16_t. Number of columns on the screen
         */
        Columns = 0x84,
    }

    export const enum LedMatrixControllerCmd {
        /**
         * No args. Shorthand command to clear all the LEDs on the screen.
         */
        Clear = 0x80,
    }

}
