namespace jacdac {
    // Service Base service constants
    export const enum BaseCmd {
        /**
         * This report may be emitted by a server in response to a command (action or register operation)
         * that it does not understand.
         * The `service_command` and `packet_crc` fields are copied from the command packet that was unhandled.
         * Note that it's possible to get an ACK, followed by such an error report.
         *
         * ```
         * const [serviceCommand, packetCrc] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        CommandNotImplemented = 0x3,
    }

    export namespace BaseCmdPack {
        /**
         * Pack format for 'command_not_implemented' data.
         */
        export const CommandNotImplemented = "u16 u16"
    }

    export const enum BaseReg {
        /**
         * Constant string (bytes). A friendly name that describes the role of this service instance in the device.
         * It often corresponds to what's printed on the device:
         * for example, `A` for button A, or `S0` for servo channel 0.
         * Words like `left` should be avoided because of localization issues (unless they are printed on the device).
         *
         * ```
         * const [instanceName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        InstanceName = 0x109,

        /**
         * Reports the current state or error status of the device. ``code`` is a standardized value from
         * the Jacdac status/error codes. ``vendor_code`` is any vendor specific error code describing the device
         * state. This report is typically not queried, when a device has an error, it will typically
         * add this report in frame along with the announce packet. If a service implements this register,
         * it should also support the ``status_code_changed`` event defined below.
         *
         * ```
         * const [code, vendorCode] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        StatusCode = 0x103,

        /**
         * Read-write string (bytes). An optional register in the format of a URL query string where the client can provide hints how
         * the device twin should be rendered. If the register is not implemented, the client library can simulate the register client side.
         *
         * ```
         * const [clientVariant] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ClientVariant = 0x9,
    }

    export namespace BaseRegPack {
        /**
         * Pack format for 'instance_name' data.
         */
        export const InstanceName = "s"

        /**
         * Pack format for 'status_code' data.
         */
        export const StatusCode = "u16 u16"

        /**
         * Pack format for 'client_variant' data.
         */
        export const ClientVariant = "s"
    }

    export const enum BaseEvent {
        /**
         * Notifies that the status code of the service changed.
         *
         * ```
         * const [code, vendorCode] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        //% block="status code changed"
        StatusCodeChanged = 0x4,
    }

    export namespace BaseEventPack {
        /**
         * Pack format for 'status_code_changed' data.
         */
        export const StatusCodeChanged = "u16 u16"
    }
}
