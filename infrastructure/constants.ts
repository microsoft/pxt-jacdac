namespace jacdac {
    // Service: Infrastructure
    export const SRV_INFRASTRUCTURE = 0x1e1589eb

    export const enum InfrastructureVariant { // uint8_t
        Pipe = 0x1,
    }

    export const enum InfrastructureReg {
        /**
         * Constant Variant (uint8_t). Describes the type of infrastructure feature supported.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.InfrastructureVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
