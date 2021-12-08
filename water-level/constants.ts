namespace jacdac {
    // Service: Water level
    export const SRV_WATER_LEVEL = 0x147b62ed

    export const enum WaterLevelVariant { // uint8_t
        //% block="resistive"
        Resistive = 0x1,
        //% block="contact photo electric"
        ContactPhotoElectric = 0x2,
        //% block="non contact photo electric"
        NonContactPhotoElectric = 0x3,
    }

    export const enum WaterLevelReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The reported water level.
         *
         * ```
         * const [level] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Level = 0x101,

        /**
         * Read-only ratio u0.16 (uint16_t). The error rage on the current reading
         *
         * ```
         * const [levelError] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        LevelError = 0x106,

        /**
         * Constant Variant (uint8_t). The type of physical sensor.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.WaterLevelVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

}
