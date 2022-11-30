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

    export namespace VibrationMotorCmdPack {
        /**
         * Pack format for 'vibrate' register data.
         */
        export const Vibrate = "r: u8 u0.8"
    }

    export const enum VibrationMotorReg {
        /**
         * Constant uint8_t. The maximum number of vibration sequences supported in a single packet.
         *
         * ```
         * const [maxVibrations] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        MaxVibrations = 0x180,
    }

    export namespace VibrationMotorRegPack {
        /**
         * Pack format for 'max_vibrations' register data.
         */
        export const MaxVibrations = "u8"
    }
}
