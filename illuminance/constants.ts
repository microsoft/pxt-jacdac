namespace jacdac {
    // Service Illuminance constants
    export const SRV_ILLUMINANCE = 0x1e6ecaf2
    export const enum IlluminanceReg {
        /**
         * Read-only lux u22.10 (uint32_t). The amount of illuminance, as lumens per square metre.
         *
         * ```
         * const [illuminance] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        Illuminance = 0x101,

        /**
         * Read-only lux u22.10 (uint32_t). Error on the reported sensor value.
         *
         * ```
         * const [illuminanceError] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        IlluminanceError = 0x106,
    }

    export namespace IlluminanceRegPack {
        /**
         * Pack format for 'illuminance' register data.
         */
        export const Illuminance = "u22.10"

        /**
         * Pack format for 'illuminance_error' register data.
         */
        export const IlluminanceError = "u22.10"
    }
}
