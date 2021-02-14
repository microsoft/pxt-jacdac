namespace microbit {
    // Service: Light level
    const SRV_LIGHT_LEVEL = 0x17dc9a1c
    const enum LightLevelVariant { // uint8_t
        PhotoResistor = 0x1,
        LEDMatrix = 0x2,
        Ambient = 0x3,
    }
    const enum LightLevelReg {
        /**
         * Read-only ratio u0.16 (uint16_t). Detect light level
         *
         * ```
         * const [lightLevel] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        LightLevel = 0x101,
        /**
         * Constant Variant (uint8_t). The type of physical sensor.
         *
         * ```
         * const [variant] = jdunpack<[LightLevelVariant]>(buf, "u8")
         * ```
         */
        Variant = 0x107,
    }

    export class LightLevel extends jacdac.SensorHost {
        constructor() {
            super("microbitLight", SRV_LIGHT_LEVEL)
        }

        public serializeState(): Buffer {
            return jacdac.jdpack("u0.16", [input.lightLevel()/255]);
        }
    }
}