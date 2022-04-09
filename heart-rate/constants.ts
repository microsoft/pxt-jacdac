namespace jacdac {
    // Service Heart Rate constants
    export const SRV_HEART_RATE = 0x166c6dc4

    export const enum HeartRateVariant { // uint8_t
        //% block="finger"
        Finger = 0x1,
        //% block="chest"
        Chest = 0x2,
        //% block="wrist"
        Wrist = 0x3,
        //% block="pump"
        Pump = 0x4,
        //% block="web cam"
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

    export const enum HeartRateRegPack {
        /**
         * Pack format for 'heart_rate' register data.
         */
        HeartRate = "u16.16",

        /**
         * Pack format for 'heart_rate_error' register data.
         */
        HeartRateError = "u16.16",

        /**
         * Pack format for 'variant' register data.
         */
        Variant = "u8",
    }
}
