namespace jacdac {
    // Service Timeseries Aggregator constants
    export const SRV_TIMESERIES_AGGREGATOR = 0x1192bdcc
    export const enum TimeseriesAggregatorCmd {
        /**
         * No args. Remove all pending timeseries.
         */
        Clear = 0x80,

        /**
         * Add a data point to a timeseries.
         *
         * ```
         * const [value, label] = jdunpack<[number, string]>(buf, "f64 s")
         * ```
         */
        Update = 0x83,

        /**
         * Set aggregation window.
         * Setting to `0` will restore default.
         *
         * ```
         * const [duration, label] = jdunpack<[number, string]>(buf, "u32 s")
         * ```
         */
        SetWindow = 0x84,

        /**
         * Set whether or not the timeseries will be uploaded to the cloud.
         * The `stored` reports are generated regardless.
         *
         * ```
         * const [upload, label] = jdunpack<[number, string]>(buf, "u8 s")
         * ```
         */
        SetUpload = 0x85,

        /**
         * Indicates that the average, minimum and maximum value of a given
         * timeseries are as indicated.
         * It also says how many samples were collected, and the collection period.
         * Timestamps are given using device's internal clock, which will wrap around.
         * Typically, `end_time` can be assumed to be "now".
         * `end_time - start_time == window`
         *
         * ```
         * const [numSamples, avg, min, max, startTime, endTime, label] = jdunpack<[number, number, number, number, number, number, string]>(buf, "u32 x[4] f64 f64 f64 u32 u32 s")
         * ```
         */
        Stored = 0x90,
    }

    export namespace TimeseriesAggregatorCmdPack {
        /**
         * Pack format for 'update' data.
         */
        export const Update = "f64 s"

        /**
         * Pack format for 'set_window' data.
         */
        export const SetWindow = "u32 s"

        /**
         * Pack format for 'set_upload' data.
         */
        export const SetUpload = "u8 s"

        /**
         * Pack format for 'stored' data.
         */
        export const Stored = "u32 b[4] f64 f64 f64 u32 u32 s"
    }

    export const enum TimeseriesAggregatorReg {
        /**
         * Read-only μs uint32_t. This can queried to establish local time on the device.
         *
         * ```
         * const [now] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        Now = 0x180,

        /**
         * Read-write bool (uint8_t). When `true`, the windows will be shorter after service reset and gradually extend to requested length.
         * This is ensure valid data is being streamed in program development.
         *
         * ```
         * const [fastStart] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        FastStart = 0x80,

        /**
         * Read-write ms uint32_t. Window for timeseries for which `set_window` was never called.
         * Note that windows returned initially may be shorter if `fast_start` is enabled.
         *
         * ```
         * const [defaultWindow] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        DefaultWindow = 0x81,

        /**
         * Read-write bool (uint8_t). Whether labelled timeseries for which `set_upload` was never called should be automatically uploaded.
         *
         * ```
         * const [defaultUpload] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        DefaultUpload = 0x82,

        /**
         * Read-write bool (uint8_t). Whether automatically created timeseries not bound in role manager should be uploaded.
         *
         * ```
         * const [uploadUnlabelled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        UploadUnlabelled = 0x83,

        /**
         * Read-write ms uint32_t. If no data is received from any sensor within given period, the device is rebooted.
         * Set to `0` to disable (default).
         * Updating user-provided timeseries does not reset the watchdog.
         *
         * ```
         * const [sensorWatchdogPeriod] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        SensorWatchdogPeriod = 0x84,
    }

    export namespace TimeseriesAggregatorRegPack {
        /**
         * Pack format for 'now' data.
         */
        export const Now = "u32"

        /**
         * Pack format for 'fast_start' data.
         */
        export const FastStart = "u8"

        /**
         * Pack format for 'default_window' data.
         */
        export const DefaultWindow = "u32"

        /**
         * Pack format for 'default_upload' data.
         */
        export const DefaultUpload = "u8"

        /**
         * Pack format for 'upload_unlabelled' data.
         */
        export const UploadUnlabelled = "u8"

        /**
         * Pack format for 'sensor_watchdog_period' data.
         */
        export const SensorWatchdogPeriod = "u32"
    }

}
