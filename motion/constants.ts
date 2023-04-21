namespace jacdac {
    // Service Motion constants
    export const SRV_MOTION = 0x1179a749

    export const enum MotionVariant { // uint8_t
        //% block="pir"
        PIR = 0x1,
    }

    export const enum MotionReg {
        /**
         * Read-only bool (uint8_t). Reports is movement is currently detected by the sensor.
         *
         * ```
         * const [moving] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Moving = 0x101,

        /**
         * Constant m u16.16 (uint32_t). Maximum distance where objects can be detected.
         *
         * ```
         * const [maxDistance] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MaxDistance = 0x180,

        /**
         * Constant ° uint16_t. Opening of the field of view
         *
         * ```
         * const [angle] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Angle = 0x181,

        /**
         * Constant Variant (uint8_t). Type of physical sensor
         *
         * ```
         * const [variant] = jdunpack<[jacdac.MotionVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace MotionRegPack {
        /**
         * Pack format for 'moving' data.
         */
        export const Moving = "u8"

        /**
         * Pack format for 'max_distance' data.
         */
        export const MaxDistance = "u16.16"

        /**
         * Pack format for 'angle' data.
         */
        export const Angle = "u16"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }

    export const enum MotionEvent {
        /**
         * A movement was detected.
         */
        //% block="movement"
        Movement = 0x1,
    }
}
