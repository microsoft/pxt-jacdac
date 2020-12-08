namespace jacdac {
    // Service: Common registers and commands
    export const SRV_SYSTEM_EVENT_REPORT_PACK_FORMAT = "u32 u32"
    export const SRV_SYSTEM_INTENSITY_RW_PACK_FORMAT = "u32"
    export const SRV_SYSTEM_VALUE_RW_PACK_FORMAT = "i32"
    export const SRV_SYSTEM_MAX_POWER_RW_PACK_FORMAT = "u16"
    export const SRV_SYSTEM_STREAMING_SAMPLES_RW_PACK_FORMAT = "u8"
    export const SRV_SYSTEM_STREAMING_INTERVAL_RW_PACK_FORMAT = "u32"
    export const SRV_SYSTEM_READING_RO_PACK_FORMAT = "i32"
    export const SRV_SYSTEM_LOW_THRESHOLD_RW_PACK_FORMAT = "i32"
    export const SRV_SYSTEM_HIGH_THRESHOLD_RW_PACK_FORMAT = "i32"
    export const SRV_SYSTEM_STATUS_CODE_RO_PACK_FORMAT = "u16 u16"
    export const SRV_SYSTEM_STREAMING_PREFERRED_INTERVAL_CONST_PACK_FORMAT = "u32"
    export const enum SystemCmd {
        /**
         * No args. Enumeration data for control service; service-specific advertisement data otherwise.
         * Control broadcasts it automatically every 500ms, but other service have to be queried to provide it.
         */
        Announce = 0x0,

        /**
         * No args. Registers number `N` is fetched by issuing command `0x1000 | N`.
         * The report format is the same as the format of the register.
         */
        GetRegister = 0x1000,

        /**
         * No args. Registers number `N` is set by issuing command `0x2000 | N`, with the format
         * the same as the format of the register.
         */
        SetRegister = 0x2000,

        /**
         * Event from sensor or a broadcast service.
         *
         * ```
         * const [eventId, eventArgument] = jdunpack<[number, number]>(buf, "u32 u32")
         * ```
         */
        Event = 0x1,

        /**
         * No args. Request to calibrate a sensor. The report indicates the calibration is done.
         */
        Calibrate = 0x2,
    }

    export const enum SystemReg {
        /**
         * Read-write uint32_t. This is either binary on/off (0 or non-zero), or can be gradual (eg. brightness of an RGB LED strip).
         */
        Intensity = 0x1,

        /**
         * Read-write int32_t. The primary value of actuator (eg. servo pulse length, or motor duty cycle).
         */
        Value = 0x2,

        /**
         * Read-write mA uint16_t. Limit the power drawn by the service, in mA.
         */
        MaxPower = 0x7,

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
         * Read-only int32_t. Read-only value of the sensor, also reported in streaming.
         */
        Reading = 0x101,

        /**
         * Read-write int32_t. Thresholds for event generation for event generation for analog sensors.
         */
        LowThreshold = 0x5,

        /**
         * Read-write int32_t. Thresholds for event generation for event generation for analog sensors.
         */
        HighThreshold = 0x6,

        /**
         * Reports the current state or error status of the device. ``code`` is a standardized value from
         * the JACDAC error codes. ``vendor_code`` is any vendor specific error code describing the device
         * state. This report is typically not queried, when a device has an error, it will typically
         * add this report in frame along with the anounce packet.
         *
         * ```
         * const [code, vendorCode] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        StatusCode = 0x7,

        /**
         * Constant ms uint32_t. Preferred default streaming interval for sensor in milliseconds.
         */
        StreamingPreferredInterval = 0x102,
    }

    export const enum SystemEvent {
        /**
         * Emit notifying that the internal state of the service changed.
         */
        Change = 0x2,
    }

}
