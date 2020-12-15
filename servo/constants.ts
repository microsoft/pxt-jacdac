namespace jacdac {
    // Service: Servo
    export const SRV_SERVO = 0x12fc9103
    export const enum ServoReg {
        /**
         * Read-write μs uint32_t. Specifies length of the pulse in microseconds. The period is always 20ms.
         *
         * ```
         * const [pulse] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        Pulse = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the servo on/off.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

}
