namespace jacdac {
    // Service Cloud Configuration constants
    export const SRV_CLOUD_CONFIGURATION = 0x1462eefc

    export const enum CloudConfigurationConnectionStatus { // uint16_t
        //% block="connected"
        Connected = 0x1,
        //% block="disconnected"
        Disconnected = 0x2,
        //% block="connecting"
        Connecting = 0x3,
        //% block="disconnecting"
        Disconnecting = 0x4,
    }

    export const enum CloudConfigurationReg {
        /**
         * Read-only string (bytes). Something like `my-iot-hub.azure-devices.net` if available.
         *
         * ```
         * const [serverName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ServerName = 0x180,

        /**
         * Read-only string (bytes). Device identifier for the device in the cloud if available.
         *
         * ```
         * const [cloudDeviceId] = jdunpack<[string]>(buf, "s")
         * ```
         */
        CloudDeviceId = 0x181,

        /**
         * Constant string (bytes). Cloud provider identifier.
         *
         * ```
         * const [cloudType] = jdunpack<[string]>(buf, "s")
         * ```
         */
        CloudType = 0x183,

        /**
         * Read-only ConnectionStatus (uint16_t). Indicates the status of connection. A message beyond the [0..3] range represents an HTTP error code.
         *
         * ```
         * const [connectionStatus] = jdunpack<[jacdac.CloudConfigurationConnectionStatus]>(buf, "u16")
         * ```
         */
        ConnectionStatus = 0x182,

        /**
         * Read-write ms uint32_t. How often to push data to the cloud.
         *
         * ```
         * const [pushPeriod] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        PushPeriod = 0x80,

        /**
         * Read-write ms uint32_t. If no message is published within given period, the device resets.
         * This can be due to connectivity problems or due to the device having nothing to publish.
         * Forced to be at least `2 * flush_period`.
         * Set to `0` to disable (default).
         *
         * ```
         * const [pushWatchdogPeriod] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        PushWatchdogPeriod = 0x81,
    }

    export namespace CloudConfigurationRegPack {
        /**
         * Pack format for 'server_name' data.
         */
        export const ServerName = "s"

        /**
         * Pack format for 'cloud_device_id' data.
         */
        export const CloudDeviceId = "s"

        /**
         * Pack format for 'cloud_type' data.
         */
        export const CloudType = "s"

        /**
         * Pack format for 'connection_status' data.
         */
        export const ConnectionStatus = "u16"

        /**
         * Pack format for 'push_period' data.
         */
        export const PushPeriod = "u32"

        /**
         * Pack format for 'push_watchdog_period' data.
         */
        export const PushWatchdogPeriod = "u32"
    }

    export const enum CloudConfigurationCmd {
        /**
         * No args. Starts a connection to the cloud service
         */
        Connect = 0x81,

        /**
         * No args. Starts disconnecting from the cloud service
         */
        Disconnect = 0x82,

        /**
         * Argument: connection_string string (bytes). Restricted command to override the existing connection string to cloud.
         *
         * ```
         * const [connectionString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        SetConnectionString = 0x86,
    }

    export namespace CloudConfigurationCmdPack {
        /**
         * Pack format for 'set_connection_string' data.
         */
        export const SetConnectionString = "s"
    }

    export const enum CloudConfigurationEvent {
        /**
         * Argument: connection_status ConnectionStatus (uint16_t). Raised when the connection status changes
         *
         * ```
         * const [connectionStatus] = jdunpack<[jacdac.CloudConfigurationConnectionStatus]>(buf, "u16")
         * ```
         */
        //% block="connection status change"
        ConnectionStatusChange = 0x3,

        /**
         * Raised when a message has been sent to the hub.
         */
        //% block="message sent"
        MessageSent = 0x80,
    }

    export namespace CloudConfigurationEventPack {
        /**
         * Pack format for 'connection_status_change' data.
         */
        export const ConnectionStatusChange = "u16"
    }

}
