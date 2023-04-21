namespace jacdac {
    // Service Equivalent CO₂ constants
    export const SRV_E_CO2 = 0x169c9dc6

    export const enum ECO2Variant { // uint8_t
        //% block="voc"
        VOC = 0x1,
        //% block="ndir"
        NDIR = 0x2,
    }

    export const enum ECO2Reg {
        /**
         * Read-only ppm u22.10 (uint32_t). Equivalent CO₂ (eCO₂) readings.
         *
         * ```
         * const [eCO2] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        ECO2 = 0x101,

        /**
         * Read-only ppm u22.10 (uint32_t). Error on the reading value.
         *
         * ```
         * const [eCO2Error] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        ECO2Error = 0x106,

        /**
         * Constant ppm u22.10 (uint32_t). Minimum measurable value
         *
         * ```
         * const [minECO2] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MinECO2 = 0x104,

        /**
         * Constant ppm u22.10 (uint32_t). Minimum measurable value
         *
         * ```
         * const [maxECO2] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MaxECO2 = 0x105,

        /**
         * Constant Variant (uint8_t). Type of physical sensor and capabilities.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.ECO2Variant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace ECO2RegPack {
        /**
         * Pack format for 'e_CO2' data.
         */
        export const ECO2 = "u22.10"

        /**
         * Pack format for 'e_CO2_error' data.
         */
        export const ECO2Error = "u22.10"

        /**
         * Pack format for 'min_e_CO2' data.
         */
        export const MinECO2 = "u22.10"

        /**
         * Pack format for 'max_e_CO2' data.
         */
        export const MaxECO2 = "u22.10"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }
}
