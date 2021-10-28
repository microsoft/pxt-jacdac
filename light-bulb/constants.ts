namespace jacdac {
    // Service: Light bulb
    export const SRV_LIGHT_BULB = 0x1cab054c
    export const enum LightBulbReg {
        /**
         * Read-write ratio u0.16 (uint16_t). Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmeable lights, the value should be clamp to 0xffff for any non-zero value.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        Brightness = 0x1,

        /**
         * Constant bool (uint8_t). Indicates if the light supports dimming.
         *
         * ```
         * const [dimmeable] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Dimmeable = 0x180,
    }

    export const enum LightBulbEvent {
        /**
         * Emitted when the light brightness is greater than 0.
         */
        //% block="on"
        On = 0x1,

        /**
         * Emitted when the light is completely off with brightness to 0.
         */
        //% block="off"
        Off = 0x2,
    }

}
