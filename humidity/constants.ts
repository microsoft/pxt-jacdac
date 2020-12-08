namespace jacdac {
    // Service: Humidity
    export const SRV_HUMIDITY = 0x16c810b8
    export const SRV_HUMIDITY_HUMIDITY_RO_PACK_FORMAT = "u22.10"
    export const enum HumidityReg {
        /**
         * Read-only %RH u22.10 (uint32_t). The relative humidity in percentage of full water saturation.
         */
        Humidity = 0x101,
    }

}
