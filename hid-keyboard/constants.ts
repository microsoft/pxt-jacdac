namespace jacdac {
    // Service: HID Keyboard
    export const SRV_HID_KEYBOARD = 0x18b05b6a

    export const enum HidKeyboardModifiers { // uint8_t
        //% block="..."
        None = 0x0,
        //% block="ctrl"
        LeftControl = 0x1,
        //% block="shift"
        LeftShift = 0x2,
        //% block="alt"
        LeftAlt = 0x4,
        //% block="meta"
        LeftGUI = 0x8,
        //% block="right ctrl"
        RightControl = 0x10,
        //% block="right shift"
        RightShift = 0x20,
        //% block="right alt"
        RightAlt = 0x40,
        //% block="right meta"
        RightGUI = 0x80,
    }


    export const enum HidKeyboardAction { // uint8_t
        Press = 0x0,
        Up = 0x1,
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
