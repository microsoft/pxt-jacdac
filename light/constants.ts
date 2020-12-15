namespace jacdac {
    // Service: Light
    export const SRV_LIGHT = 0x126f00e0

    export const enum LightLightType { // uint8_t
        WS2812B_GRB = 0x0,
        APA102 = 0x10,
        SK9822 = 0x11,
    }

    export const enum LightReg {
        /**
         * Read-write ratio uint8_t. Set the luminosity of the strip.
         * At `0` the power to the strip is completely shut down.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Brightness = 0x1,

        /**
         * Read-only ratio uint8_t. This is the luminosity actually applied to the strip.
         * May be lower than `brightness` if power-limited by the `max_power` register.
         * It will rise slowly (few seconds) back to `brightness` is limits are no longer required.
         *
         * ```
         * const [actualBrightness] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        ActualBrightness = 0x180,

        /**
         * Read-write LightType (uint8_t). Specifies the type of light strip connected to controller.
         * Controllers which are sold with lights should default to the correct type
         * and could not allow change.
         *
         * ```
         * const [lightType] = jdunpack<[LightLightType]>(buf, "u8")
         * ```
         */
        LightType = 0x80,

        /**
         * Read-write uint16_t. Specifies the number of pixels in the strip.
         * Controllers which are sold with lights should default to the correct length
         * and could not allow change.
         * Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
         *
         * ```
         * const [numPixels] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        NumPixels = 0x81,

        /**
         * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
         *
         * ```
         * const [maxPower] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPower = 0x7,
    }

    export const enum LightCmd {
        /**
         * Argument: program bytes. Run the given light "program". See service description for details.
         *
         * ```
         * const [program] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Run = 0x81,
    }

}
