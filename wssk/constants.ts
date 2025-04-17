namespace jacdac {
    // Service WSSK constants
    export const SRV_WSSK = 0x13b739fe

    export const enum WsskStreamingType { // uint16_t
        //% block="jacdac"
        Jacdac = 0x1,
        //% block="dmesg"
        Dmesg = 0x2,
        //% block="exceptions"
        Exceptions = 0x100,
        //% block="temporary mask"
        TemporaryMask = 0xff,
        //% block="permament mask"
        PermamentMask = 0xff00,
        //% block="default mask"
        DefaultMask = 0x100,
    }

    export const enum WsskDataType { // uint8_t
        //% block="binary"
        Binary = 0x1,
        //% block="json"
        JSON = 0x2,
    }

    export const enum WsskCmd {
        /**
         * Argument: message string (bytes). Issued when a command fails.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Error = 0xff,

        /**
         * Argument: status StreamingType (uint16_t). Enable/disable forwarding of all Jacdac frames, exception reporting, and `dmesg` streaming.
         *
         * ```
         * const [status] = jdunpack<[jacdac.WsskStreamingType]>(buf, "u16")
         * ```
         */
        SetStreaming = 0x90,

        /**
         * Argument: payload bytes. Send from gateway when it wants to see if the device is alive.
         * The device currently only support 0-length payload.
         *
         * ```
         * const [payload] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        PingDevice = 0x91,

        /**
         * report PingDevice
         * ```
         * const [payload] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */

        /**
         * Argument: payload bytes. Send from device to gateway to test connection.
         *
         * ```
         * const [payload] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        PingCloud = 0x92,

        /**
         * report PingCloud
         * ```
         * const [payload] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */

        /**
         * No args. Get SHA256 of the currently deployed program.
         */
        GetHash = 0x93,

        /**
         * report GetHash
         * ```
         * const [sha256] = jdunpack<[Buffer]>(buf, "b[32]")
         * ```
         */

        /**
         * Argument: size B uint32_t. Start deployment of a new program.
         *
         * ```
         * const [size] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        DeployStart = 0x94,

        /**
         * Argument: payload bytes. Payload length must be multiple of 32 bytes.
         *
         * ```
         * const [payload] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        DeployWrite = 0x95,

        /**
         * No args. Finish deployment.
         */
        DeployFinish = 0x96,

        /**
         * Upload a labelled tuple of values to the cloud.
         * The tuple will be automatically tagged with timestamp and originating device.
         *
         * ```
         * const [datatype, topic, payload] = jdunpack<[jacdac.WsskDataType, string, Buffer]>(buf, "u8 z b")
         * ```
         */
        C2d = 0x97,

        /**
         * Upload a binary message to the cloud.
         *
         * ```
         * const [datatype, topic, payload] = jdunpack<[jacdac.WsskDataType, string, Buffer]>(buf, "u8 z b")
         * ```
         */
        D2c = 0x98,

        /**
         * Argument: frame bytes. Sent both ways.
         *
         * ```
         * const [frame] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        JacdacPacket = 0x99,

        /**
         * report JacdacPacket
         * ```
         * const [frame] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */

        /**
         * Argument: logs bytes. The `logs` field is string in UTF-8 encoding, however it can be split in the middle of UTF-8 code point.
         * Controlled via `dmesg_en`.
         *
         * ```
         * const [logs] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Dmesg = 0x9a,

        /**
         * Argument: logs bytes. The format is the same as `dmesg` but this is sent on exceptions only and is controlled separately via `exception_en`.
         *
         * ```
         * const [logs] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        ExceptionReport = 0x9b,
    }

    export namespace WsskCmdPack {
        /**
         * Pack format for 'error' data.
         */
        export const Error = "s"

        /**
         * Pack format for 'set_streaming' data.
         */
        export const SetStreaming = "u16"

        /**
         * Pack format for 'ping_device' data.
         */
        export const PingDevice = "b"

        /**
         * Pack format for 'ping_device' data.
         */
        export const PingDeviceReport = "b"

        /**
         * Pack format for 'ping_cloud' data.
         */
        export const PingCloud = "b"

        /**
         * Pack format for 'ping_cloud' data.
         */
        export const PingCloudReport = "b"

        /**
         * Pack format for 'get_hash' data.
         */
        export const GetHashReport = "b[32]"

        /**
         * Pack format for 'deploy_start' data.
         */
        export const DeployStart = "u32"

        /**
         * Pack format for 'deploy_write' data.
         */
        export const DeployWrite = "b"

        /**
         * Pack format for 'c2d' data.
         */
        export const C2d = "u8 z b"

        /**
         * Pack format for 'd2c' data.
         */
        export const D2c = "u8 z b"

        /**
         * Pack format for 'jacdac_packet' data.
         */
        export const JacdacPacket = "b"

        /**
         * Pack format for 'jacdac_packet' data.
         */
        export const JacdacPacketReport = "b"

        /**
         * Pack format for 'dmesg' data.
         */
        export const Dmesg = "b"

        /**
         * Pack format for 'exception_report' data.
         */
        export const ExceptionReport = "b"
    }
}
