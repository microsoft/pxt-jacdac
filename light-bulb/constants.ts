namespace jacdac {
    // Service Light bulb constants
    export const SRV_LIGHT_BULB = 0x1cab054c
    export const enum LightBulbReg {
        /**
         * Read-write ratio u0.16 (uint16_t). Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
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
         * const [dimmable] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Dimmable = 0x180,
    }

    export namespace LightBulbRegPack {
        /**
         * Pack format for 'brightness' register data.
         */
        export const Brightness = "u0.16"

        /**
         * Pack format for 'dimmable' register data.
         */
        export const Dimmable = "u8"
    }
}
