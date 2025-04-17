namespace jacdac {
    // Service Total Volatile organic compound constants
    export const SRV_TVOC = 0x12a5b597
    export const enum TvocReg {
        /**
         * Read-only ppb u22.10 (uint32_t). Total volatile organic compound readings in parts per billion.
         *
         * ```
         * const [tVOC] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        TVOC = 0x101,

        /**
         * Read-only ppb u22.10 (uint32_t). Error on the reading data
         *
         * ```
         * const [tVOCError] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        TVOCError = 0x106,

        /**
         * Constant ppb u22.10 (uint32_t). Minimum measurable value
         *
         * ```
         * const [minTVOC] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MinTVOC = 0x104,

        /**
         * Constant ppb u22.10 (uint32_t). Minimum measurable value.
         *
         * ```
         * const [maxTVOC] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        MaxTVOC = 0x105,
    }

    export namespace TvocRegPack {
        /**
         * Pack format for 'TVOC' data.
         */
        export const TVOC = "u22.10"

        /**
         * Pack format for 'TVOC_error' data.
         */
        export const TVOCError = "u22.10"

        /**
         * Pack format for 'min_TVOC' data.
         */
        export const MinTVOC = "u22.10"

        /**
         * Pack format for 'max_TVOC' data.
         */
        export const MaxTVOC = "u22.10"
    }

}
