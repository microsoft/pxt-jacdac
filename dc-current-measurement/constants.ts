namespace jacdac {
    // Service DC Current Measurement constants
    export const SRV_DC_CURRENT_MEASUREMENT = 0x1912c8ae
    export const enum DcCurrentMeasurementReg {
        /**
         * Constant string (bytes). A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
         *
         * ```
         * const [measurementName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        MeasurementName = 0x182,

        /**
         * Read-only A f64 (uint64_t). The current measurement.
         *
         * ```
         * const [measurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        Measurement = 0x101,
    }

    export const enum DcCurrentMeasurementRegPack {
        /**
         * Pack format for 'measurement_name' register data.
         */
        MeasurementName = "s",

        /**
         * Pack format for 'measurement' register data.
         */
        Measurement = "f64",
    }
}
