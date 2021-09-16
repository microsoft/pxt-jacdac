namespace jacdac {
    // Service: Dot Matrix
    export const SRV_DOT_MATRIX = 0x110d154b

    export const enum DotMatrixVariant { // uint8_t
        LED = 0x1,
        Braille = 0x2,
    }

    export const enum DotMatrixReg {
        /**
         * Read-write bytes. The state of the screen where dot on/off state is
         * stored as a bit, column by column. The column should be byte aligned.
         *
         * ```
         * const [dots] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Dots = 0x2,

        /**
         * Read-write ratio u0.8 (uint8_t). Reads the general brightness of the display, brightness for LEDs. `0` when the screen is off.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u0.8")
         * ```
         */
        Brightness = 0x1,

        /**
         * Constant # uint16_t. Number of rows on the screen
         *
         * ```
         * const [rows] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Rows = 0x181,

        /**
         * Constant # uint16_t. Number of columns on the screen
         *
         * ```
         * const [columns] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Columns = 0x182,

        /**
         * Constant Variant (uint8_t). Describes the type of matrix used.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.DotMatrixVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}