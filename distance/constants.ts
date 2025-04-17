namespace jacdac {
    // Service Distance constants
    export const SRV_DISTANCE = 0x141a6b8a

    export const enum DistanceVariant { // uint8_t
        //% block="ultrasonic"
        Ultrasonic = 0x1,
        //% block="infrared"
        Infrared = 0x2,
        //% block="li dar"
        LiDAR = 0x3,
        //% block="laser"
        Laser = 0x4,
    }

    export const enum DistanceReg {
        /**
         * Read-only m u16.16 (uint32_t). Current distance from the object
         *
         * ```
         * const [distance] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        Distance = 0x101,

        /**
         * Read-only m u16.16 (uint32_t). Absolute error on the reading value.
         *
         * ```
         * const [distanceError] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        DistanceError = 0x106,

        /**
         * Constant m u16.16 (uint32_t). Minimum measurable distance
         *
         * ```
         * const [minRange] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MinRange = 0x104,

        /**
         * Constant m u16.16 (uint32_t). Maximum measurable distance
         *
         * ```
         * const [maxRange] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MaxRange = 0x105,

        /**
         * Constant Variant (uint8_t). Determines the type of sensor used.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.DistanceVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace DistanceRegPack {
        /**
         * Pack format for 'distance' data.
         */
        export const Distance = "u16.16"

        /**
         * Pack format for 'distance_error' data.
         */
        export const DistanceError = "u16.16"

        /**
         * Pack format for 'min_range' data.
         */
        export const MinRange = "u16.16"

        /**
         * Pack format for 'max_range' data.
         */
        export const MaxRange = "u16.16"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }
}
