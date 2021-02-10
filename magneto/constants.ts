namespace jacdac {
    // Service: Magnetometer
    export const SRV_MAGNETO = 0x13029088
    export const enum MagnetoReg {
        /**
         * Indicates the current magnetic field on magnetometer.
         * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
         *
         * ```
         * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i32 i32 i32")
         * ```
         */
        Forces = 0x101,

        /**
         * Error on the readings.
         *
         * ```
         * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i32 i32 i32")
         * ```
         */
        ForcesError = 0x106,
    }

    export const enum MagnetoCmd {
        /**
         * No args. Forces a calibration sequence where the user/device
         * might have to rotate to be calibrated.
         */
        Calibrate = 0x2,
    }

}
