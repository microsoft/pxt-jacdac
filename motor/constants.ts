namespace jacdac {
    // Service: Motor
    export const SRV_MOTOR = 0x17004cd8
    export const SRV_MOTOR_DUTY_RW_PACK_FORMAT = "i16"
    export const SRV_MOTOR_ENABLED_RW_PACK_FORMAT = "u8"
    export const enum MotorReg {
        /**
         * Read-write ratio int16_t. PWM duty cycle of the motor. Use negative/positive values to run the motor forwards and backwards.
         * Positive is recommended to be clockwise rotation and negative counterclockwise.
         */
        Duty = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the motor on/off.
         */
        Enabled = 0x1,
    }

}
