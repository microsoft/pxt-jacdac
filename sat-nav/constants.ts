namespace jacdac {
    // Service Satellite Navigation System constants
    export const SRV_SAT_NAV = 0x19dd6136
    export const enum SatNavReg {
        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         *
         * ```
         * const [timestamp, latitude, longitude, accuracy, altitude, altitudeAccuracy] = jdunpack<[number, number, number, number, number, number]>(buf, "u64 i9.23 i9.23 u16.16 i26.6 u16.16")
         * ```
         */
        Position = 0x101,

        /**
         * Read-write bool (uint8_t). Enables or disables the GPS module
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

    export namespace SatNavRegPack {
        /**
         * Pack format for 'position' data.
         */
        export const Position = "u64 i9.23 i9.23 u16.16 i26.6 u16.16"

        /**
         * Pack format for 'enabled' data.
         */
        export const Enabled = "u8"
    }

    export const enum SatNavEvent {
        /**
         * The module is disabled or lost connection with satellites.
         */
        //% block="inactive"
        Inactive = 0x2,
    }
}
