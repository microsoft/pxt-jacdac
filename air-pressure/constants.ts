namespace jacdac {
    // Service Air Pressure constants
    export const SRV_AIR_PRESSURE = 0x1e117cea
    export const enum AirPressureReg {
        /**
         * Read-only hPa u22.10 (uint32_t). The air pressure.
         *
         * ```
         * const [pressure] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        Pressure = 0x101,

        /**
         * Read-only hPa u22.10 (uint32_t). The real pressure is between `pressure - pressure_error` and `pressure + pressure_error`.
         *
         * ```
         * const [pressureError] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        PressureError = 0x106,

        /**
         * Constant hPa u22.10 (uint32_t). Lowest air pressure that can be reported.
         *
         * ```
         * const [minPressure] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MinPressure = 0x104,

        /**
         * Constant hPa u22.10 (uint32_t). Highest air pressure that can be reported.
         *
         * ```
         * const [maxPressure] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MaxPressure = 0x105,
    }

    export namespace AirPressureRegPack {
        /**
         * Pack format for 'pressure' data.
         */
        export const Pressure = "u22.10"

        /**
         * Pack format for 'pressure_error' data.
         */
        export const PressureError = "u22.10"

        /**
         * Pack format for 'min_pressure' data.
         */
        export const MinPressure = "u22.10"

        /**
         * Pack format for 'max_pressure' data.
         */
        export const MaxPressure = "u22.10"
    }
}
