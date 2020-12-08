namespace jacdac {
    // Service: Sensor Aggregator
    export const SRV_SENSOR_AGGREGATOR = 0x1d90e1c5

    export const enum SensorAggregatorSampleType { // uint8_t
        U8 = 0x8,
        I8 = 0x88,
        U16 = 0x10,
        I16 = 0x90,
        U32 = 0x20,
        I32 = 0xa0,
    }

    export const SRV_SENSOR_AGGREGATOR_INPUTS_RW_PACK_FORMAT = "u16 u16 u32 r: b[8] u32 u8 u8 u8 i8"
    export const SRV_SENSOR_AGGREGATOR_NUM_SAMPLES_RO_PACK_FORMAT = "u32"
    export const SRV_SENSOR_AGGREGATOR_SAMPLE_SIZE_RO_PACK_FORMAT = "u8"
    export const SRV_SENSOR_AGGREGATOR_STREAMING_SAMPLES_RW_PACK_FORMAT = "u32"
    export const SRV_SENSOR_AGGREGATOR_CURRENT_SAMPLE_RO_PACK_FORMAT = "b"
    export const enum SensorAggregatorReg {
        /**
         * Set automatic input collection.
         * These settings are stored in flash.
         *
         * ```
         * const [samplingInterval, samplesInWindow, rest] = jdunpack<[number, number, ([Buffer, number, number, number, SensorAggregatorSampleType, number])[]]>(buf, "u16 u16 x[4] r: b[8] u32 u8 u8 u8 i8")
         * const [deviceId, serviceClass, serviceNum, sampleSize, sampleType, sampleShift] = rest[0]
         * ```
         */
        Inputs = 0x80,

        /**
         * Read-only uint32_t. Number of input samples collected so far.
         */
        NumSamples = 0x180,

        /**
         * Read-only B uint8_t. Size of a single sample.
         */
        SampleSize = 0x181,

        /**
         * Read-write uint32_t. When set to `N`, will stream `N` samples as `current_sample` reading.
         */
        StreamingSamples = 0x81,

        /**
         * Read-only bytes. Last collected sample.
         */
        CurrentSample = 0x101,
    }

}
