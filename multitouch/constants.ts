namespace jacdac {
    // Service Multitouch constants
    export const SRV_MULTITOUCH = 0x1d112ab5
    export const enum MultitouchReg {
        /**
         * Read-only. Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
         * no touch, wheres a value of around `100` or more indicates touch.
         * It's best to ignore this (unless debugging), and use events.
         *
         * ```
         * const [capacitance] = jdunpack<[number[]]>(buf, "i16[]")
         * ```
         */
        Capacity = 0x101,
    }

    export const enum MultitouchRegPack {
        /**
         * Pack format for 'capacity' register data.
         */
        Capacity = "r: i16",
    }

    export const enum MultitouchEvent {
        /**
         * Argument: channel uint8_t. Emitted when an input is touched.
         *
         * ```
         * const [channel] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        //% block="touch"
        Touch = 0x1,

        /**
         * Argument: channel uint8_t. Emitted when an input is no longer touched.
         *
         * ```
         * const [channel] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        //% block="release"
        Release = 0x2,

        /**
         * Argument: channel uint8_t. Emitted when an input is briefly touched. TODO Not implemented.
         *
         * ```
         * const [channel] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        //% block="tap"
        Tap = 0x80,

        /**
         * Argument: channel uint8_t. Emitted when an input is touched for longer than 500ms. TODO Not implemented.
         *
         * ```
         * const [channel] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        //% block="long press"
        LongPress = 0x81,

        /**
         * Emitted when input channels are successively touched in order of increasing channel numbers.
         *
         * ```
         * const [duration, startChannel, endChannel] = jdunpack<[number, number, number]>(buf, "u16 u8 u8")
         * ```
         */
        //% block="swipe pos"
        SwipePos = 0x90,

        /**
         * Emitted when input channels are successively touched in order of decreasing channel numbers.
         *
         * ```
         * const [duration, startChannel, endChannel] = jdunpack<[number, number, number]>(buf, "u16 u8 u8")
         * ```
         */
        //% block="swipe neg"
        SwipeNeg = 0x91,
    }

    export const enum MultitouchEventPack {
        /**
         * Pack format for 'touch' register data.
         */
        Touch = "u8",

        /**
         * Pack format for 'release' register data.
         */
        Release = "u8",

        /**
         * Pack format for 'tap' register data.
         */
        Tap = "u8",

        /**
         * Pack format for 'long_press' register data.
         */
        LongPress = "u8",

        /**
         * Pack format for 'swipe_pos' register data.
         */
        SwipePos = "u16 u8 u8",

        /**
         * Pack format for 'swipe_neg' register data.
         */
        SwipeNeg = "u16 u8 u8",
    }
}
