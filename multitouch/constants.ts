namespace jacdac {
    // Service: Multitouch
    export const SRV_MULTITOUCH = 0x18d55e2b
    export const SRV_MULTITOUCH_CAPACITY_RO_PACK_FORMAT = "r: i32"
    export const SRV_MULTITOUCH_TOUCH_EVENT_PACK_FORMAT = "u32"
    export const SRV_MULTITOUCH_RELEASE_EVENT_PACK_FORMAT = "u32"
    export const SRV_MULTITOUCH_TAP_EVENT_PACK_FORMAT = "u32"
    export const SRV_MULTITOUCH_LONG_PRESS_EVENT_PACK_FORMAT = "u32"
    export const enum MultitouchReg {
        /**
         * Read-only. Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
         * no touch, wheres a value of around `100` or more indicates touch.
         * It's best to ignore this (unless debugging), and use events.
         *
         * ```
         * const [capacitance] = jdunpack<[number[]]>(buf, "i32[]")
         * ```
         */
        Capacity = 0x101,
    }

    export const enum MultitouchEvent {
        /**
         * Argument: channel uint32_t. Emitted when an input is touched.
         */
        Touch = 0x1,

        /**
         * Argument: channel uint32_t. Emitted when an input is no longer touched.
         */
        Release = 0x2,

        /**
         * Argument: channel uint32_t. Emitted when an input is briefly touched. TODO Not implemented.
         */
        Tap = 0x3,

        /**
         * Argument: channel uint32_t. Emitted when an input is touched for longer than 500ms. TODO Not implemented.
         */
        LongPress = 0x4,

        /**
         * Emitted when input channels are successively touched in order of increasing channel numbers.
         */
        SwipePos = 0x10,

        /**
         * Emitted when input channels are successively touched in order of decreasing channel numbers.
         */
        SwipeNeg = 0x11,
    }

}
