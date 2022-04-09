namespace jacdac {
    // Service Flex constants
    export const SRV_FLEX = 0x1f47c6c6
    export const enum FlexReg {
        /**
         * Read-only ratio i1.15 (int16_t). A measure of the bending.
         *
         * ```
         * const [bending] = jdunpack<[number]>(buf, "i1.15")
         * ```
         */
        Bending = 0x101,

        /**
         * Constant mm uint16_t. Length of the flex sensor
         *
         * ```
         * const [length] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Length = 0x180,
    }

    export const enum FlexRegPack {
        /**
         * Pack format for 'bending' register data.
         */
        Bending = "i1.15",

        /**
         * Pack format for 'length' register data.
         */
        Length = "u16",
    }
}
