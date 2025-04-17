namespace jacdac {
    // Service Motor constants
    export const SRV_MOTOR = 0x17004cd8
    export const enum MotorReg {
        /**
         * Read-write ratio i1.15 (int16_t). Relative speed of the motor. Use positive/negative values to run the motor forwards and backwards.
         * Positive is recommended to be clockwise rotation and negative counterclockwise. A speed of ``0``
         * while ``enabled`` acts as brake.
         *
         * ```
         * const [speed] = jdunpack<[number]>(buf, "i1.15")
         * ```
         */
        Speed = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the motor on/off.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Constant kg/cm u16.16 (uint32_t). Torque required to produce the rated power of an electrical motor at load speed.
         *
         * ```
         * const [loadTorque] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        LoadTorque = 0x180,

        /**
         * Constant rpm u16.16 (uint32_t). Revolutions per minute of the motor under full load.
         *
         * ```
         * const [loadRotationSpeed] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        LoadRotationSpeed = 0x181,

        /**
         * Constant bool (uint8_t). Indicates if the motor can run backwards.
         *
         * ```
         * const [reversible] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Reversible = 0x182,
    }

    export namespace MotorRegPack {
        /**
         * Pack format for 'speed' data.
         */
        export const Speed = "i1.15"

        /**
         * Pack format for 'enabled' data.
         */
        export const Enabled = "u8"

        /**
         * Pack format for 'load_torque' data.
         */
        export const LoadTorque = "u16.16"

        /**
         * Pack format for 'load_rotation_speed' data.
         */
        export const LoadRotationSpeed = "u16.16"

        /**
         * Pack format for 'reversible' data.
         */
        export const Reversible = "u8"
    }

}
