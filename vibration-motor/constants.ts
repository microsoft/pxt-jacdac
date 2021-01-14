namespace jacdac {
    // Service: Vibration motor
    export const SRV_VIBRATION_MOTOR = 0x183fc4a2
    export const enum VibrationMotorReg {
        /**
         * Read-write ratio uint8_t. Rotation speed of the motor.
         * If only one rotation speed is supported, then `0` shell be off, and any other number on.
         *
         * ```
         * const [speed] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Speed = 0x1,
    }

}
