namespace jacdac {
    // Service: Motor
    export const SRV_MOTOR = 0x17004cd8
    export const enum MotorReg {
        /**
         * Read-write ratio int16_t. PWM duty cycle of the motor. Use negative/positive values to run the motor forwards and backwards.
         * Positive is recommended to be clockwise rotation and negative counterclockwise.
         *
         * ```
         * const [duty] = jdunpack<[number]>(buf, "i16")
         * ```
         */
        Duty = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the motor on/off.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

}
