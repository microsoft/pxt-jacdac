namespace jacdac {
    // Service Jacscript Cloud constants
    export const SRV_JACSCRIPT_CLOUD = 0x14606e9c
    export const enum JacscriptCloudCmd {
        /**
         * Upload a labelled tuple of values to the cloud.
         * The tuple will be automatically tagged with timestamp and originating device.
         *
         * ```
         * const [label, value] = jdunpack<[string, number[]]>(buf, "z f64[]")
         * ```
         */
        Upload = 0x80,

        /**
         * Argument: path string (bytes). Get a numeric field from the current device twin.
         * Path is dot-separated.
         *
         * ```
         * const [path] = jdunpack<[string]>(buf, "s")
         * ```
         */
        GetTwin = 0x81,

        /**
         * report GetTwin
         * ```
         * const [path, value] = jdunpack<[string, number]>(buf, "z f64")
         * ```
         */

        /**
         * Argument: path string (bytes). Subscribe to updates to twin at specific path.
         * Generates `twin_changed` events.
         *
         * ```
         * const [path] = jdunpack<[string]>(buf, "s")
         * ```
         */
        SubscribeTwin = 0x82,

        /**
         * Should be called by jacscript when it finishes handling a `cloud_command`.
         *
         * ```
         * const [seqNo, result] = jdunpack<[number, number[]]>(buf, "u32 f64[]")
         * ```
         */
        AckCloudCommand = 0x83,
    }

    export const enum JacscriptCloudReg {
        /**
         * Read-only bool (uint8_t). Indicate whether we're currently connected to the cloud server.
         * When offline, `upload` commands are queued, and `get_twin` respond with cached values.
         *
         * ```
         * const [connected] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Connected = 0x180,
    }

    export const enum JacscriptCloudEvent {
        /**
         * Emitted when a twin is updated at given path.
         * It will be also emitted once immediately after `subscribe_twin`.
         *
         * ```
         * const [path, value] = jdunpack<[string, number]>(buf, "z f64")
         * ```
         */
        //% block="twin changed"
        TwinChanged = 0x80,

        /**
         * Emitted when cloud requests jacscript to run some action.
         *
         * ```
         * const [seqNo, command, argument] = jdunpack<[number, string, number[]]>(buf, "u32 z f64[]")
         * ```
         */
        //% block="cloud command"
        CloudCommand = 0x81,
    }

}
