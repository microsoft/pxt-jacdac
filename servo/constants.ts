namespace jacdac {
    // Service: Servo
    export const SRV_SERVO = 0x12fc9103
    export const enum ServoReg {
        /**
         * Read-write μs uint32_t. Specifies length of the pulse in microseconds. The period is always 20ms.
         */
        Pulse = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the servo on/off.
         */
        Enabled = 0x1,
    }

}
