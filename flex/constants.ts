namespace jacdac {
    // Service: Flex
    export const SRV_FLEX = 0x1f47c6c6

    export const enum FlexVariant { // uint8_t
        //% block="linear22inch"
        Linear22Inch = 0x1,
        //% block="linear45inch"
        Linear45Inch = 0x2,
    }

    export const enum FlexReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The relative position of the slider.
         *
         * ```
         * const [bending] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Bending = 0x101,

        /**
         * Constant Variant (uint8_t). Specifies the physical layout of the flex sensor.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.FlexVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
