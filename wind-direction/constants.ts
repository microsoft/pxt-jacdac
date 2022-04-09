namespace jacdac {
    // Service Wind direction constants
    export const SRV_WIND_DIRECTION = 0x186be92b
    export const enum WindDirectionReg {
        /**
         * Read-only ° uint16_t. The direction of the wind.
         *
         * ```
         * const [windDirection] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        WindDirection = 0x101,

        /**
         * Read-only ° uint16_t. Error on the wind direction reading
         *
         * ```
         * const [windDirectionError] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        WindDirectionError = 0x106,
    }

    export const enum WindDirectionRegPack {
        /**
         * Pack format for 'wind_direction' register data.
         */
        WindDirection = "u16",

        /**
         * Pack format for 'wind_direction_error' register data.
         */
        WindDirectionError = "u16",
    }
}
