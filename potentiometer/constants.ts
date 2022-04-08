namespace jacdac {
    // Service Potentiometer constants
    export const SRV_POTENTIOMETER = 0x1f274746

    export const enum PotentiometerVariant { // uint8_t
        //% block="slider"
        Slider = 0x1,
        //% block="rotary"
        Rotary = 0x2,
    }

    export const enum PotentiometerReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The relative position of the slider.
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
