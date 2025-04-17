namespace jacdac {
    // Service Dual Motors constants
    export const SRV_DUAL_MOTORS = 0x1529d537
    export const enum DualMotorsReg {
        /**
         * Relative speed of the motors. Use positive/negative values to run the motor forwards and backwards.
         * A speed of ``0`` while ``enabled`` acts as brake.
         *
         * ```
         * const [left, right] = jdunpack<[number, number]>(buf, "i1.15 i1.15")
         * ```
         */
        Speed = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the motors on/off.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Constant kg/cm u16.16 (uint32_t). Torque required to produce the rated power of an each electrical motor at load speed.
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
         * Constant bool (uint8_t). Indicates if the motors can run backwards.
         *
         * ```
         * const [reversible] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Reversible = 0x182,
    }

    export namespace DualMotorsRegPack {
        /**
         * Pack format for 'speed' data.
         */
        export const Speed = "i1.15 i1.15"

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
