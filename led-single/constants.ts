namespace jacdac {
    // Service LED Single constants
    export const SRV_LED_SINGLE = 0x1e3048f8

    export const enum LedSingleVariant { // uint8_t
        //% block="through hole"
        ThroughHole = 0x1,
        //% block="smd"
        SMD = 0x2,
        //% block="power"
        Power = 0x3,
        //% block="bead"
        Bead = 0x4,
    }

    export const enum LedSingleCmd {
        /**
         * This has the same semantics as `set_status_light` in the control service.
         *
         * ```
         * const [toRed, toGreen, toBlue, speed] = jdunpack<[number, number, number, number]>(buf, "u8 u8 u8 u8")
         * ```
         */
        Animate = 0x80,
    }

    export namespace LedSingleCmdPack {
        /**
         * Pack format for 'animate' data.
         */
        export const Animate = "u8 u8 u8 u8"
    }

    export const enum LedSingleReg {
        /**
         * The current color of the LED.
         *
         * ```
         * const [red, green, blue] = jdunpack<[number, number, number]>(buf, "u8 u8 u8")
         * ```
         */
        Color = 0x180,

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
        LedCount = 0x183,

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
         * Constant Variant (uint8_t). The physical type of LED.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.LedSingleVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace LedSingleRegPack {
        /**
         * Pack format for 'color' data.
         */
        export const Color = "u8 u8 u8"

        /**
         * Pack format for 'max_power' data.
         */
        export const MaxPower = "u16"

        /**
         * Pack format for 'led_count' data.
         */
        export const LedCount = "u16"

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
