namespace jacdac {
    // Service Humidity constants
    export const SRV_HUMIDITY = 0x16c810b8
    export const enum HumidityReg {
        /**
         * Read-only %RH u22.10 (uint32_t). The relative humidity in percentage of full water saturation.
         *
         * ```
         * const [humidity] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        Humidity = 0x101,

        /**
         * Read-only %RH u22.10 (uint32_t). The real humidity is between `humidity - humidity_error` and `humidity + humidity_error`.
         *
         * ```
         * const [humidityError] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        HumidityError = 0x106,

        /**
         * Constant %RH u22.10 (uint32_t). Lowest humidity that can be reported.
         *
         * ```
         * const [minHumidity] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MinHumidity = 0x104,

        /**
         * Constant %RH u22.10 (uint32_t). Highest humidity that can be reported.
         *
         * ```
         * const [maxHumidity] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MaxHumidity = 0x105,
    }

    export namespace HumidityRegPack {
        /**
         * Pack format for 'humidity' data.
         */
        export const Humidity = "u22.10"

        /**
         * Pack format for 'humidity_error' data.
         */
        export const HumidityError = "u22.10"

        /**
         * Pack format for 'min_humidity' data.
         */
        export const MinHumidity = "u22.10"

        /**
         * Pack format for 'max_humidity' data.
         */
        export const MaxHumidity = "u22.10"
    }
}
