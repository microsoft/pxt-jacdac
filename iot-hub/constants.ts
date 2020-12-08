namespace jacdac {
    // Service: Azure IoT Hub
    export const SRV_IOT_HUB = 0x19ed364c
    export const SRV_IOT_HUB_SEND_STRING_MSG_COMMAND_PACK_FORMAT = "z r: z z"
    export const SRV_IOT_HUB_SEND_MSG_EXT_REPORT_PACK_FORMAT = "u16"
    export const SRV_IOT_HUB_MESSAGE_PIPE_COMMAND_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_PROPERTIES_META_PIPE_COMMAND_PACK_FORMAT = "r: z z"
    export const SRV_IOT_HUB_SUBSCRIBE_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_IOT_HUB_DEVICEBOUND_PROPERTIES_META_PIPE_REPORT_PACK_FORMAT = "r: z z"
    export const SRV_IOT_HUB_DEVICEBOUND_PIPE_REPORT_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_GET_TWIN_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_IOT_HUB_TWIN_JSON_PIPE_REPORT_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_TWIN_ERROR_META_PIPE_REPORT_PACK_FORMAT = "u32"
    export const SRV_IOT_HUB_SUBSCRIBE_TWIN_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_IOT_HUB_TWIN_UPDATE_JSON_PIPE_REPORT_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_PATCH_TWIN_REPORT_PACK_FORMAT = "u16"
    export const SRV_IOT_HUB_TWIN_PATCH_JSON_PIPE_COMMAND_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_SUBSCRIBE_METHOD_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_IOT_HUB_METHOD_CALL_BODY_PIPE_REPORT_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_METHOD_CALL_META_PIPE_REPORT_PACK_FORMAT = "z z"
    export const SRV_IOT_HUB_RESPOND_TO_METHOD_COMMAND_PACK_FORMAT = "u32 z"
    export const SRV_IOT_HUB_RESPOND_TO_METHOD_REPORT_PACK_FORMAT = "u16"
    export const SRV_IOT_HUB_METHOD_RESPONSE_PIPE_COMMAND_PACK_FORMAT = "b"
    export const SRV_IOT_HUB_CONNECTION_STATUS_RO_PACK_FORMAT = "s"
    export const SRV_IOT_HUB_CONNECTION_STRING_RW_PACK_FORMAT = "s"
    export const SRV_IOT_HUB_HUB_NAME_RO_PACK_FORMAT = "s"
    export const SRV_IOT_HUB_DEVICE_ID_RO_PACK_FORMAT = "s"
    export const SRV_IOT_HUB_CONNECTION_ERROR_EVENT_PACK_FORMAT = "s"
    export const SRV_IOT_HUB_DEVICEBOUND_STR_EVENT_PACK_FORMAT = "z r: z z"
    export const enum IotHubCmd {
        /**
         * No args. Try connecting using currently set `connection_string`.
         * The service normally preiodically tries to connect automatically.
         */
        Connect = 0x80,

        /**
         * No args. Disconnect from current Hub if any.
         * This disables auto-connect behavior, until a `connect` command is issued.
         */
        Disconnect = 0x81,

        /**
         * Sends a short message in string format (it's typically JSON-encoded). Multiple properties can be attached.
         *
         * ```
         * const [msg, rest] = jdunpack<[string, ([string, string])[]]>(buf, "z r: z z")
         * const [propertyName, propertyValue] = rest[0]
         * ```
         */
        SendStringMsg = 0x82,

        /**
         * No args. Sends an arbitrary, possibly binary, message. The size is only limited by RAM on the module.
         */
        SendMsgExt = 0x83,

        /**
         * Argument: devicebound pipe (bytes). Subscribes for cloud to device messages, which will be sent over the specified pipe.
         */
        Subscribe = 0x84,

        /**
         * Argument: twin_result pipe (bytes). Ask for current device digital twin.
         */
        GetTwin = 0x85,

        /**
         * Argument: twin_updates pipe (bytes). Subscribe to updates to our twin.
         */
        SubscribeTwin = 0x87,

        /**
         * No args. Start twin update.
         */
        PatchTwin = 0x86,

        /**
         * Argument: method_call pipe (bytes). Subscribe to direct method calls.
         */
        SubscribeMethod = 0x88,

        /**
         * Respond to a direct method call (`request_id` comes from `subscribe_method` pipe).
         *
         * ```
         * const [status, requestId] = jdunpack<[number, string]>(buf, "u32 z")
         * ```
         */
        RespondToMethod = 0x89,
    }

    export const enum IotHubPipeCmd {
        /**
         * Set properties on the message. Can be repeated multiple times.
         *
         * ```
         * const [rest] = jdunpack<[([string, string])[]]>(buf, "r: z z")
         * const [propertyName, propertyValue] = rest[0]
         * ```
         */
        Properties = 0x1,

        /**
         * If there are any properties, this meta-report is send one or more times.
         * All properties of a given message are always sent before the body.
         *
         * ```
         * const [rest] = jdunpack<[([string, string])[]]>(buf, "r: z z")
         * const [propertyName, propertyValue] = rest[0]
         * ```
         */
        DeviceboundProperties = 0x1,

        /**
         * Argument: status_code uint32_t. This emitted if status is not 200.
         */
        TwinError = 0x1,

        /**
         * This is sent after the last part of the `method_call_body`.
         *
         * ```
         * const [methodName, requestId] = jdunpack<[string, string]>(buf, "z z")
         * ```
         */
        MethodCall = 0x1,
    }

    export const enum IotHubReg {
        /**
         * Read-only string (bytes). Returns `"ok"` when connected, and an error description otherwise.
         */
        ConnectionStatus = 0x180,

        /**
         * Read-write string (bytes). Connection string typically looks something like
         * `HostName=my-iot-hub.azure-devices.net;DeviceId=my-dev-007;SharedAccessKey=xyz+base64key`.
         * You can get it in `Shared access policies -> iothubowner -> Connection string-primary key` in the Azure Portal.
         * This register is write-only.
         * You can use `hub_name` and `device_id` to check if connection string is set, but you cannot get the shared access key.
         */
        ConnectionString = 0x80,

        /**
         * Read-only string (bytes). Something like `my-iot-hub.azure-devices.net`; empty string when `connection_string` is not set.
         */
        HubName = 0x181,

        /**
         * Read-only string (bytes). Something like `my-dev-007`; empty string when `connection_string` is not set.
         */
        DeviceId = 0x182,
    }

    export const enum IotHubEvent {
        /**
         * Emitted upon successful connection.
         */
        Connected = 0x1,

        /**
         * Argument: reason string (bytes). Emitted when connection was lost.
         */
        ConnectionError = 0x2,

        /**
         * This event is emitted upon reception of a cloud to device message, that is a string
         * (doesn't contain NUL bytes) and fits in a single event packet.
         * For reliable reception, use the `subscribe` command above.
         *
         * ```
         * const [msg, rest] = jdunpack<[string, ([string, string])[]]>(buf, "z r: z z")
         * const [propertyName, propertyValue] = rest[0]
         * ```
         */
        DeviceboundStr = 0x3,
    }

}
