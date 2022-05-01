namespace jacdac {
    // Service Sound level constants
    export const SRV_SOUND_LEVEL = 0x14ad1a5d
    export const enum SoundLevelReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The sound level detected by the microphone
         *
         * ```
         * const [soundLevel] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        SoundLevel = 0x101,

        /**
         * Read-write bool (uint8_t). Turn on or off the microphone.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

    export namespace SoundLevelRegPack {
        /**
         * Pack format for 'sound_level' register data.
         */
        export const SoundLevel = "u0.16"

        /**
         * Pack format for 'enabled' register data.
         */
        export const Enabled = "u8"
    }
}
