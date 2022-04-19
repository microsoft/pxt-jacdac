namespace jacdac {
    // Service HID Joystick constants
    export const SRV_HID_JOYSTICK = 0x1a112155
    export const enum HidJoystickReg {
        /**
         * Constant uint8_t. Number of button report supported
         *
         * ```
         * const [buttonCount] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        ButtonCount = 0x180,

        /**
         * Constant uint32_t. A bitset that indicates which button is analog.
         *
         * ```
         * const [buttonsAnalog] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        ButtonsAnalog = 0x181,

        /**
         * Constant uint8_t. Number of analog input supported
         *
         * ```
         * const [axisCount] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        AxisCount = 0x182,
    }

    export namespace HidJoystickRegPack {
        /**
         * Pack format for 'button_count' register data.
         */
        export const ButtonCount = "u8"

        /**
         * Pack format for 'buttons_analog' register data.
         */
        export const ButtonsAnalog = "u32"

        /**
         * Pack format for 'axis_count' register data.
         */
        export const AxisCount = "u8"
    }

    export const enum HidJoystickCmd {
        /**
         * Sets the up/down button state, one byte per button, supports analog buttons. For digital buttons, use `0` for released, `1` for pressed.
         *
         * ```
         * const [pressure] = jdunpack<[number[]]>(buf, "u0.8[]")
         * ```
         */
        SetButtons = 0x80,

        /**
         * Sets the state of analog inputs.
         *
         * ```
         * const [position] = jdunpack<[number[]]>(buf, "i1.15[]")
         * ```
         */
        SetAxis = 0x81,
    }

    export namespace HidJoystickCmdPack {
        /**
         * Pack format for 'set_buttons' register data.
         */
        export const SetButtons = "r: u0.8"

        /**
         * Pack format for 'set_axis' register data.
         */
        export const SetAxis = "r: i1.15"
    }
}
