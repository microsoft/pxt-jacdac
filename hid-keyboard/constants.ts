namespace jacdac {
    // Service: HID Keyboard
    export const SRV_HID_KEYBOARD = 0x18b05b6a

    export const enum HidKeyboardModifiers { // uint8_t
        //% block="none"
        None = 0x0,
        //% block="left control"
        LeftControl = 0x1,
        //% block="left shift"
        LeftShift = 0x2,
        //% block="left alt"
        LeftAlt = 0x4,
        //% block="left gui"
        LeftGUI = 0x8,
        //% block="right control"
        RightControl = 0x10,
        //% block="right shift"
        RightShift = 0x20,
        //% block="right alt"
        RightAlt = 0x40,
        //% block="right gui"
        RightGUI = 0x80,
    }


    export const enum HidKeyboardAction { // uint8_t
        //% block="press"
        Press = 0x0,
        //% block="up"
        Up = 0x1,
        //% block="down"
        Down = 0x2,
    }

    export const enum HidKeyboardCmd {
        /**
         * Presses a key or a sequence of keys down.
         *
         * ```
         * const [rest] = jdunpack<[([number, jacdac.HidKeyboardModifiers, jacdac.HidKeyboardAction])[]]>(buf, "r: u16 u8 u8")
         * const [selector, modifiers, action] = rest[0]
         * ```
         */
        Key = 0x80,

        /**
         * No args. Clears all pressed keys.
         */
        Clear = 0x81,
    }

}
