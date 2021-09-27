namespace jacdac {
    // Service: Dimmer
    export const SRV_DIMMER = 0x1fb02645

    export const enum DimmerVariant { // uint8_t
        //% block="light"
        Light = 0x1,
        //% block="fan"
        Fan = 0x2,
        //% block="pump"
        Pump = 0x3,
    }

    export const enum DimmerReg {
        /**
         * Read-write ratio u0.16 (uint16_t). The intensity of the current. Set to ``0`` to turn off completely the current.
         *
         * ```
         * const [intensity] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Intensity = 0x1,

        /**
         * Constant Variant (uint8_t). The type of physical device
         *
         * ```
         * const [variant] = jdunpack<[jacdac.DimmerVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
