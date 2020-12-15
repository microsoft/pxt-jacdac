namespace jacdac {
    // Service: Protocol Test
    export const SRV_PROTO_TEST = 0x16c7466a
    export const enum ProtoTestReg {
        /**
         * Read-write bool (uint8_t). A read write bool register.
         *
         * ```
         * const [rwBool] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        RwBool = 0x81,

        /**
         * Read-only bool (uint8_t). A read only bool register. Mirrors rw_bool.
         *
         * ```
         * const [roBool] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        RoBool = 0x181,

        /**
         * Read-write uint32_t. A read write u32 register.
         *
         * ```
         * const [rwU32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        RwU32 = 0x82,

        /**
         * Read-only uint32_t. A read only u32 register.. Mirrors rw_u32.
         *
         * ```
         * const [roU32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        RoU32 = 0x182,

        /**
         * Read-write int32_t. A read write i32 register.
         *
         * ```
         * const [rwI32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        RwI32 = 0x83,

        /**
         * Read-only int32_t. A read only i32 register.. Mirrors rw_i32.
         *
         * ```
         * const [roI32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        RoI32 = 0x183,

        /**
         * Read-write string (bytes). A read write string register.
         *
         * ```
         * const [rwString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        RwString = 0x84,

        /**
         * Read-only string (bytes). A read only string register. Mirrors rw_string.
         *
         * ```
         * const [roString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        RoString = 0x184,

        /**
         * Read-write bytes. A read write string register.
         *
         * ```
         * const [rwBytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        RwBytes = 0x85,

        /**
         * Read-only bytes. A read only string register. Mirrors ro_bytes.
         *
         * ```
         * const [roBytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        RoBytes = 0x185,
    }

    export const enum ProtoTestEvent {
        /**
         * Argument: bool bool (uint8_t). An event raised when rw_bool is modified
         *
         * ```
         * const [bool] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        EBool = 0x81,

        /**
         * Argument: u32 uint32_t. An event raised when rw_u32 is modified
         *
         * ```
         * const [u32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        EU32 = 0x82,

        /**
         * Argument: i32 int32_t. An event raised when rw_i32 is modified
         *
         * ```
         * const [i32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        EI32 = 0x83,

        /**
         * Argument: string string (bytes). An event raised when rw_string is modified
         *
         * ```
         * const [string] = jdunpack<[string]>(buf, "s")
         * ```
         */
        EString = 0x84,

        /**
         * Argument: bytes bytes. An event raised when rw_bytes is modified
         *
         * ```
         * const [bytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        EBytes = 0x85,
    }

    export const enum ProtoTestCmd {
        /**
         * Argument: bool bool (uint8_t). A command to set rw_bool. Returns the value.
         *
         * ```
         * const [bool] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        CBool = 0x81,

        /**
         * Argument: u32 uint32_t. A command to set rw_u32. Returns the value.
         *
         * ```
         * const [u32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        CU32 = 0x82,

        /**
         * Argument: i32 int32_t. A command to set rw_i32. Returns the value.
         *
         * ```
         * const [i32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        CI32 = 0x83,

        /**
         * Argument: string string (bytes). A command to set rw_string. Returns the value.
         *
         * ```
         * const [string] = jdunpack<[string]>(buf, "s")
         * ```
         */
        CString = 0x84,

        /**
         * Argument: bytes bytes. A command to set rw_bytes. Returns the value.
         *
         * ```
         * const [bytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        CBytes = 0x85,
    }

}
