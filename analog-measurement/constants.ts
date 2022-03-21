namespace jacdac {
    // Service Analog Measurement constants
    export const SRV_ANALOG_MEASUREMENT = 0x1633ac19

    export const enum AnalogMeasurementADCMeasurementType { // uint8_t
        //% block="absolute"
        Absolute = 0x0,
        //% block="differential"
        Differential = 0x1,
    }

    export const enum AnalogMeasurementReg {
        /**
         * Constant ADCMeasurementType (uint8_t). The type of measurement that is taking place. Absolute results are measured with respect to ground, whereas differential results are measured against another signal that is not ground.
         *
         * ```
         * const [measurementType] = jdunpack<[jacdac.AnalogMeasurementADCMeasurementType]>(buf, "u8")
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
         * Read-only V f64 (uint64_t). The result of the ADC measurement.
         *
         * ```
         * const [measurement] = jdunpack<[number]>(buf, "f64")
         * ```
         */
        Measurement = 0x101,
    }

}
