namespace jacdac {
    // Service DeviceScript Debugger constants
    export const SRV_DEVS_DBG = 0x155b5b40

    export const enum DevsDbgValueTag { // uint8_t
        //% block="number"
        Number = 0x1,
        //% block="special"
        Special = 0x2,
        //% block="fiber"
        Fiber = 0x3,
        //% block="builtin object"
        BuiltinObject = 0x5,
        //% block="exotic"
        Exotic = 0x6,
        //% block="unhandled"
        Unhandled = 0x7,
        //% block="img buffer"
        ImgBuffer = 0x20,
        //% block="img string builtin"
        ImgStringBuiltin = 0x21,
        //% block="img string ascii"
        ImgStringAscii = 0x22,
        //% block="img string utf8"
        ImgStringUTF8 = 0x23,
        //% block="img role"
        ImgRole = 0x30,
        //% block="img function"
        ImgFunction = 0x31,
        //% block="img role member"
        ImgRoleMember = 0x32,
        //% block="obj array"
        ObjArray = 0x51,
        //% block="obj map"
        ObjMap = 0x52,
        //% block="obj buffer"
        ObjBuffer = 0x53,
        //% block="obj string"
        ObjString = 0x54,
        //% block="obj stack frame"
        ObjStackFrame = 0x55,
        //% block="obj packet"
        ObjPacket = 0x56,
        //% block="obj bound function"
        ObjBoundFunction = 0x57,
        //% block="obj opaque"
        ObjOpaque = 0x58,
        //% block="obj any"
        ObjAny = 0x50,
        //% block="obj mask"
        ObjMask = 0xf0,
        //% block="user1"
        User1 = 0xf1,
        //% block="user2"
        User2 = 0xf2,
        //% block="user3"
        User3 = 0xf3,
        //% block="user4"
        User4 = 0xf4,
    }


    export const enum DevsDbgValueSpecial { // uint8_t
        //% block="undefined"
        Undefined = 0x0,
        //% block="true"
        True = 0x1,
        //% block="false"
        False = 0x2,
        //% block="null"
        Null = 0x3,
        //% block="globals"
        Globals = 0x64,
        //% block="current exception"
        CurrentException = 0x65,
    }


    export const enum DevsDbgFunIdx { // uint16_t
        //% block="none"
        None = 0x0,
        //% block="main"
        Main = 0xc34f,
        //% block="first built in"
        FirstBuiltIn = 0xc350,
    }


    export const enum DevsDbgFiberHandle { // uint32_t
        //% block="none"
        None = 0x0,
    }


    export const enum DevsDbgProgramCounter { // uint32_t
    }


    export const enum DevsDbgObjStackFrame { // uint32_t
        //% block="null"
        Null = 0x0,
    }


    export const enum DevsDbgString { // uint32_t
        //% block="static indicator mask"
        StaticIndicatorMask = 0x80000001,
        //% block="static tag mask"
        StaticTagMask = 0x7f000000,
        //% block="static index mask"
        StaticIndexMask = 0xfffffe,
        //% block="unhandled"
        Unhandled = 0x0,
    }


    export const enum DevsDbgStepFlags { // uint16_t
        //% block="step out"
        StepOut = 0x1,
        //% block="step in"
        StepIn = 0x2,
        //% block="throw"
        Throw = 0x4,
    }


    export const enum DevsDbgSuspensionType { // uint8_t
        //% block="none"
        None = 0x0,
        //% block="breakpoint"
        Breakpoint = 0x1,
        //% block="unhandled exception"
        UnhandledException = 0x2,
        //% block="handled exception"
        HandledException = 0x3,
        //% block="halt"
        Halt = 0x4,
        //% block="panic"
        Panic = 0x5,
        //% block="restart"
        Restart = 0x6,
        //% block="debugger stmt"
        DebuggerStmt = 0x7,
        //% block="step"
        Step = 0x8,
    }

