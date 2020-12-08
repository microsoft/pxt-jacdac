namespace jacdac {
    // Service: Microphone
    export const SRV_MICROPHONE = 0x113dac86
    export const SRV_MICROPHONE_SAMPLE_COMMAND_PACK_FORMAT = "b[12] u32"
    export const SRV_MICROPHONE_SAMPLING_PERIOD_RW_PACK_FORMAT = "u32"
    export const enum MicrophoneCmd {
        /**
         * The samples will be streamed back over the `samples` pipe.
         * If `num_samples` is `0`, streaming will only stop when the pipe is closed.
         * Otherwise the specified number of samples is streamed.
         * Samples are sent as `i16`.
         *
         * ```
         * const [samples, numSamples] = jdunpack<[Buffer, number]>(buf, "b[12] u32")
         * ```
         */
        Sample = 0x81,
    }

    export const enum MicrophoneReg {
        /**
         * Read-write μs uint32_t. Get or set microphone sampling period.
         * Sampling rate is `1_000_000 / sampling_period Hz`.
         */
        SamplingPeriod = 0x80,
    }

}
