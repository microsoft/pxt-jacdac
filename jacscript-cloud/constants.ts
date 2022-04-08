namespace jacdac {
    // Service Jacscript Cloud constants
    export const SRV_JACSCRIPT_CLOUD = 0x14606e9c

    export const enum JacscriptCloudCommandStatus { // uint32_t
        //% block="ok"
        OK = 0xc8,
        //% block="not found"
        NotFound = 0x194,
        //% block="busy"
        Busy = 0x1ad,
    }

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
         * Should be called by jacscript when it finishes handling a `cloud_command`.
         *
         * ```
         * const [seqNo, status, result] = jdunpack<[number, jacdac.JacscriptCloudCommandStatus, number[]]>(buf, "u32 u32 f64[]")
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
         * Emitted when cloud requests jacscript to run some action.
         *
         * ```
         * const [seqNo, command, argument] = jdunpack<[number, string, number[]]>(buf, "u32 z f64[]")
         * ```
         */
        //% block="cloud command"
        CloudCommand = 0x81,

        /**
         * Emitted whenever any of the twin properties change.
         */
        //% block="twin change"
        TwinChange = 0x3,
    }
}
