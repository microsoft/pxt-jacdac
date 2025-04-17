namespace jacdac {
    // Service Planar position constants
    export const SRV_PLANAR_POSITION = 0x1dc37f55

    export const enum PlanarPositionVariant { // uint8_t
        //% block="optical mouse position"
        OpticalMousePosition = 0x1,
    }

    export const enum PlanarPositionReg {
        /**
         * The current position of the sensor.
         *
         * ```
         * const [x, y] = jdunpack<[number, number]>(buf, "i22.10 i22.10")
         * ```
         */
        Position = 0x101,

        /**
         * Constant Variant (uint8_t). Specifies the type of physical sensor.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.PlanarPositionVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace PlanarPositionRegPack {
        /**
         * Pack format for 'position' data.
         */
        export const Position = "i22.10 i22.10"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }
}
