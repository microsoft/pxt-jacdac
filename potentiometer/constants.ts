namespace jacdac {
    // Service: Potentiometer
    export const SRV_POTENTIOMETER = 0x1f274746

    export const enum PotentiometerVariant { // uint8_t
        Slider = 0x1,
        Rotary = 0x2,
    }

    export const enum PotentiometerReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The relative position of the slider between `0` and `1`.
         *
         * ```
         * const [position] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Position = 0x101,

        /**
         * Constant Variant (uint8_t). Specifies the physical layout of the potentiometer.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.PotentiometerVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
