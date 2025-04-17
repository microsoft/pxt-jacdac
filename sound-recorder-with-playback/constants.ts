namespace jacdac {
    // Service Sound Recorder with Playback constants
    export const SRV_SOUND_RECORDER_WITH_PLAYBACK = 0x1b72bf50

    export const enum SoundRecorderWithPlaybackStatus { // uint8_t
        //% block="idle"
        Idle = 0x0,
        //% block="recording"
        Recording = 0x1,
        //% block="playing"
        Playing = 0x2,
    }

    export const enum SoundRecorderWithPlaybackCmd {
        /**
         * No args. Replay recorded audio.
         */
        Play = 0x80,

        /**
         * Argument: duration ms uint16_t. Record audio for N milliseconds.
         *
         * ```
         * const [duration] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Record = 0x81,

        /**
         * No args. Cancel record, the `time` register will be updated by already cached data.
         */
        Cancel = 0x82,
    }

    export namespace SoundRecorderWithPlaybackCmdPack {
        /**
         * Pack format for 'record' data.
         */
        export const Record = "u16"
    }

    export const enum SoundRecorderWithPlaybackReg {
        /**
         * Read-only Status (uint8_t). Indicate the current status
         *
         * ```
         * const [status] = jdunpack<[jacdac.SoundRecorderWithPlaybackStatus]>(buf, "u8")
         * ```
         */
        Status = 0x180,

        /**
         * Read-only ms uint16_t. Milliseconds of audio recorded.
         *
         * ```
         * const [time] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Time = 0x181,

        /**
         * Read-write ratio u0.8 (uint8_t). Playback volume control
         *
         * ```
         * const [volume] = jdunpack<[number]>(buf, "u0.8")
         * ```
         */
        Volume = 0x1,
    }

    export namespace SoundRecorderWithPlaybackRegPack {
        /**
         * Pack format for 'status' data.
         */
        export const Status = "u8"

        /**
         * Pack format for 'time' data.
         */
        export const Time = "u16"

        /**
         * Pack format for 'volume' data.
         */
        export const Volume = "u0.8"
    }

}
