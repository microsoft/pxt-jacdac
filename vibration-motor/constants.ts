namespace jacdac {
    // Service Vibration motor constants
    export const SRV_VIBRATION_MOTOR = 0x183fc4a2
    export const enum VibrationMotorCmd {
        /**
         * Starts a sequence of vibration and pauses. To stop any existing vibration, send an empty payload.
         *
         * ```
         * const [rest] = jdunpack<[([number, number])[]]>(buf, "r: u8 u0.8")
         * const [duration, intensity] = rest[0]
         * ```
         */
        Vibrate = 0x80,
    }

    export const enum VibrationMotorCmdPack {
        /**
         * Pack format for 'vibrate' register data.
         */
        Vibrate = "r: u8 u0.8",
    }
}
