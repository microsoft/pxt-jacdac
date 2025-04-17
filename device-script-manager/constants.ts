namespace jacdac {
    // Service DeviceScript Manager constants
    export const SRV_DEVICE_SCRIPT_MANAGER = 0x1134ea2b
    export const enum DeviceScriptManagerCmd {
        /**
         * Argument: bytecode_size B uint32_t. Open pipe for streaming in the bytecode of the program. The size of the bytecode has to be declared upfront.
         * To clear the program, use `bytecode_size == 0`.
         * The bytecode is streamed over regular pipe data packets.
         * The bytecode shall be fully written into flash upon closing the pipe.
         * If `autostart` is true, the program will start after being deployed.
         * The data payloads, including the last one, should have a size that is a multiple of 32 bytes.
         * Thus, the initial bytecode_size also needs to be a multiple of 32.
         *
         * ```
         * const [bytecodeSize] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        DeployBytecode = 0x80,

        /**
         * report DeployBytecode
         * ```
         * const [bytecodePort] = jdunpack<[number]>(buf, "u16")
         * ```
         */

        /**
         * Argument: bytecode pipe (bytes). Get the current bytecode deployed on device.
         *
         * ```
         * const [bytecode] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        ReadBytecode = 0x81,
    }

    export namespace DeviceScriptManagerCmdPack {
        /**
         * Pack format for 'deploy_bytecode' data.
         */
        export const DeployBytecode = "u32"

        /**
         * Pack format for 'deploy_bytecode' data.
         */
        export const DeployBytecodeReport = "u16"

        /**
         * Pack format for 'read_bytecode' data.
         */
        export const ReadBytecode = "b[12]"
    }

    export const enum DeviceScriptManagerPipe {}
    /**
     * pipe_report Bytecode
     * ```
     * const [data] = jdunpack<[Buffer]>(buf, "b")
     * ```
     */

    export namespace DeviceScriptManagerPipePack {
        /**
         * Pack format for 'bytecode' data.
         */
        export const Bytecode = "b"
    }

    export const enum DeviceScriptManagerReg {
        /**
         * Read-write bool (uint8_t). Indicates if the program is currently running.
         * To restart the program, stop it (write `0`), read back the register to make sure it's stopped,
         * start it, and read back.
         *
         * ```
         * const [running] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Running = 0x80,

        /**
         * Read-write bool (uint8_t). Indicates wheather the program should be re-started upon `reboot()` or `panic()`.
         * Defaults to `true`.
         *
         * ```
         * const [autostart] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Autostart = 0x81,

        /**
         * Read-only uint32_t. The size of current program.
         *
         * ```
         * const [programSize] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ProgramSize = 0x180,

        /**
         * Read-only uint32_t. Return FNV1A hash of the current bytecode.
         *
         * ```
         * const [programHash] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ProgramHash = 0x181,

        /**
         * Read-only bytes. Return 32-byte long SHA-256 hash of the current bytecode.
         *
         * ```
         * const [programSha256] = jdunpack<[Buffer]>(buf, "b[32]")
         * ```
         */
        ProgramSha256 = 0x182,

        /**
         * Returns the runtime version number compatible with [Semver](https://semver.org/).
         * When read as 32-bit little endian integer a version `7.15.500` would be `0x07_0F_01F4`.
         *
         * ```
         * const [patch, minor, major] = jdunpack<[number, number, number]>(buf, "u16 u8 u8")
         * ```
         */
        RuntimeVersion = 0x183,

        /**
         * Read-only string (bytes). The name of currently running program. The compiler takes is from `package.json`.
         *
         * ```
         * const [programName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ProgramName = 0x184,

        /**
         * Read-only string (bytes). The version number of currently running program. The compiler takes is from `package.json`
         * and `git`.
         *
         * ```
         * const [programVersion] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ProgramVersion = 0x185,
    }

    export namespace DeviceScriptManagerRegPack {
        /**
         * Pack format for 'running' data.
         */
        export const Running = "u8"

        /**
         * Pack format for 'autostart' data.
         */
        export const Autostart = "u8"

        /**
         * Pack format for 'program_size' data.
         */
        export const ProgramSize = "u32"

        /**
         * Pack format for 'program_hash' data.
         */
        export const ProgramHash = "u32"

        /**
         * Pack format for 'program_sha256' data.
         */
        export const ProgramSha256 = "b[32]"

        /**
         * Pack format for 'runtime_version' data.
         */
        export const RuntimeVersion = "u16 u8 u8"

        /**
         * Pack format for 'program_name' data.
         */
        export const ProgramName = "s"

        /**
         * Pack format for 'program_version' data.
         */
        export const ProgramVersion = "s"
    }

    export const enum DeviceScriptManagerEvent {
        /**
         * Emitted when the program calls `panic(panic_code)` or `reboot()` (`panic_code == 0` in that case).
         * The byte offset in byte code of the call is given in `program_counter`.
         * The program will restart immediately when `panic_code == 0` or in a few seconds otherwise.
         *
         * ```
         * const [panicCode, programCounter] = jdunpack<[number, number]>(buf, "u32 u32")
         * ```
         */
        //% block="program panic"
        ProgramPanic = 0x80,

        /**
         * Emitted after bytecode of the program has changed.
         */
        //% block="program change"
        ProgramChange = 0x3,
    }

    export namespace DeviceScriptManagerEventPack {
        /**
         * Pack format for 'program_panic' data.
         */
        export const ProgramPanic = "u32 u32"
    }
}
