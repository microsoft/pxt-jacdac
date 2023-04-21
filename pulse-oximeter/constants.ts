namespace jacdac {
    // Service Pulse Oximeter constants
    export const SRV_PULSE_OXIMETER = 0x10bb4eb6
    export const enum PulseOximeterReg {
        /**
         * Read-only % u8.8 (uint16_t). The estimated oxygen level in blood.
         *
         * ```
         * const [oxygen] = jdunpack<[number]>(buf, "u8.8")
         * ```
         */
        Oxygen = 0x101,

        /**
         * Read-only % u8.8 (uint16_t). The estimated error on the reported sensor data.
         *
         * ```
         * const [oxygenError] = jdunpack<[number]>(buf, "u8.8")
         * ```
         */
        OxygenError = 0x106,
    }

    export namespace PulseOximeterRegPack {
        /**
         * Pack format for 'oxygen' data.
         */
        export const Oxygen = "u8.8"

        /**
         * Pack format for 'oxygen_error' data.
         */
        export const OxygenError = "u8.8"
    }
}
