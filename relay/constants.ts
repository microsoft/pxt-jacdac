namespace jacdac {
    // Service: Relay
    export const SRV_RELAY = 0x183fe656

    export const enum RelayVariant { // uint8_t
        //% block="electromechanical"
        Electromechanical = 0x1,
        //% block="solid state"
        SolidState = 0x2,
        //% block="reed"
        Reed = 0x3,
    }

    export const enum RelayReg {
        /**
         * Read-write bool (uint8_t). Indicates whether the relay circuit is currently energized (closed) or not.
         *
         * ```
         * const [closed] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Closed = 0x1,

        /**
         * Constant Variant (uint8_t). Describes the type of relay used.
         *
         * ```
         * const [variant] = jdunpack<[jacdac.RelayVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,

        /**
         * Constant mA uint32_t. Maximum switching current for a resistive load.
         *
         * ```
         * const [maxSwitchingCurrent] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        MaxSwitchingCurrent = 0x180,
    }

    export const enum RelayEvent {
        /**
         * Emitted when relay goes from `inactive` to `active` state.
         * Normally open (NO) relays close the circuit when activated.
         */
        //% block="active"
        Active = 0x1,

        /**
         * Emitted when relay goes from `active` to `inactive` state.
         * Normally closed (NC) relays open the circuit when activated.
         */
        //% block="inactive"
        Inactive = 0x2,
    }

}
