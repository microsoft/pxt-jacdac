namespace jacdac {
    // Service: Vibration motor
    export const SRV_VIBRATION_MOTOR = 0x183fc4a2
    export const enum VibrationMotorReg {
        /**
         * Read-only ratio u0.8 (uint8_t). Rotation speed of the motor. If only one rotation speed is supported,
         * then `0` shell be off, and any other number on.
         * Use the ``vibrate`` command to control the register.
         *
         * ```
         * const [speed] = jdunpack<[number]>(buf, "u0.8")
         * ```
         */
        Speed = 0x101,

        /**
         * Read-write bool (uint8_t). Determines if the vibration motor responds to vibrate commands.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

    export const enum VibrationMotorCmd {
        /**
         * Starts a sequence of vibration and pauses.
         *
         * ```
         * const [rest] = jdunpack<[([number, number])[]]>(buf, "r: u8 u0.8")
         * const [duration, speed] = rest[0]
         * ```
         */
        Vibrate = 0x80,
    }

}
