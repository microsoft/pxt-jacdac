namespace jacdac {
    // Service Control constants
    export const SRV_CONTROL = 0x0

    export const enum ControlAnnounceFlags { // uint16_t
        //% block="restart counter steady"
        RestartCounterSteady = 0xf,
        //% block="restart counter1"
        RestartCounter1 = 0x1,
        //% block="restart counter2"
        RestartCounter2 = 0x2,
        //% block="restart counter4"
        RestartCounter4 = 0x4,
        //% block="restart counter8"
        RestartCounter8 = 0x8,
        //% block="status light none"
        StatusLightNone = 0x0,
        //% block="status light mono"
        StatusLightMono = 0x10,
        //% block="status light rgb no fade"
        StatusLightRgbNoFade = 0x20,
        //% block="status light rgb fade"
        StatusLightRgbFade = 0x30,
        //% block="supports ack"
        SupportsACK = 0x100,
        //% block="supports broadcast"
        SupportsBroadcast = 0x200,
        //% block="supports frames"
        SupportsFrames = 0x400,
        //% block="is client"
        IsClient = 0x800,
        //% block="supports reliable commands"
        SupportsReliableCommands = 0x1000,
    }

    export const enum ControlCmd {
        /**
         * No args. The `restart_counter` is computed from the `flags & RestartCounterSteady`, starts at `0x1` and increments by one until it reaches `0xf`, then it stays at `0xf`.
         * If this number ever goes down, it indicates that the device restarted.
         * `service_class` indicates class identifier for each service index (service index `0` is always control, so it's
         * skipped in this enumeration).
         * `packet_count` indicates the number of reports sent by the current device since last announce,
         * including the current announce packet (it is always 0 if this feature is not supported).
         * The command form can be used to induce report, which is otherwise broadcast every 500ms.
         */
        Services = 0x0,

        /**
         * report Services
         * ```
         * const [flags, packetCount, serviceClass] = jdunpack<[jacdac.ControlAnnounceFlags, number, number[]]>(buf, "u16 u8 x[1] u32[]")
         * ```
         */

        /**
         * No args. Do nothing. Always ignored. Can be used to test ACKs.
         */
        Noop = 0x80,

        /**
         * No args. Blink the status LED (262ms on, 262ms off, four times, with the blue LED) or otherwise draw user's attention to device with no status light.
         * For devices with status light (this can be discovered in the announce flags), the client should
         * send the sequence of status light command to generate the identify animation.
         */
        Identify = 0x81,

        /**
         * No args. Reset device. ACK may or may not be sent.
         */
        Reset = 0x82,

        /**
         * The device will respond `num_responses` times, as fast as it can, setting the `counter` field in the report
         * to `start_counter`, then `start_counter + 1`, ..., and finally `start_counter + num_responses - 1`.
         * The `dummy_payload` is `size` bytes long and contains bytes `0, 1, 2, ...`.
         *
         * ```
         * const [numResponses, startCounter, size] = jdunpack<[number, number, number]>(buf, "u32 u32 u8")
         * ```
         */
        FloodPing = 0x83,

        /**
         * report FloodPing
         * ```
         * const [counter, dummyPayload] = jdunpack<[number, Buffer]>(buf, "u32 b")
         * ```
         */

        /**
         * Initiates a color transition of the status light from its current color to the one specified.
         * The transition will complete in about `512 / speed` frames
         * (each frame is currently 100ms, so speed of `51` is about 1 second and `26` 0.5 second).
         * As a special case, if speed is `0` the transition is immediate.
         * If MCU is not capable of executing transitions, it can consider `speed` to be always `0`.
         * If a monochrome LEDs is fitted, the average value of `red`, `green`, `blue` is used.
         * If intensity of a monochrome LED cannot be controlled, any value larger than `0` should be considered
         * on, and `0` (for all three channels) should be considered off.
         *
         * ```
         * const [toRed, toGreen, toBlue, speed] = jdunpack<[number, number, number, number]>(buf, "u8 u8 u8 u8")
         * ```
         */
        SetStatusLight = 0x84,

        /**
         * No args. Force client device into proxy mode.
         */
        Proxy = 0x85,

        /**
         * Argument: seed uint32_t. This opens a pipe to the device to provide an alternative, reliable transport of actions
         * (and possibly other commands).
         * The commands are wrapped as pipe data packets.
         * Multiple invocations of this command with the same `seed` are dropped
         * (and thus the command is not `unique`); otherwise `seed` carries no meaning
         * and should be set to a random value by the client.
         * Note that while the commands sends this way are delivered exactly once, the
         * responses might get lost.
         *
         * ```
         * const [seed] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ReliableCommands = 0x86,

        /**
         * report ReliableCommands
         * ```
         * const [commands] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */

        /**
         * Argument: duration ms uint32_t. Attempt to put devices into lowest power sleep mode for a specified time - most likely involving a full reset on wake-up.
         *
         * ```
         * const [duration] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        Standby = 0x87,
    }

    export namespace ControlCmdPack {
        /**
         * Pack format for 'services' data.
         */
        export const ServicesReport = "u16 u8 u8 r: u32"

        /**
         * Pack format for 'flood_ping' data.
         */
        export const FloodPing = "u32 u32 u8"

        /**
         * Pack format for 'flood_ping' data.
         */
        export const FloodPingReport = "u32 b"

        /**
         * Pack format for 'set_status_light' data.
         */
        export const SetStatusLight = "u8 u8 u8 u8"

        /**
         * Pack format for 'reliable_commands' data.
         */
        export const ReliableCommands = "u32"

        /**
         * Pack format for 'reliable_commands' data.
         */
        export const ReliableCommandsReport = "b[12]"

        /**
         * Pack format for 'standby' data.
         */
        export const Standby = "u32"
    }

    export const enum ControlPipe {}
    /**
     * pipe_command WrappedCommand
     * ```
     * const [serviceSize, serviceIndex, serviceCommand, payload] = jdunpack<[number, number, number, Buffer]>(buf, "u8 u8 u16 b")
     * ```
     */

    export namespace ControlPipePack {
        /**
         * Pack format for 'wrapped_command' data.
         */
        export const WrappedCommand = "u8 u8 u16 b"
    }

    export const enum ControlReg {
        /**
         * Read-write μs uint32_t. When set to value other than `0`, it asks the device to reset after specified number of microseconds.
         * This is typically used to implement watchdog functionality, where a brain device sets `reset_in` to
         * say 1.6s every 0.5s.
         *
         * ```
         * const [resetIn] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ResetIn = 0x80,

        /**
         * Constant string (bytes). Identifies the type of hardware (eg., ACME Corp. Servo X-42 Rev C)
         *
         * ```
         * const [deviceDescription] = jdunpack<[string]>(buf, "s")
         * ```
         */
        DeviceDescription = 0x180,

        /**
         * Constant uint32_t. A numeric code for the string above; used to identify firmware images and devices.
         *
         * ```
         * const [productIdentifier] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ProductIdentifier = 0x181,

        /**
         * Constant uint32_t. Typically the same as `product_identifier` unless device was flashed by hand; the bootloader will respond to that code.
         *
         * ```
         * const [bootloaderProductIdentifier] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        BootloaderProductIdentifier = 0x184,

        /**
         * Constant string (bytes). A string describing firmware version; typically semver.
         *
         * ```
         * const [firmwareVersion] = jdunpack<[string]>(buf, "s")
         * ```
         */
        FirmwareVersion = 0x185,

        /**
         * Read-only °C int16_t. MCU temperature in degrees Celsius (approximate).
         *
         * ```
         * const [mcuTemperature] = jdunpack<[number]>(buf, "i16")
         * ```
         */
        McuTemperature = 0x182,

        /**
         * Read-only μs uint64_t. Number of microseconds since boot.
         *
         * ```
         * const [uptime] = jdunpack<[number]>(buf, "u64")
         * ```
         */
        Uptime = 0x186,
    }

    export namespace ControlRegPack {
        /**
         * Pack format for 'reset_in' data.
         */
        export const ResetIn = "u32"

        /**
         * Pack format for 'device_description' data.
         */
        export const DeviceDescription = "s"

        /**
         * Pack format for 'product_identifier' data.
         */
        export const ProductIdentifier = "u32"

        /**
         * Pack format for 'bootloader_product_identifier' data.
         */
        export const BootloaderProductIdentifier = "u32"

        /**
         * Pack format for 'firmware_version' data.
         */
        export const FirmwareVersion = "s"

        /**
         * Pack format for 'mcu_temperature' data.
         */
        export const McuTemperature = "i16"

        /**
         * Pack format for 'uptime' data.
         */
        export const Uptime = "u64"
    }
}