    export const enum DevsDbgCmd {
        /**
         * Argument: results pipe (bytes). List the currently running fibers (threads).
         *
         * ```
         * const [results] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        ReadFibers = 0x80,

        /**
         * List stack frames in a fiber.
         *
         * ```
         * const [results, fiberHandle] = jdunpack<[Buffer, jacdac.DevsDbgFiberHandle]>(buf, "b[12] u32")
         * ```
         */
        ReadStack = 0x81,

        /**
         * Read variable slots in a stack frame, elements of an array, etc.
         *
         * ```
         * const [results, v0, tag, start, length] = jdunpack<[Buffer, number, jacdac.DevsDbgValueTag, number, number]>(buf, "b[12] u32 u8 x[1] u16 u16")
         * ```
         */
        ReadIndexedValues = 0x82,

        /**
         * Read variable slots in an object.
         *
         * ```
         * const [results, v0, tag] = jdunpack<[Buffer, number, jacdac.DevsDbgValueTag]>(buf, "b[12] u32 u8")
         * ```
         */
        ReadNamedValues = 0x83,

        /**
         * Read a specific value.
         *
         * ```
         * const [v0, tag] = jdunpack<[number, jacdac.DevsDbgValueTag]>(buf, "u32 u8")
         * ```
         */
        ReadValue = 0x84,

        /**
         * report ReadValue
         * ```
         * const [v0, v1, fnIdx, tag] = jdunpack<[number, number, jacdac.DevsDbgFunIdx, jacdac.DevsDbgValueTag]>(buf, "u32 u32 u16 u8")
         * ```
         */

        /**
         * Read bytes of a string (UTF8) or buffer value.
         *
         * ```
         * const [results, v0, tag, start, length] = jdunpack<[Buffer, number, jacdac.DevsDbgValueTag, number, number]>(buf, "b[12] u32 u8 x[1] u16 u16")
         * ```
         */
        ReadBytes = 0x85,

        /**
         * Set breakpoint(s) at a location(s).
         *
         * ```
         * const [breakPc] = jdunpack<[jacdac.DevsDbgProgramCounter[]]>(buf, "u32[]")
         * ```
         */
        SetBreakpoints = 0x90,

        /**
         * Clear breakpoint(s) at a location(s).
         *
         * ```
         * const [breakPc] = jdunpack<[jacdac.DevsDbgProgramCounter[]]>(buf, "u32[]")
         * ```
         */
        ClearBreakpoints = 0x91,

        /**
         * No args. Clear all breakpoints.
         */
        ClearAllBreakpoints = 0x92,

        /**
         * No args. Resume program execution after a breakpoint was hit.
         */
        Resume = 0x93,

        /**
         * No args. Try suspending current program. Client needs to wait for `suspended` event afterwards.
         */
        Halt = 0x94,

        /**
         * No args. Run the program from the beginning and halt on first instruction.
         */
        RestartAndHalt = 0x95,

        /**
         * Set breakpoints that only trigger in the specified stackframe and resume program.
         * The breakpoints are cleared automatically on next suspension (regardless of the reason).
         *
         * ```
         * const [stackframe, flags, breakPc] = jdunpack<[jacdac.DevsDbgObjStackFrame, jacdac.DevsDbgStepFlags, jacdac.DevsDbgProgramCounter[]]>(buf, "u32 u16 x[2] u32[]")
         * ```
         */
        Step = 0x96,
    }

    export namespace DevsDbgCmdPack {
        /**
         * Pack format for 'read_fibers' data.
         */
        export const ReadFibers = "b[12]"

        /**
         * Pack format for 'read_stack' data.
         */
        export const ReadStack = "b[12] u32"

        /**
         * Pack format for 'read_indexed_values' data.
         */
        export const ReadIndexedValues = "b[12] u32 u8 u8 u16 u16"

        /**
         * Pack format for 'read_named_values' data.
         */
        export const ReadNamedValues = "b[12] u32 u8"

        /**
         * Pack format for 'read_value' data.
         */
        export const ReadValue = "u32 u8"

        /**
         * Pack format for 'read_value' data.
         */
        export const ReadValueReport = "u32 u32 u16 u8"

        /**
         * Pack format for 'read_bytes' data.
         */
        export const ReadBytes = "b[12] u32 u8 u8 u16 u16"

