namespace jacdac {
    // Service Soil moisture constants
    export const SRV_SOIL_MOISTURE = 0x1d4aa3b3

    export const enum SoilMoistureVariant { // uint8_t
        //% block="resistive"
        Resistive = 0x1,
        //% block="capacitive"
        Capacitive = 0x2,
    }

    export const enum SoilMoistureReg {
        /**
         * Read-only ratio u0.16 (uint16_t). Indicates the wetness of the soil, from `dry` to `wet`.
         *
         * ```
         * const [moisture] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Moisture = 0x101,

        /**
         * Read-only ratio u0.16 (uint16_t). The error on the moisture reading.
         *
         * ```
         * const [moistureError] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        MoistureError = 0x106,

        /**
         * Constant Variant (uint8_t). Describe the type of physical sensor.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.SoilMoistureVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace SoilMoistureRegPack {
        /**
         * Pack format for 'moisture' data.
         */
        export const Moisture = "u0.16"

        /**
         * Pack format for 'moisture_error' data.
         */
        export const MoistureError = "u0.16"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }
}
