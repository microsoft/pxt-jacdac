namespace jacdac {
    // Service LED constants
    export const SRV_LED = 0x1609d4f0
    export const CONST_LED_MAX_PIXELS_LENGTH = 0x40

    export const enum LedVariant { // uint8_t
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

    export const enum LedReg {
        /**
         * Read-write bytes. A buffer of 24bit RGB color entries for each LED, in R, G, B order.
         * When writing, if the buffer is too short, the remaining pixels are set to `#000000`;
         * If the buffer is too long, the write may be ignored, or the additional pixels may be ignored.
         * If the number of pixels is greater than `max_pixels_length`, the read should return an empty payload.
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
         * Constant # uint16_t. If known, specifies the number of LEDs in parallel on this device.
         * The actual number of LEDs is `num_pixels * leds_per_pixel`.
         *
         * ```
         * const [ledsPerPixel] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        LedsPerPixel = 0x184,

        /**
         * Constant nm uint16_t. If monochrome LED, specifies the wave length of the LED.
         * Register is missing for RGB LEDs.
         *
         * ```
         * const [waveLength] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        WaveLength = 0x185,

        /**
         * Constant mcd uint16_t. The luminous intensity of all the LEDs, at full brightness, in micro candella.
         *
         * ```
         * const [luminousIntensity] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        LuminousIntensity = 0x186,

        /**
         * Constant Variant (uint8_t). Specifies the shape of the light strip.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.LedVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace LedRegPack {
        /**
         * Pack format for 'pixels' data.
         */
        export const Pixels = "b"

        /**
         * Pack format for 'brightness' data.
         */
        export const Brightness = "u0.8"

        /**
         * Pack format for 'actual_brightness' data.
         */
        export const ActualBrightness = "u0.8"

        /**
         * Pack format for 'num_pixels' data.
         */
        export const NumPixels = "u16"

        /**
         * Pack format for 'num_columns' data.
         */
        export const NumColumns = "u16"

        /**
         * Pack format for 'max_power' data.
         */
        export const MaxPower = "u16"

        /**
         * Pack format for 'leds_per_pixel' data.
         */
        export const LedsPerPixel = "u16"

        /**
         * Pack format for 'wave_length' data.
         */
        export const WaveLength = "u16"

        /**
         * Pack format for 'luminous_intensity' data.
         */
        export const LuminousIntensity = "u16"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }
}