        /**
         * Pack format for 'set_breakpoints' data.
         */
        export const SetBreakpoints = "r: u32"

        /**
         * Pack format for 'clear_breakpoints' data.
         */
        export const ClearBreakpoints = "r: u32"

        /**
         * Pack format for 'step' data.
         */
        export const Step = "u32 u16 u16 r: u32"
    }

    export const enum DevsDbgPipe {
        /**
         * pipe_report Fiber
         * ```
         * const [handle, initialFn, currFn] = jdunpack<[jacdac.DevsDbgFiberHandle, jacdac.DevsDbgFunIdx, jacdac.DevsDbgFunIdx]>(buf, "u32 u16 u16")
         * ```
         */

        /**
         * pipe_report Stackframe
         * ```
         * const [self, pc, closure, fnIdx] = jdunpack<[jacdac.DevsDbgObjStackFrame, jacdac.DevsDbgProgramCounter, jacdac.DevsDbgObjStackFrame, jacdac.DevsDbgFunIdx]>(buf, "u32 u32 u32 u16 x[2]")
         * ```
         */

        /**
         * pipe_report Value
         * ```
         * const [v0, v1, fnIdx, tag] = jdunpack<[number, number, jacdac.DevsDbgFunIdx, jacdac.DevsDbgValueTag]>(buf, "u32 u32 u16 u8")
         * ```
         */

        /**
         * pipe_report KeyValue
         * ```
         * const [key, v0, v1, fnIdx, tag] = jdunpack<[jacdac.DevsDbgString, number, number, jacdac.DevsDbgFunIdx, jacdac.DevsDbgValueTag]>(buf, "u32 u32 u32 u16 u8")
         * ```
         */

        /**
         * pipe_report BytesValue
         * ```
         * const [data] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
    }

    export namespace DevsDbgPipePack {
        /**
         * Pack format for 'fiber' data.
         */
        export const Fiber = "u32 u16 u16"

        /**
         * Pack format for 'stackframe' data.
         */
        export const Stackframe = "u32 u32 u32 u16 u16"

        /**
         * Pack format for 'value' data.
         */
        export const Value = "u32 u32 u16 u8"

        /**
         * Pack format for 'key_value' data.
         */
        export const KeyValue = "u32 u32 u32 u16 u8"

        /**
         * Pack format for 'bytes_value' data.
         */
        export const BytesValue = "b"
    }

    export const enum DevsDbgReg {
        /**
         * Read-write bool (uint8_t). Turn on/off the debugger interface.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Read-write bool (uint8_t). Wheather to place breakpoint at unhandled exception.
         *
         * ```
         * const [breakAtUnhandledExn] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        BreakAtUnhandledExn = 0x80,

        /**
         * Read-write bool (uint8_t). Wheather to place breakpoint at handled exception.
         *
         * ```
         * const [breakAtHandledExn] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        BreakAtHandledExn = 0x81,

        /**
         * Read-only bool (uint8_t). Indicates if the program is currently suspended.
         * Most commands can only be executed when the program is suspended.
         *
         * ```
         * const [isSuspended] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        IsSuspended = 0x180,
    }

    export namespace DevsDbgRegPack {
        /**
         * Pack format for 'enabled' data.
         */
        export const Enabled = "u8"

        /**
         * Pack format for 'break_at_unhandled_exn' data.
         */
        export const BreakAtUnhandledExn = "u8"

        /**
         * Pack format for 'break_at_handled_exn' data.
         */
        export const BreakAtHandledExn = "u8"

        /**
         * Pack format for 'is_suspended' data.
         */
        export const IsSuspended = "u8"
    }

    export const enum DevsDbgEvent {
        /**
         * Emitted when the program hits a breakpoint or similar event in the specified fiber.
         *
         * ```
         * const [fiber, type] = jdunpack<[jacdac.DevsDbgFiberHandle, jacdac.DevsDbgSuspensionType]>(buf, "u32 u8")
         * ```
         */
        //% block="suspended"
        Suspended = 0x80,
    }

    export namespace DevsDbgEventPack {
        /**
         * Pack format for 'suspended' data.
         */
        export const Suspended = "u32 u8"
    }

}
