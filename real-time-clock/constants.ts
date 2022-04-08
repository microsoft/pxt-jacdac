namespace jacdac {
    // Service Real time clock constants
    export const SRV_REAL_TIME_CLOCK = 0x1a8b1a28

    export const enum RealTimeClockVariant { // uint8_t
        //% block="computer"
        Computer = 0x1,
        //% block="crystal"
        Crystal = 0x2,
        //% block="cuckoo"
        Cuckoo = 0x3,
    }

    export const enum RealTimeClockReg {
        /**
         * Current time in 24h representation.
         *
         * ```
         * const [year, month, dayOfMonth, dayOfWeek, hour, min, sec] = jdunpack<[number, number, number, number, number, number, number]>(buf, "u16 u8 u8 u8 u8 u8 u8")
         * ```
         */
        LocalTime = 0x101,

        /**
         * Read-only s u16.16 (uint32_t). Time drift since the last call to the `set_time` command.
         *
         * ```
         * const [drift] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        Drift = 0x180,

        /**
         * Constant ppm u16.16 (uint32_t). Error on the clock, in parts per million of seconds.
         *
         * ```
         * const [precision] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        Precision = 0x181,

        /**
         * Constant Variant (uint8_t). The type of physical clock used by the sensor.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.RealTimeClockVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export const enum RealTimeClockCmd {
        /**
         * Sets the current time and resets the error.
         *
         * ```
         * const [year, month, dayOfMonth, dayOfWeek, hour, min, sec] = jdunpack<[number, number, number, number, number, number, number]>(buf, "u16 u8 u8 u8 u8 u8 u8")
         * ```
         */
        SetTime = 0x80,
    }
}
