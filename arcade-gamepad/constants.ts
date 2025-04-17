namespace jacdac {
    // Service Arcade Gamepad constants
    export const SRV_ARCADE_GAMEPAD = 0x1deaa06e

    export const enum ArcadeGamepadButton { // uint8_t
        //% block="left"
        Left = 0x1,
        //% block="up"
        Up = 0x2,
        //% block="right"
        Right = 0x3,
        //% block="down"
        Down = 0x4,
        //% block="a"
        A = 0x5,
        //% block="b"
        B = 0x6,
        //% block="menu"
        Menu = 0x7,
        //% block="select"
        Select = 0x8,
        //% block="reset"
        Reset = 0x9,
        //% block="exit"
        Exit = 0xa,
    }

    export const enum ArcadeGamepadReg {
        /**
         * Indicates which buttons are currently active (pressed).
         * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
         *
         * ```
         * const [rest] = jdunpack<[([jacdac.ArcadeGamepadButton, number])[]]>(buf, "r: u8 u0.8")
         * const [button, pressure] = rest[0]
         * ```
         */
        Buttons = 0x101,

        /**
         * Constant. Indicates number of players supported and which buttons are present on the controller.
         *
         * ```
         * const [button] = jdunpack<[jacdac.ArcadeGamepadButton[]]>(buf, "u8[]")
         * ```
         */
        AvailableButtons = 0x180,
    }

    export namespace ArcadeGamepadRegPack {
        /**
         * Pack format for 'buttons' data.
         */
        export const Buttons = "r: u8 u0.8"

        /**
         * Pack format for 'available_buttons' data.
         */
        export const AvailableButtons = "r: u8"
    }

    export const enum ArcadeGamepadEvent {
        /**
         * Argument: button Button (uint8_t). Emitted when button goes from inactive to active.
         *
         * ```
         * const [button] = jdunpack<[jacdac.ArcadeGamepadButton]>(buf, "u8")
         * ```
         */
        //% block="down"
        Down = 0x1,

        /**
         * Argument: button Button (uint8_t). Emitted when button goes from active to inactive.
         *
         * ```
         * const [button] = jdunpack<[jacdac.ArcadeGamepadButton]>(buf, "u8")
         * ```
         */
        //% block="up"
        Up = 0x2,
    }

    export namespace ArcadeGamepadEventPack {
        /**
         * Pack format for 'down' data.
         */
        export const Down = "u8"

        /**
         * Pack format for 'up' data.
         */
        export const Up = "u8"
    }

}
