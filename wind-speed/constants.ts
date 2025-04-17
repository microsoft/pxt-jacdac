namespace jacdac {
    // Service Wind speed constants
    export const SRV_WIND_SPEED = 0x1b591bbf
    export const enum WindSpeedReg {
        /**
         * Read-only m/s u16.16 (uint32_t). The velocity of the wind.
         *
         * ```
         * const [windSpeed] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        WindSpeed = 0x101,

        /**
         * Read-only m/s u16.16 (uint32_t). Error on the reading
         *
         * ```
         * const [windSpeedError] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        WindSpeedError = 0x106,

        /**
         * Constant m/s u16.16 (uint32_t). Maximum speed that can be measured by the sensor.
         *
         * ```
         * const [maxWindSpeed] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MaxWindSpeed = 0x105,
    }

    export namespace WindSpeedRegPack {
        /**
         * Pack format for 'wind_speed' data.
         */
        export const WindSpeed = "u16.16"

        /**
         * Pack format for 'wind_speed_error' data.
         */
        export const WindSpeedError = "u16.16"

        /**
         * Pack format for 'max_wind_speed' data.
         */
        export const MaxWindSpeed = "u16.16"
    }
}
