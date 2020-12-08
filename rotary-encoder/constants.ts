namespace jacdac {
    // Service: Rotary encoder
    export const SRV_ROTARY_ENCODER = 0x10fa29c9
    export const enum RotaryEncoderReg {
        /**
         * Read-only # int32_t. Upon device reset starts at `0` (regardless of the shaft position).
         * Increases by `1` for a clockwise "click", by `-1` for counter-clockwise.
         */
        Position = 0x101,

        /**
         * Constant # uint16_t. This specifies by how much `position` changes when the crank does 360 degree turn. Typically 12 or 24.
         */
        ClicksPerTurn = 0x180,
    }

}
