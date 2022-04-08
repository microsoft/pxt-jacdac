namespace jacdac {
    // Service Character Screen constants
    export const SRV_CHARACTER_SCREEN = 0x1f37c56a

    export const enum CharacterScreenVariant { // uint8_t
        //% block="lcd"
        LCD = 0x1,
        //% block="oled"
        OLED = 0x2,
        //% block="braille"
        Braille = 0x3,
    }

    export const enum CharacterScreenTextDirection { // uint8_t
        //% block="left to right"
        LeftToRight = 0x1,
        //% block="right to left"
        RightToLeft = 0x2,
    }

    export const enum CharacterScreenReg {
        /**
         * Read-write string (bytes). Text to show. Use `\n` to break lines.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Message = 0x2,

        /**
         * Read-write ratio u0.16 (uint16_t). Brightness of the screen. `0` means off.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Brightness = 0x1,

        /**
         * Constant Variant (uint8_t). Describes the type of character LED screen.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.CharacterScreenVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,

        /**
         * Read-write TextDirection (uint8_t). Specifies the RTL or LTR direction of the text.
         *
         * ```
         * const [textDirection] = jdunpack<[jacdac.CharacterScreenTextDirection]>(buf, "u8")
         * ```
         */
        TextDirection = 0x82,

        /**
         * Constant # uint8_t. Gets the number of rows.
         *
         * ```
         * const [rows] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Rows = 0x180,

        /**
         * Constant # uint8_t. Gets the number of columns.
         *
         * ```
         * const [columns] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Columns = 0x181,
    }
}
