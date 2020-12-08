namespace jacdac {
    // Service: Protocol Test
    export const SRV_PROTOCOL_TEST = 0x16c7466a
    export const enum ProtoTestReg {
        /**
         * Read-write bool (uint8_t). A read write bool register.
         */
        RwBool = 0x181,

        /**
         * Read-only bool (uint8_t). A read only bool register. Mirrors rw_bool.
         */
        RoBool = 0x182,

        /**
         * Read-write uint32_t. A read write u32 register.
         */
        RwU32 = 0x190,

        /**
         * Read-only uint32_t. A read only u32 register.. Mirrors rw_u32.
         */
        RoU32 = 0x191,

        /**
         * Read-write int32_t. A read write i32 register.
         */
        RwI32 = 0x192,

        /**
         * Read-only int32_t. A read only i32 register.. Mirrors rw_i32.
         */
        RoI32 = 0x193,

        /**
         * Read-write string (bytes). A read write string register.
         */
        RwString = 0x1a0,

        /**
         * Read-only string (bytes). A read only string register. Mirrors rw_string.
         */
        RoString = 0x1a1,

        /**
         * Read-write bytes. A read write string register.
         */
        RwBytes = 0x1b0,

        /**
         * Read-only bytes. A read only string register. Mirrors ro_bytes.
         */
        RoBytes = 0x1b1,
    }

    export const enum ProtoTestEvent {
        /**
         * Argument: bool bool (uint8_t). An event raised when rw_bool is modified
         */
        EBool = 0x180,

        /**
         * Argument: u32 uint32_t. An event raised when rw_u32 is modified
         */
        EU32 = 0x190,

        /**
         * Argument: i32 int32_t. An event raised when rw_i32 is modified
         */
        EI32 = 0x192,
    }

    export const enum ProtoTestCmd {
        /**
         * Argument: bool bool (uint8_t). A command to set rw_bool. Returns the value.
         */
        CBool = 0x80,

        /**
         * Argument: u32 uint32_t. A command to set rw_u32. Returns the value.
         */
        CU32 = 0x81,

        /**
         * Argument: i32 int32_t. A command to set rw_i32. Returns the value.
         */
        CI32 = 0x82,
    }

}
