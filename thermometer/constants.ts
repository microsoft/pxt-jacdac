namespace jacdac {
    // Service: Thermometer
    export const SRV_THERMOMETER = 0x1421bac7
    export const SRV_THERMOMETER_TEMPERATURE_RO_PACK_FORMAT = "u22.10"
    export const enum ThermometerReg {
        /**
         * Read-only °C u22.10 (uint32_t). The temperature.
         */
        Temperature = 0x101,
    }

}
