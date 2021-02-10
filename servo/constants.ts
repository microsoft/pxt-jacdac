namespace jacdac {
    // Service: Servo
    export const SRV_SERVO = 0x12fc9103

    export const enum ServoVariant { // uint32_t
        PositionalRotation = 0x1,
        Linear = 0x2,
    }

    export const enum ServoReg {
        /**
         * Read-write ° i16.16 (int32_t). Specifies the angle of the arm.
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
         * Constant ° i16.16 (int32_t). Lowest angle that can be set.
         *
         * ```
         * const [minAngle] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        MinAngle = 0x104,

        /**
         * Constant ° i16.16 (int32_t). Highest angle that can be set.
         *
         * ```
         * const [maxAngle] = jdunpack<[number]>(buf, "i16.16")
         * ```
         */
        MaxAngle = 0x105,

        /**
         * Constant Variant (uint32_t). Specifies the type of servo motor.
         * * Positional Rotation Servos: Positional servos can rotate the shaft in about half of the circle,
         * with features to avoid over-rotating. Most servo have a range of 180° but some allow 270° or 360°.
         * * Linear Servos: linear servos are also like a positional servo, but with additional gears to the adjust the output from circular to back-and-forth.
         *
         * ```
         * const [variant] = jdunpack<[ServoVariant]>(buf, "u32")
         * ```
         */
        Variant = 0x107,

        /**
         * Constant kg/cm u16.16 (uint32_t). The servo motor will stop rotating when it is trying to move a ``stall_torque`` weight at a radial distance of ``1.0`` cm.
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
    }

}
