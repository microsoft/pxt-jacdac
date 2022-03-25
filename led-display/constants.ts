namespace jacdac {
    // Service LED Display constants
    export const SRV_LED_DISPLAY = 0x1609d4f0
    export const LED_DISPLAY_MAX_PIXELS_LENGTH = 0x40

    export const enum LedDisplayLightType { // uint8_t
        //% block="ws2812b grb"
        WS2812B_GRB = 0x0,
        //% block="apa102"
        APA102 = 0x10,
        //% block="sk9822"
        SK9822 = 0x11,
    }


    export const enum LedDisplayVariant { // uint8_t
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

    export const enum LedDisplayReg {
        /**
         * Read-write bytes. A buffer of 24bit RGB color entries for each LED, in R, G, B order.
         *
         * ```
         * const [pixels] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Pixels = 0x2,

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
         * Constant LightType (uint8_t). Specifies the type of light strip connected to controller.
         *
         * ```
         * const [lightType] = jdunpack<[jacdac.LedDisplayLightType]>(buf, "u8")
         * ```
         */
        LightType = 0x181,

        /**
         * Constant # uint16_t. Specifies the number of pixels in the strip.
         *
         * ```
         * const [numPixels] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        NumPixels = 0x182,

        /**
         * Constant # uint16_t. If the LED pixel strip is a matrix, specifies the number of columns.
         *
         * ```
         * const [numColumns] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        NumColumns = 0x183,

        /**
         * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
         *
         * ```
         * const [maxPower] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPower = 0x7,

        /**
         * Constant Variant (uint8_t). Specifies the shape of the light strip.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.LedDisplayVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
