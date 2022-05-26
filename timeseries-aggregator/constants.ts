namespace jacdac {
    // Service Timeseries Aggregator constants
    export const SRV_TIMESERIES_AGGREGATOR = 0x1192bdcc

    export const enum TimeseriesAggregatorDataMode { // uint8_t
        //% block="continuous"
        Continuous = 0x1,
        //% block="discrete"
        Discrete = 0x2,
    }

    export const enum TimeseriesAggregatorCmd {
        /**
         * No args. Remove all pending timeseries.
         */
        Clear = 0x80,

        /**
         * Starts a new timeseries.
         * As for `mode`,
         * `Continuous` has default aggregation window of 60s,
         * and `Discrete` only stores the data if it has changed since last store,
         * and has default window of 1s.
         *
         * ```
         * const [id, mode, label] = jdunpack<[number, jacdac.TimeseriesAggregatorDataMode, string]>(buf, "u32 u8 s")
         * ```
         */
        StartTimeseries = 0x81,

        /**
         * Add a data point to a timeseries.
         *
         * ```
         * const [value, id] = jdunpack<[number, number]>(buf, "f64 u32")
         * ```
         */
        Update = 0x83,

        /**
         * Set aggregation window.
         *
         * ```
         * const [id, duration] = jdunpack<[number, number]>(buf, "u32 u32")
         * ```
         */
        SetWindow = 0x84,

        /**
         * Indicates that the average, minimum and maximum value of a given
         * timeseries are as indicated.
         * It also says how many samples were collected, and the collection period.
         * Timestamps are given using device's internal clock, which will wrap around.
         * Typically, `end_time` can be assumed to be "now".
         *
         * ```
         * const [id, numSamples, avg, min, max, startTime, endTime] = jdunpack<[number, number, number, number, number, number, number]>(buf, "u32 u32 f64 f64 f64 u32 u32")
         * ```
         */
        Stored = 0x85,
    }

    export namespace TimeseriesAggregatorCmdPack {
        /**
         * Pack format for 'start_timeseries' register data.
         */
        export const StartTimeseries = "u32 u8 s"

        /**
         * Pack format for 'update' register data.
         */
        export const Update = "f64 u32"

        /**
         * Pack format for 'set_window' register data.
         */
        export const SetWindow = "u32 u32"

        /**
         * Pack format for 'stored' register data.
         */
        export const Stored = "u32 u32 f64 f64 f64 u32 u32"
    }

    export const enum TimeseriesAggregatorReg {
        /**
         * Read-only μs uint32_t. This register is automatically broadcast and can be also queried to establish local time on the device.
         *
         * ```
         * const [now] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        Now = 0x180,

        /**
         * Read-write bool (uint8_t). When `true`, the windows will be shorter after service reset and gradually extend to requested length.
         * This makes the sensor look more responsive.
         *
         * ```
         * const [fastStart] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        FastStart = 0x80,

        /**
         * Read-write ms uint32_t. Window applied to automatically created continuous timeseries.
         * Note that windows returned initially may be shorter.
         *
         * ```
         * const [continuousWindow] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ContinuousWindow = 0x81,

        /**
         * Read-write ms uint32_t. Window applied to automatically created discrete timeseries.
         *
         * ```
         * const [discreteWindow] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        DiscreteWindow = 0x82,
    }

    export namespace TimeseriesAggregatorRegPack {
        /**
         * Pack format for 'now' register data.
         */
        export const Now = "u32"

        /**
         * Pack format for 'fast_start' register data.
         */
        export const FastStart = "u8"

        /**
         * Pack format for 'continuous_window' register data.
         */
        export const ContinuousWindow = "u32"

        /**
         * Pack format for 'discrete_window' register data.
         */
        export const DiscreteWindow = "u32"
    }
}
