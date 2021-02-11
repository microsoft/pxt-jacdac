namespace jacdac {
    // Service: LED
    export const SRV_LED = 0x1e3048f8

    export const enum LedVariant { // uint32_t
        ThroughHole = 0x1,
        SMD = 0x2,
        Power = 0x3,
        Bead = 0x4,
    }

    export const enum LedReg {
        /**
         * Read-write ratio u0.16 (uint16_t). Set the luminosity of the strip. The value is used to scale `value` in `steps` register.
         * At `0` the power to the strip is completely shut down.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Brightness = 0x1,

        /**
         * Animations are described using pairs of color description and duration,
         * similarly to the `status_light` register in the control service.
         * They repeat indefinitely until another animation is specified.
         * For monochrome LEDs, the hue and saturation are ignored.
         * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
         * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
         * change to yellow, and cross-fade back to red in 80ms.
         *
         * ```
         * const [rest] = jdunpack<[([number, number, number, number])[]]>(buf, "r: u8 u8 u8 u8")
         * const [hue, saturation, value, duration] = rest[0]
         * ```
         */
        Steps = 0x82,

        /**
         * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
         *
         * ```
         * const [maxPower] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPower = 0x7,

        /**
         * Constant uint16_t. If known, specifies the number of LEDs in parallel on this device.
         *
         * ```
         * const [ledCount] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        LedCount = 0x180,

        /**
         * Constant nm uint16_t. If monochrome LED, specifies the wave length of the LED.
         *
         * ```
         * const [waveLength] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        WaveLength = 0x181,

        /**
         * Constant mcd uint16_t. The luminous intensity of the LED, at full value, in micro candella.
         *
         * ```
         * const [luminousIntensity] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        LuminousIntensity = 0x182,

        /**
         * Constant Variant (uint32_t). The physical type of LED.
         *
         * ```
         * const [variant] = jdunpack<[LedVariant]>(buf, "u32")
         * ```
         */
        Variant = 0x107,
    }

}
