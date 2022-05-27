namespace jacdac {
    // Service Azure IoT Hub Health constants
    export const SRV_AZURE_IOT_HUB_HEALTH = 0x1462eefc

    export const enum AzureIotHubHealthConnectionStatus { // uint16_t
        //% block="connected"
        Connected = 0x1,
        //% block="disconnected"
        Disconnected = 0x2,
        //% block="connecting"
        Connecting = 0x3,
        //% block="disconnecting"
        Disconnecting = 0x4,
    }

    export const enum AzureIotHubHealthReg {
        /**
         * Read-only string (bytes). Something like `my-iot-hub.azure-devices.net` if available.
         *
         * ```
         * const [hubName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        HubName = 0x180,

        /**
         * Read-only string (bytes). Device identifier in Azure Iot Hub if available.
         *
         * ```
         * const [hubDeviceId] = jdunpack<[string]>(buf, "s")
         * ```
         */
        HubDeviceId = 0x181,

        /**
         * Read-only ConnectionStatus (uint16_t). Indicates the status of connection. A message beyond the [0..3] range represents an HTTP error code.
         *
         * ```
         * const [connectionStatus] = jdunpack<[jacdac.AzureIotHubHealthConnectionStatus]>(buf, "u16")
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

    export namespace AzureIotHubHealthRegPack {
        /**
         * Pack format for 'hub_name' register data.
         */
        export const HubName = "s"

        /**
         * Pack format for 'hub_device_id' register data.
         */
        export const HubDeviceId = "s"

        /**
         * Pack format for 'connection_status' register data.
         */
        export const ConnectionStatus = "u16"

        /**
         * Pack format for 'push_period' register data.
         */
        export const PushPeriod = "u32"

        /**
         * Pack format for 'push_watchdog_period' register data.
         */
        export const PushWatchdogPeriod = "u32"
    }

    export const enum AzureIotHubHealthCmd {
        /**
         * No args. Starts a connection to the IoT hub service
         */
        Connect = 0x81,

        /**
         * No args. Starts disconnecting from the IoT hub service
         */
        Disconnect = 0x82,

        /**
         * Argument: connection_string string (bytes). Restricted command to override the existing connection string to the Azure IoT Hub.
         *
         * ```
         * const [connectionString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        SetConnectionString = 0x86,
    }

    export namespace AzureIotHubHealthCmdPack {
        /**
         * Pack format for 'set_connection_string' register data.
         */
        export const SetConnectionString = "s"
    }

    export const enum AzureIotHubHealthEvent {
        /**
         * Argument: connection_status ConnectionStatus (uint16_t). Raised when the connection status changes
         *
         * ```
         * const [connectionStatus] = jdunpack<[jacdac.AzureIotHubHealthConnectionStatus]>(buf, "u16")
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

    export namespace AzureIotHubHealthEventPack {
        /**
         * Pack format for 'connection_status_change' register data.
         */
        export const ConnectionStatusChange = "u16"
    }
}
