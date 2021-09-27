namespace jacdac {
    // Service: Joystick
    export const SRV_JOYSTICK = 0x108f7456

    export const enum JoystickButtons { // uint32_t
        //% block="left"
        Left = 0x1,
        //% block="up"
        Up = 0x2,
        //% block="right"
        Right = 0x4,
        //% block="down"
        Down = 0x8,
        //% block="a"
        A = 0x10,
        //% block="b"
        B = 0x20,
        //% block="menu"
        Menu = 0x40,
        //% block="select"
        Select = 0x80,
        //% block="reset"
        Reset = 0x100,
        //% block="exit"
        Exit = 0x200,
        //% block="x"
        X = 0x400,
        //% block="y"
        Y = 0x800,
    }


    export const enum JoystickVariant { // uint8_t
        //% block="thumb"
        Thumb = 0x1,
        //% block="arcade ball"
        ArcadeBall = 0x2,
        //% block="arcade stick"
        ArcadeStick = 0x3,
        //% block="gamepad"
        Gamepad = 0x4,
    }

    export const enum JoystickReg {
        /**
         * If the joystick is analog, the directional buttons should be "simulated", based on joystick position
         * (`Left` is `{ x = -1, y = 0 }`, `Up` is `{ x = 0, y = -1}`).
         * If the joystick is digital, then each direction will read as either `-1`, `0`, or `1` (in fixed representation).
         * The primary button on the joystick is `A`.
         *
         * ```
         * const [buttons, x, y] = jdunpack<[jacdac.JoystickButtons, number, number]>(buf, "u32 i1.15 i1.15")
         * ```
         */
        Direction = 0x101,

        /**
         * Constant Variant (uint8_t). The type of physical joystick.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.JoystickVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,

        /**
         * Constant Buttons (uint32_t). Indicates a bitmask of the buttons that are mounted on the joystick.
         * If the `Left`/`Up`/`Right`/`Down` buttons are marked as available here, the joystick is digital.
         * Even when marked as not available, they will still be simulated based on the analog joystick.
         *
         * ```
         * const [buttonsAvailable] = jdunpack<[jacdac.JoystickButtons]>(buf, "u32")
         * ```
         */
        ButtonsAvailable = 0x180,
    }

    export const enum JoystickEvent {
        /**
         * Argument: buttons Buttons (uint32_t). Emitted whenever the state of buttons changes.
         *
         * ```
         * const [buttons] = jdunpack<[jacdac.JoystickButtons]>(buf, "u32")
         * ```
         */
        //% block="buttons changed"
        ButtonsChanged = 0x3,
    }

}
