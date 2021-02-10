namespace jacdac {
    // Service: Equivalent CO₂
    export const SRV_E_CO2 = 0x169c9dc6

    export const enum ECO2Variant { // uint8_t
        VOC = 0x1,
        NDIR = 0x2,
    }

    export const enum ECO2Reg {
        /**
         * Read-only ppm u22.10 (uint32_t). Equivalent CO₂ (eCO₂) readings.
         *
         * ```
         * const [e_CO2] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        E_CO2 = 0x101,

        /**
         * Read-only ppm u22.10 (uint32_t). Error on the reading value.
         *
         * ```
         * const [e_CO2Error] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        E_CO2Error = 0x106,

        /**
         * Constant ppm u22.10 (uint32_t). Minimum measurable value
         *
         * ```
         * const [minE_CO2] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MinE_CO2 = 0x104,

        /**
         * Constant ppm u22.10 (uint32_t). Minimum measurable value
         *
         * ```
         * const [maxE_CO2] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MaxE_CO2 = 0x105,

        /**
         * Constant s uint32_t. Time required to achieve good sensor stability before measuring after long idle period.
         *
         * ```
         * const [conditioningPeriod] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ConditioningPeriod = 0x180,

        /**
         * Constant Variant (uint8_t). Type of physical sensor and capabilities.
         *
         * ```
         * const [variant] = jdunpack<[ECO2Variant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
