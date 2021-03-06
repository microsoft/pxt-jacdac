namespace jacdac {
    // Service: Heart Rate
    export const SRV_HEART_RATE = 0x166c6dc4

    export const enum HeartRateVariant { // uint8_t
        Finger = 0x1,
        Chest = 0x2,
        Wrist = 0x3,
        Pump = 0x4,
        WebCam = 0x5,
    }

    export const enum HeartRateReg {
        /**
         * Read-only bpm u16.16 (uint32_t). The estimated heart rate.
         *
         * ```
         * const [heartRate] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        HeartRate = 0x101,

        /**
         * Read-only bpm u16.16 (uint32_t). The estimated error on the reported sensor data.
         *
         * ```
         * const [heartRateError] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        HeartRateError = 0x106,

        /**
         * Constant Variant (uint8_t). The type of physical sensor
         *
         * ```
         * const [variant] = jdunpack<[jacdac.HeartRateVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
