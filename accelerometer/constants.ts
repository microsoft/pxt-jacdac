namespace jacdac {
    // Service: Accelerometer
    export const SRV_ACCELEROMETER = 0x1f140409
    export const SRV_ACCELEROMETER_FORCES_RO_PACK_FORMAT = "i6.10 i6.10 i6.10"
    export const enum AccelerometerReg {
        /**
         * Indicates the current forces acting on accelerometer.
         *
         * ```
         * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i6.10 i6.10 i6.10")
         * ```
         */
        Forces = 0x101,
    }

    export const enum AccelerometerEvent {
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        TiltUp = 0x1,

        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        TiltDown = 0x2,

        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        TiltLeft = 0x3,

        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        TiltRight = 0x4,

        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        FaceUp = 0x5,

        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        FaceDown = 0x6,

        /**
         * Emitted when total force acting on accelerometer is much less than 1g.
         */
        Freefall = 0x7,

        /**
         * Emitted when forces change violently a few times.
         */
        Shake = 0xb,

        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        Force_2g = 0xc,

        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        Force_3g = 0x8,

        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        Force_6g = 0x9,

        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        Force_8g = 0xa,
    }

}
