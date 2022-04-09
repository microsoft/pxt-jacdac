namespace jacdac {
    // Service Arcade Sound constants
    export const SRV_ARCADE_SOUND = 0x1fc63606
    export const enum ArcadeSoundCmd {
        /**
         * Argument: samples bytes. Play samples, which are single channel, signed 16-bit little endian values.
         *
         * ```
         * const [samples] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Play = 0x80,
    }

    export namespace ArcadeSoundCmdPack {
        /**
         * Pack format for 'play' register data.
         */
        export const Play = "b"
    }

    export const enum ArcadeSoundReg {
        /**
         * Read-write Hz u22.10 (uint32_t). Get or set playback sample rate (in samples per second).
         * If you set it, read it back, as the value may be rounded up or down.
         *
         * ```
         * const [sampleRate] = jdunpack<[number]>(buf, "u22.10")
         * ```
         */
        SampleRate = 0x80,

        /**
         * Constant B uint32_t. The size of the internal audio buffer.
         *
         * ```
         * const [bufferSize] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        BufferSize = 0x180,

        /**
         * Read-only B uint32_t. How much data is still left in the buffer to play.
         * Clients should not send more data than `buffer_size - buffer_pending`,
         * but can keep the `buffer_pending` as low as they want to ensure low latency
         * of audio playback.
         *
         * ```
         * const [bufferPending] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        BufferPending = 0x181,
    }

    export namespace ArcadeSoundRegPack {
        /**
         * Pack format for 'sample_rate' register data.
         */
        export const SampleRate = "u22.10"

        /**
         * Pack format for 'buffer_size' register data.
         */
        export const BufferSize = "u32"

        /**
         * Pack format for 'buffer_pending' register data.
         */
        export const BufferPending = "u32"
    }
}
