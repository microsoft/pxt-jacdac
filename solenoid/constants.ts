namespace jacdac {
    // Service Solenoid constants
    export const SRV_SOLENOID = 0x171723ca

    export const enum SolenoidVariant { // uint8_t
        //% block="push pull"
        PushPull = 0x1,
        //% block="valve"
        Valve = 0x2,
        //% block="latch"
        Latch = 0x3,
    }

    export const enum SolenoidReg {
        /**
         * Read-write bool (uint8_t). Indicates whether the solenoid is energized and pulled (on) or pushed (off).
         *
         * ```
         * const [pulled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Pulled = 0x1,

        /**
         * Constant Variant (uint8_t). Describes the type of solenoid used.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.SolenoidVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }
}
