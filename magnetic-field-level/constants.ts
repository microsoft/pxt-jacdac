namespace jacdac {
    // Service Magnetic field level constants
    export const SRV_MAGNETIC_FIELD_LEVEL = 0x12fe180f

    export const enum MagneticFieldLevelVariant { // uint8_t
        //% block="analog ns"
        AnalogNS = 0x1,
        //% block="analog n"
        AnalogN = 0x2,
        //% block="analog s"
        AnalogS = 0x3,
        //% block="digital ns"
        DigitalNS = 0x4,
        //% block="digital n"
        DigitalN = 0x5,
        //% block="digital s"
        DigitalS = 0x6,
    }

    export const enum MagneticFieldLevelReg {
        /**
         * Read-only ratio i1.15 (int16_t). Indicates the strength of magnetic field between -1 and 1.
         * When no magnet is present the value should be around 0.
         * For analog sensors,
         * when the north pole of the magnet is on top of the module
         * and closer than south pole, then the value should be positive.
         * For digital sensors,
         * the value should either `0` or `1`, regardless of polarity.
         *
         * ```
         * const [strength] = jdunpack<[number]>(buf, "i1.15")
         * ```
         */
        Strength = 0x101,

        /**
         * Read-only bool (uint8_t). Determines if the magnetic field is present.
         * If the event `active` is observed, `detected` is true; if `inactive` is observed, `detected` is false.
         */
        Detected = 0x181,

        /**
         * Constant Variant (uint8_t). Determines which magnetic poles the sensor can detected,
         * and whether or not it can measure their strength or just presence.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.MagneticFieldLevelVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace MagneticFieldLevelRegPack {
        /**
         * Pack format for 'strength' data.
         */
        export const Strength = "i1.15"

        /**
         * Pack format for 'detected' data.
         */
        export const Detected = "u8"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }

    export const enum MagneticFieldLevelEvent {
        /**
         * Emitted when strong-enough magnetic field is detected.
         */
        //% block="active"
        Active = 0x1,

        /**
         * Emitted when strong-enough magnetic field is no longer detected.
         */
        //% block="inactive"
        Inactive = 0x2,
    }

}
