namespace jacdac {
    // Service: Slider
    export const SRV_SLIDER = 0x1f274746
    export const SRV_SLIDER_POSITION_RO_PACK_FORMAT = "u16"
    export const enum SliderReg {
        /**
         * Read-only ratio uint16_t. The relative position of the slider between `0x0000` and `0xffff`.
         */
        Position = 0x101,
    }

}
