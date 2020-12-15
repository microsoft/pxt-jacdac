namespace jacdac {
    // Service: Thermometer
    export const SRV_THERMOMETER = 0x1421bac7
    export const enum ThermometerReg {
        /**
         * Read-only °C u22.10 (uint32_t). The temperature.
         *
         * ```
         * const [temperature] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        Temperature = 0x101,
    }

}
