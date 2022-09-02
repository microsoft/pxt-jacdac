namespace jacdac {
    // Service DC Voltage Measurement constants
    export const SRV_DC_VOLTAGE_MEASUREMENT = 0x1633ac19

    export const enum DcVoltageMeasurementVoltageMeasurementType { // uint8_t
        //% block="absolute"
        Absolute = 0x0,
        //% block="differential"
        Differential = 0x1,
    }

    export const enum DcVoltageMeasurementReg {
        /**
         * Constant VoltageMeasurementType (uint8_t). The type of measurement that is taking place. Absolute results are measured with respect to ground, whereas differential results are measured against another signal that is not ground.
         *
         * ```
         * const [measurementType] = jdunpack<[jacdac.DcVoltageMeasurementVoltageMeasurementType]>(buf, "u8")
         * ```
         */
        MeasurementType = 0x181,

        /**
         * Constant string (bytes). A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
         *
         * ```
         * const [measurementName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        MeasurementName = 0x182,

        /**
         * Read-only V f64 (uint64_t). The voltage measurement.
         *
         * ```
         * const [measurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        Measurement = 0x101,

        /**
         * Read-only V f64 (uint64_t). Absolute error on the reading value.
         *
         * ```
         * const [measurementError] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        MeasurementError = 0x106,

        /**
         * Constant V f64 (uint64_t). Minimum measurable current
         *
         * ```
         * const [minMeasurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        MinMeasurement = 0x104,

        /**
         * Constant V f64 (uint64_t). Maximum measurable current
         *
         * ```
         * const [maxMeasurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        MaxMeasurement = 0x105,
    }

    export namespace DcVoltageMeasurementRegPack {
        /**
         * Pack format for 'measurement_type' register data.
         */
        export const MeasurementType = "u8"

        /**
         * Pack format for 'measurement_name' register data.
         */
        export const MeasurementName = "s"

        /**
         * Pack format for 'measurement' register data.
         */
        export const Measurement = "f64"

        /**
         * Pack format for 'measurement_error' register data.
         */
        export const MeasurementError = "f64"

        /**
         * Pack format for 'min_measurement' register data.
         */
        export const MinMeasurement = "f64"

        /**
         * Pack format for 'max_measurement' register data.
         */
        export const MaxMeasurement = "f64"
    }
}
