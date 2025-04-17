namespace jacdac {
    // Service HID Mouse constants
    export const SRV_HID_MOUSE = 0x1885dc1c

    export const enum HidMouseButton { // uint16_t
        //% block="left"
        Left = 0x1,
        //% block="right"
        Right = 0x2,
        //% block="middle"
        Middle = 0x4,
    }


    export const enum HidMouseButtonEvent { // uint8_t
        //% block="up"
        Up = 0x1,
        //% block="down"
        Down = 0x2,
        //% block="click"
        Click = 0x3,
        //% block="double click"
        DoubleClick = 0x4,
    }

    export const enum HidMouseCmd {
        /**
         * Sets the up/down state of one or more buttons.
         * A `Click` is the same as `Down` followed by `Up` after 100ms.
         * A `DoubleClick` is two clicks with `150ms` gap between them (that is, `100ms` first click, `150ms` gap, `100ms` second click).
         *
         * ```
         * const [buttons, ev] = jdunpack<[jacdac.HidMouseButton, jacdac.HidMouseButtonEvent]>(buf, "u16 u8")
         * ```
         */
        SetButton = 0x80,

        /**
         * Moves the mouse by the distance specified.
         * If the time is positive, it specifies how long to make the move.
         *
         * ```
         * const [dx, dy, time] = jdunpack<[number, number, number]>(buf, "i16 i16 u16")
         * ```
         */
        Move = 0x81,

        /**
         * Turns the wheel up or down. Positive if scrolling up.
         * If the time is positive, it specifies how long to make the move.
         *
         * ```
         * const [dy, time] = jdunpack<[number, number]>(buf, "i16 u16")
         * ```
         */
        Wheel = 0x82,
    }

    export namespace HidMouseCmdPack {
        /**
         * Pack format for 'set_button' data.
         */
        export const SetButton = "u16 u8"

        /**
         * Pack format for 'move' data.
         */
        export const Move = "i16 i16 u16"

        /**
         * Pack format for 'wheel' data.
         */
        export const Wheel = "i16 u16"
    }

}
