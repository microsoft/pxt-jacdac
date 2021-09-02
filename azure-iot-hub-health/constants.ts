namespace jacdac {
    // Service: Azure IoT Hub Health
    export const SRV_AZURE_IOT_HUB_HEALTH = 0x1462eefc

    export const enum AzureIotHubHealthConnectionStatus { // uint16_t
        Connected = 0x0,
        Disconnected = 0x1,
        Connecting = 0x2,
        Disconnecting = 0x3,
    }

    export const enum AzureIotHubHealthReg {
        /**
         * Read-only string (bytes). Something like `my-iot-hub.azure-devices.net`; empty string when not properly configured
         *
         * ```
         * const [hubName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        HubName = 0x180,

        /**
         * Read-only ConnectionStatus (uint16_t). Indicates the status of connection. A message beyond the [0..3] range represents an HTTP error code.
         *
         * ```
         * const [connectionStatus] = jdunpack<[jacdac.AzureIotHubHealthConnectionStatus]>(buf, "u16")
         * ```
         */
        ConnectionStatus = 0x181,

        /**
         * Reads internal statistics about messages sent to the hub.
         *
         * ```
         * const [reading, event, twinReported, twinDesired] = jdunpack<[number, number, number, number]>(buf, "u32 u32 u32 u32")
         * ```
         */
        Statistics = 0x182,
    }

    export const enum AzureIotHubHealthCmd {
        /**
         * Argument: twin_report pipe (bytes). Returns the twin json payload.
         *
         * ```
         * const [twinReport] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        Twin = 0x80,

        /**
         * No args. Starts a connection to the IoT hub service
         */
        Connect = 0x81,

        /**
         * No args. Starts disconnecting from the IoT hub service
         */
        Disconnect = 0x82,

        /**
         * Argument: payload uint32_t. Commands the device to send a `ping` message to the hub with the given payload.
         *
         * ```
         * const [payload] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        Ping = 0x85,

        /**
         * Argument: connection_string string (bytes). Restricted command to override the existing connection string to the Azure IoT Hub.
         *
         * ```
         * const [connectionString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        SetConnectionString = 0x86,
    }


    /**
     * pipe_report TwinReport
     * ```
     * const [content] = jdunpack<[string]>(buf, "s")
     * ```
     */


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
         * Raised when the twin model is modified.
         */
        //% block="twin change"
        TwinChange = 0x80,
    }

}
