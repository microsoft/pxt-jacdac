namespace jacdac {
    // Service Light level constants
    export const SRV_LIGHT_LEVEL = 0x17dc9a1c

    export const enum LightLevelVariant { // uint8_t
        //% block="photo resistor"
        PhotoResistor = 0x1,
        //% block="reverse biased led"
        ReverseBiasedLED = 0x2,
    }

    export const enum LightLevelReg {
        /**
         * Read-only ratio u0.16 (uint16_t). Detect light level
         *
         * ```
         * const [lightLevel] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        LightLevel = 0x101,

        /**
         * Read-only ratio u0.16 (uint16_t). Absolute estimated error of the reading value
         *
         * ```
         * const [lightLevelError] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        LightLevelError = 0x106,

        /**
         * Constant Variant (uint8_t). The type of physical sensor.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.LightLevelVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace LightLevelRegPack {
        /**
         * Pack format for 'light_level' data.
         */
        export const LightLevel = "u0.16"

        /**
         * Pack format for 'light_level_error' data.
         */
        export const LightLevelError = "u0.16"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }
}
