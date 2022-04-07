namespace jacdac {
    // Service Air Quality Index constants
    export const SRV_AIR_QUALITY_INDEX = 0x14ac6ed6
    export const enum AirQualityIndexReg {
        /**
         * Read-only AQI u16.16 (uint32_t). Air quality index, typically refreshed every second.
         *
         * ```
         * const [aqiIndex] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        AqiIndex = 0x101,

        /**
         * Read-only AQI u16.16 (uint32_t). Error on the AQI measure.
         *
         * ```
         * const [aqiIndexError] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        AqiIndexError = 0x106,

        /**
         * Constant AQI u16.16 (uint32_t). Minimum AQI reading, representing a good air quality. Typically 0.
         *
         * ```
         * const [minAqiIndex] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MinAqiIndex = 0x104,

        /**
         * Constant AQI u16.16 (uint32_t). Maximum AQI reading, representing a very poor air quality.
         *
         * ```
         * const [maxAqiIndex] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MaxAqiIndex = 0x105,
    }

}
