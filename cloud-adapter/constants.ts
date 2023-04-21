namespace jacdac {
    // Service Cloud Adapter constants
    export const SRV_CLOUD_ADAPTER = 0x14606e9c
    export const enum CloudAdapterCmd {
        /**
         * Upload a JSON-encoded message to the cloud.
         *
         * ```
         * const [topic, json] = jdunpack<[string, string]>(buf, "z s")
         * ```
         */
        UploadJson = 0x80,

        /**
         * Upload a binary message to the cloud.
         *
         * ```
         * const [topic, payload] = jdunpack<[string, Buffer]>(buf, "z b")
         * ```
         */
        UploadBinary = 0x81,
    }

    export namespace CloudAdapterCmdPack {
        /**
         * Pack format for 'upload_json' data.
         */
        export const UploadJson = "z s"

        /**
         * Pack format for 'upload_binary' data.
         */
        export const UploadBinary = "z b"
    }

    export const enum CloudAdapterReg {
        /**
         * Read-only bool (uint8_t). Indicate whether we're currently connected to the cloud server.
         * When offline, `upload` commands are queued.
         *
         * ```
         * const [connected] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Connected = 0x180,

        /**
         * Read-only string (bytes). User-friendly name of the connection, typically includes name of the server
         * and/or type of cloud service (`"something.cloud.net (Provider IoT)"`).
         *
         * ```
         * const [connectionName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ConnectionName = 0x181,
    }

    export namespace CloudAdapterRegPack {
        /**
         * Pack format for 'connected' data.
         */
        export const Connected = "u8"

        /**
         * Pack format for 'connection_name' data.
         */
        export const ConnectionName = "s"
    }

    export const enum CloudAdapterEvent {
        /**
         * Emitted when cloud send us a JSON message.
         *
         * ```
         * const [topic, json] = jdunpack<[string, string]>(buf, "z s")
         * ```
         */
        //% block="on json"
        OnJson = 0x80,

        /**
         * Emitted when cloud send us a binary message.
         *
         * ```
         * const [topic, payload] = jdunpack<[string, Buffer]>(buf, "z b")
         * ```
         */
        //% block="on binary"
        OnBinary = 0x81,

        /**
         * Emitted when we connect or disconnect from the cloud.
         */
        //% block="change"
        Change = 0x3,
    }

    export namespace CloudAdapterEventPack {
        /**
         * Pack format for 'on_json' data.
         */
        export const OnJson = "z s"

        /**
         * Pack format for 'on_binary' data.
         */
        export const OnBinary = "z b"
    }
}
