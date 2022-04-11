namespace jacdac {
    // Service LED Strip constants
    export const SRV_LED_STRIP = 0x126f00e0

    export const enum LedStripLightType { // uint8_t
        //% block="ws2812b grb"
        WS2812B_GRB = 0x0,
        //% block="apa102"
        APA102 = 0x10,
        //% block="sk9822"
        SK9822 = 0x11,
    }

    export const enum LedStripVariant { // uint8_t
        //% block="strip"
        Strip = 0x1,
        //% block="ring"
        Ring = 0x2,
        //% block="stick"
        Stick = 0x3,
        //% block="jewel"
        Jewel = 0x4,
        //% block="matrix"
        Matrix = 0x5,
    }

    export const enum LedStripReg {
        /**
         * Read-write ratio u0.8 (uint8_t). Set the luminosity of the strip.
         * At `0` the power to the strip is completely shut down.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u0.8")
         * ```
         */
        Brightness = 0x1,

        /**
         * Read-only ratio u0.8 (uint8_t). This is the luminosity actually applied to the strip.
         * May be lower than `brightness` if power-limited by the `max_power` register.
         * It will rise slowly (few seconds) back to `brightness` is limits are no longer required.
         *
         * ```
         * const [actualBrightness] = jdunpack<[number]>(buf, "u0.8")
         * ```
         */
        ActualBrightness = 0x180,

        /**
         * Read-write LightType (uint8_t). Specifies the type of light strip connected to controller.
         * Controllers which are sold with lights should default to the correct type
         * and could not allow change.
         *
         * ```
         * const [lightType] = jdunpack<[jacdac.LedStripLightType]>(buf, "u8")
         * ```
         */
        LightType = 0x80,

        /**
         * Read-write # uint16_t. Specifies the number of pixels in the strip.
         * Controllers which are sold with lights should default to the correct length
         * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
         *
         * ```
         * const [numPixels] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        NumPixels = 0x81,

        /**
         * Read-write # uint16_t. If the LED pixel strip is a matrix, specifies the number of columns. Otherwise, a square shape is assumed. Controllers which are sold with lights should default to the correct length
         * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
         *
         * ```
         * const [numColumns] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        NumColumns = 0x83,

        /**
         * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
         *
         * ```
         * const [maxPower] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPower = 0x7,

        /**
         * Constant # uint16_t. The maximum supported number of pixels.
         * All writes to `num_pixels` are clamped to `max_pixels`.
         *
         * ```
         * const [maxPixels] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPixels = 0x181,

        /**
         * Read-write # uint16_t. How many times to repeat the program passed in `run` command.
         * Should be set before the `run` command.
         * Setting to `0` means to repeat forever.
         *
         * ```
         * const [numRepeats] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        NumRepeats = 0x82,

        /**
         * Constant Variant (uint8_t). Specifies the shape of the light strip.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.LedStripVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace LedStripRegPack {
        /**
         * Pack format for 'brightness' register data.
         */
        export const Brightness = "u0.8"

        /**
         * Pack format for 'actual_brightness' register data.
         */
        export const ActualBrightness = "u0.8"

        /**
         * Pack format for 'light_type' register data.
         */
        export const LightType = "u8"

        /**
         * Pack format for 'num_pixels' register data.
         */
        export const NumPixels = "u16"

        /**
         * Pack format for 'num_columns' register data.
         */
        export const NumColumns = "u16"

        /**
         * Pack format for 'max_power' register data.
         */
        export const MaxPower = "u16"

        /**
         * Pack format for 'max_pixels' register data.
         */
        export const MaxPixels = "u16"

        /**
         * Pack format for 'num_repeats' register data.
         */
        export const NumRepeats = "u16"

        /**
         * Pack format for 'variant' register data.
         */
        export const Variant = "u8"
    }

    export const enum LedStripCmd {
        /**
         * Argument: program bytes. Run the given light "program". See service description for details.
         *
         * ```
         * const [program] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Run = 0x81,
    }

    export namespace LedStripCmdPack {
        /**
         * Pack format for 'run' register data.
         */
        export const Run = "b"
    }
}
