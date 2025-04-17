namespace jacdac {
    // Service Rain gauge constants
    export const SRV_RAIN_GAUGE = 0x13734c95
    export const enum RainGaugeReg {
        /**
         * Read-only mm u16.16 (uint32_t). Total precipitation recorded so far.
         *
         * ```
         * const [precipitation] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        Precipitation = 0x101,

        /**
         * Constant mm u16.16 (uint32_t). Typically the amount of rain needed for tipping the bucket.
         *
         * ```
         * const [precipitationPrecision] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        PrecipitationPrecision = 0x108,
    }

    export namespace RainGaugeRegPack {
        /**
         * Pack format for 'precipitation' data.
         */
        export const Precipitation = "u16.16"

        /**
         * Pack format for 'precipitation_precision' data.
         */
        export const PrecipitationPrecision = "u16.16"
    }

}
