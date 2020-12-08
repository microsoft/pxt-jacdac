namespace jacdac {
    // Service: Sensor
    export const SRV_SENSOR_STREAMING_SAMPLES_RW_PACK_FORMAT = "u8"
    export const SRV_SENSOR_STREAMING_INTERVAL_RW_PACK_FORMAT = "u32"
    export const SRV_SENSOR_STREAMING_PREFERRED_INTERVAL_CONST_PACK_FORMAT = "u32"
    export const enum SensorReg {
        /**
         * Read-write uint8_t. Asks device to stream a given number of samples
         * (clients will typically write `255` to this register every second or so, while streaming is required).
         */
        StreamingSamples = 0x3,

        /**
         * Read-write ms uint32_t. Period between packets of data when streaming in milliseconds.
         */
        StreamingInterval = 0x4,

        /**
         * Constant ms uint32_t. Preferred default streaming interval for sensor in milliseconds.
         */
        StreamingPreferredInterval = 0x102,
    }

}
