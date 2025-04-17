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

        /**
         * Read-only A f64 (uint64_t). Absolute error on the reading value.
         *
         * ```
         * const [measurementError] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        MeasurementError = 0x106,

        /**
         * Constant A f64 (uint64_t). Minimum measurable current
         *
         * ```
         * const [minMeasurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        MinMeasurement = 0x104,

        /**
         * Constant A f64 (uint64_t). Maximum measurable current
         *
         * ```
         * const [maxMeasurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        MaxMeasurement = 0x105,
    }

    export namespace DcCurrentMeasurementRegPack {
        /**
         * Pack format for 'measurement_name' data.
         */
        export const MeasurementName = "s"

        /**
         * Pack format for 'measurement' data.
         */
        export const Measurement = "f64"

        /**
         * Pack format for 'measurement_error' data.
         */
        export const MeasurementError = "f64"

        /**
         * Pack format for 'min_measurement' data.
         */
        export const MinMeasurement = "f64"

        /**
         * Pack format for 'max_measurement' data.
         */
        export const MaxMeasurement = "f64"
    }

}
