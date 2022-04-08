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
}
