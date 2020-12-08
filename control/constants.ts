namespace jacdac {
    // Service: Control
    export const SRV_CONTROL = 0x0

    export const enum ControlAnnounceFlags { // uint8_t
        SupportsACK = 0x1,
    }

    export const SRV_CONTROL_SERVICES_REPORT_PACK_FORMAT = "u8 u8 u16 r: u32"
    export const SRV_CONTROL_DEVICE_DESCRIPTION_CONST_PACK_FORMAT = "s"
    export const SRV_CONTROL_FIRMWARE_IDENTIFIER_CONST_PACK_FORMAT = "u32"
    export const SRV_CONTROL_BOOTLOADER_FIRMWARE_IDENTIFIER_CONST_PACK_FORMAT = "u32"
    export const SRV_CONTROL_FIRMWARE_VERSION_CONST_PACK_FORMAT = "s"
    export const SRV_CONTROL_MCU_TEMPERATURE_RO_PACK_FORMAT = "i16"
    export const SRV_CONTROL_UPTIME_RO_PACK_FORMAT = "u64"
    export const SRV_CONTROL_DEVICE_URL_CONST_PACK_FORMAT = "s"
    export const SRV_CONTROL_FIRMWARE_URL_CONST_PACK_FORMAT = "s"
    export const enum ControlCmd {
        /**
         * No args. The `restart_counter` starts at `0x1` and increments by one until it reaches `0xf`, then it stays at `0xf`.
         * If this number ever goes down, it indicates that the device restarted.
         * The upper 4 bits of `restart_counter` are reserved.
         * `service_class` indicates class identifier for each service index (service index `0` is always control, so it's
         * skipped in this enumeration).
         * The command form can be used to induce report, which is otherwise broadcast every 500ms.
         */
        Services = 0x0,

        /**
         * report Services
         * ```
         * const [restartCounter, flags, serviceClass] = jdunpack<[number, ControlAnnounceFlags, number[]]>(buf, "u8 u8 x[2] u32[]")
         * ```
         */

        /**
         * No args. Do nothing. Always ignored. Can be used to test ACKs.
         */
        Noop = 0x80,

        /**
         * No args. Blink an LED or otherwise draw user's attention.
         */
        Identify = 0x81,

        /**
         * No args. Reset device. ACK may or may not be sent.
         */
        Reset = 0x82,
    }

    export const enum ControlReg {
        /**
         * Constant string (bytes). Identifies the type of hardware (eg., ACME Corp. Servo X-42 Rev C)
         */
        DeviceDescription = 0x180,

        /**
         * Constant uint32_t. A numeric code for the string above; used to identify firmware images and devices.
         */
        FirmwareIdentifier = 0x181,

        /**
         * Constant uint32_t. Typically the same as `firmware_identifier` unless device was flashed by hand; the bootloader will respond to that code.
         */
        BootloaderFirmwareIdentifier = 0x184,

        /**
         * Constant string (bytes). A string describing firmware version; typically semver.
         */
        FirmwareVersion = 0x185,

        /**
         * Read-only °C int16_t. MCU temperature in degrees Celsius (approximate).
         */
        McuTemperature = 0x182,

        /**
         * Read-only μs uint64_t. Number of microseconds since boot.
         */
        Uptime = 0x186,

        /**
         * Constant string (bytes). Request the information web site for this device
         */
        DeviceUrl = 0x187,

        /**
         * Constant string (bytes). URL with machine-readable metadata information about updating device firmware
         */
        FirmwareUrl = 0x188,
    }

}
