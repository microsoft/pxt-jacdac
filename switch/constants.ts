namespace jacdac {
    // Service Switch constants
    export const SRV_SWITCH = 0x1ad29402

    export const enum SwitchVariant { // uint8_t
        //% block="slide"
        Slide = 0x1,
        //% block="tilt"
        Tilt = 0x2,
        //% block="push button"
        PushButton = 0x3,
        //% block="tactile"
        Tactile = 0x4,
        //% block="toggle"
        Toggle = 0x5,
        //% block="proximity"
        Proximity = 0x6,
        //% block="magnetic"
        Magnetic = 0x7,
        //% block="foot button"
        FootButton = 0x8,
    }

    export const enum SwitchReg {
        /**
         * Read-only bool (uint8_t). Indicates whether the switch is currently active (on).
         *
         * ```
         * const [active] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Active = 0x101,

        /**
         * Constant Variant (uint8_t). Describes the type of switch used.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.SwitchVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export namespace SwitchRegPack {
        /**
         * Pack format for 'active' data.
         */
        export const Active = "u8"

        /**
         * Pack format for 'variant' data.
         */
        export const Variant = "u8"
    }

    export const enum SwitchEvent {
        /**
         * Emitted when switch goes from `off` to `on`.
         */
        //% block="on"
        On = 0x1,

        /**
         * Emitted when switch goes from `on` to `off`.
         */
        //% block="off"
        Off = 0x2,
    }

}
