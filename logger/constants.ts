namespace jacdac {
    // Service Logger constants
    export const SRV_LOGGER = 0x12dc1fca

    export const enum LoggerPriority { // uint8_t
        //% block="debug"
        Debug = 0x0,
        //% block="log"
        Log = 0x1,
        //% block="warning"
        Warning = 0x2,
        //% block="error"
        Error = 0x3,
        //% block="silent"
        Silent = 0x4,
    }

    export const enum LoggerReg {
        /**
         * Read-write Priority (uint8_t). Messages with level lower than this won't be emitted. The default setting may vary.
         * Loggers should revert this to their default setting if the register has not been
         * updated in 3000ms, and also keep the lowest setting they have seen in the last 1500ms.
         * Thus, clients should write this register every 1000ms and ignore messages which are
         * too verbose for them.
         *
         * ```
         * const [minPriority] = jdunpack<[jacdac.LoggerPriority]>(buf, "u8")
         * ```
         */
        MinPriority = 0x80,
    }

    export namespace LoggerRegPack {
        /**
         * Pack format for 'min_priority' data.
         */
        export const MinPriority = "u8"
    }

    export const enum LoggerCmd {
        /**
         * Argument: message string (bytes). Report a message.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Debug = 0x80,

        /**
         * Argument: message string (bytes). Report a message.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Log = 0x81,

        /**
         * Argument: message string (bytes). Report a message.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Warn = 0x82,

        /**
         * Argument: message string (bytes). Report a message.
         *
         * ```
         * const [message] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Error = 0x83,
    }

    export namespace LoggerCmdPack {
        /**
         * Pack format for 'debug' data.
         */
        export const Debug = "s"

        /**
         * Pack format for 'log' data.
         */
        export const Log = "s"

        /**
         * Pack format for 'warn' data.
         */
        export const Warn = "s"

        /**
         * Pack format for 'error' data.
         */
        export const Error = "s"
    }
}
