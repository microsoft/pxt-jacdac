namespace jacdac {
    // Service Servo constants
    export const SRV_SERVO = 0x12fc9103
    export const enum ServoReg {
        /**
         * Read-write ° i16.16 (int32_t). Specifies the angle of the arm (request).
         *
         * ```
         * const [angle] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        Angle = 0x2,

        /**
         * Read-write bool (uint8_t). Turn the power to the servo on/off.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Read-write ° i16.16 (int32_t). Correction applied to the angle to account for the servo arm drift.
         *
         * ```
         * const [offset] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        Offset = 0x81,

        /**
         * Constant ° i16.16 (int32_t). Lowest angle that can be set, typically 0 °.
         *
         * ```
         * const [minAngle] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        MinAngle = 0x110,

        /**
         * Read-write μs uint16_t. The length of pulse corresponding to lowest angle.
         *
         * ```
         * const [minPulse] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MinPulse = 0x83,

        /**
         * Constant ° i16.16 (int32_t). Highest angle that can be set, typically 180°.
         *
         * ```
         * const [maxAngle] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        MaxAngle = 0x111,

        /**
         * Read-write μs uint16_t. The length of pulse corresponding to highest angle.
         *
         * ```
         * const [maxPulse] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPulse = 0x85,

        /**
         * Constant kg/cm u16.16 (uint32_t). The servo motor will stop rotating when it is trying to move a `stall_torque` weight at a radial distance of `1.0` cm.
         *
         * ```
         * const [stallTorque] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        StallTorque = 0x180,

        /**
         * Constant s/60° u16.16 (uint32_t). Time to move 60°.
         *
         * ```
         * const [responseSpeed] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        ResponseSpeed = 0x181,

        /**
         * Read-only ° i16.16 (int32_t). The current physical position of the arm, if the device has a way to sense the position.
         *
         * ```
         * const [actualAngle] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        ActualAngle = 0x101,
    }

    export namespace ServoRegPack {
        /**
         * Pack format for 'angle' data.
         */
        export const Angle = "i16.16"

        /**
         * Pack format for 'enabled' data.
         */
        export const Enabled = "u8"

        /**
         * Pack format for 'offset' data.
         */
        export const Offset = "i16.16"

        /**
         * Pack format for 'min_angle' data.
         */
        export const MinAngle = "i16.16"

        /**
         * Pack format for 'min_pulse' data.
         */
        export const MinPulse = "u16"

        /**
         * Pack format for 'max_angle' data.
         */
        export const MaxAngle = "i16.16"

        /**
         * Pack format for 'max_pulse' data.
         */
        export const MaxPulse = "u16"

        /**
         * Pack format for 'stall_torque' data.
         */
        export const StallTorque = "u16.16"

        /**
         * Pack format for 'response_speed' data.
         */
        export const ResponseSpeed = "u16.16"

        /**
         * Pack format for 'actual_angle' data.
         */
        export const ActualAngle = "i16.16"
    }
}
