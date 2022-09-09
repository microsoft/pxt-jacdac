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

        /**
         * Read-write ratio u0.16 (uint16_t). Set level at which the `loud` event is generated.
         *
         * ```
         * const [loudThreshold] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        LoudThreshold = 0x6,

        /**
         * Read-write ratio u0.16 (uint16_t). Set level at which the `quiet` event is generated.
         *
         * ```
         * const [quietThreshold] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        QuietThreshold = 0x5,
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

        /**
         * Pack format for 'loud_threshold' register data.
         */
        export const LoudThreshold = "u0.16"

        /**
         * Pack format for 'quiet_threshold' register data.
         */
        export const QuietThreshold = "u0.16"
    }

    export const enum SoundLevelEvent {
        /**
         * Generated when a loud sound is detected.
         */
        //% block="loud"
        Loud = 0x1,

        /**
         * Generated low level of sound is detected.
         */
        //% block="quiet"
        Quiet = 0x2,
    }
}
