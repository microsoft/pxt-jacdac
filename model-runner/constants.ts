namespace jacdac {
    // Service: Model Runner
    export const SRV_MODEL_RUNNER = 0x140f9a78

    export const enum ModelRunnerModelFormat { // uint32_t
        TFLite = 0x334c4654,
        ML4F = 0x30470f62,
        EdgeImpulseCompiled = 0x30564945,
    }

    export const SRV_MODEL_RUNNER_SET_MODEL_COMMAND_PACK_FORMAT = "u32"
    export const SRV_MODEL_RUNNER_SET_MODEL_REPORT_PACK_FORMAT = "u16"
    export const SRV_MODEL_RUNNER_PREDICT_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_MODEL_RUNNER_PREDICT_REPORT_PACK_FORMAT = "u16"
    export const SRV_MODEL_RUNNER_AUTO_INVOKE_EVERY_RW_PACK_FORMAT = "u16"
    export const SRV_MODEL_RUNNER_OUTPUTS_RO_PACK_FORMAT = "r: f32"
    export const SRV_MODEL_RUNNER_INPUT_SHAPE_RO_PACK_FORMAT = "r: u16"
    export const SRV_MODEL_RUNNER_OUTPUT_SHAPE_RO_PACK_FORMAT = "r: u16"
    export const SRV_MODEL_RUNNER_LAST_RUN_TIME_RO_PACK_FORMAT = "u32"
    export const SRV_MODEL_RUNNER_ALLOCATED_ARENA_SIZE_RO_PACK_FORMAT = "u32"
    export const SRV_MODEL_RUNNER_MODEL_SIZE_RO_PACK_FORMAT = "u32"
    export const SRV_MODEL_RUNNER_LAST_ERROR_RO_PACK_FORMAT = "s"
    export const SRV_MODEL_RUNNER_FORMAT_CONST_PACK_FORMAT = "u32"
    export const SRV_MODEL_RUNNER_FORMAT_VERSION_CONST_PACK_FORMAT = "u32"
    export const SRV_MODEL_RUNNER_PARALLEL_CONST_PACK_FORMAT = "u8"
    export const enum ModelRunnerCmd {
        /**
         * Argument: model_size B uint32_t. Open pipe for streaming in the model. The size of the model has to be declared upfront.
         * The model is streamed over regular pipe data packets.
         * The format supported by this instance of the service is specified in `format` register.
         * When the pipe is closed, the model is written all into flash, and the device running the service may reset.
         */
        SetModel = 0x80,

        /**
         * Argument: outputs pipe (bytes). Open channel that can be used to manually invoke the model. When enough data is sent over the `inputs` pipe, the model is invoked,
         * and results are send over the `outputs` pipe.
         */
        Predict = 0x81,
    }

    export const enum ModelRunnerReg {
        /**
         * Read-write uint16_t. When register contains `N > 0`, run the model automatically every time new `N` samples are collected.
         * Model may be run less often if it takes longer to run than `N * sampling_interval`.
         * The `outputs` register will stream its value after each run.
         * This register is not stored in flash.
         */
        AutoInvokeEvery = 0x80,

        /**
         * Read-only. Results of last model invocation as `float32` array.
         *
         * ```
         * const [output] = jdunpack<[number[]]>(buf, "f32[]")
         * ```
         */
        Outputs = 0x101,

        /**
         * Read-only. The shape of the input tensor.
         *
         * ```
         * const [dimension] = jdunpack<[number[]]>(buf, "u16[]")
         * ```
         */
        InputShape = 0x180,

        /**
         * Read-only. The shape of the output tensor.
         *
         * ```
         * const [dimension] = jdunpack<[number[]]>(buf, "u16[]")
         * ```
         */
        OutputShape = 0x181,

        /**
         * Read-only μs uint32_t. The time consumed in last model execution.
         */
        LastRunTime = 0x182,

        /**
         * Read-only B uint32_t. Number of RAM bytes allocated for model execution.
         */
        AllocatedArenaSize = 0x183,

        /**
         * Read-only B uint32_t. The size of the model in bytes.
         */
        ModelSize = 0x184,

        /**
         * Read-only string (bytes). Textual description of last error when running or loading model (if any).
         */
        LastError = 0x185,

        /**
         * Constant ModelFormat (uint32_t). The type of ML models supported by this service.
         * `TFLite` is flatbuffer `.tflite` file.
         * `ML4F` is compiled machine code model for Cortex-M4F.
         * The format is typically present as first or second little endian word of model file.
         */
        Format = 0x186,

        /**
         * Constant uint32_t. A version number for the format.
         */
        FormatVersion = 0x187,

        /**
         * Constant bool (uint8_t). If present and true this service can run models independently of other
         * instances of this service on the device.
         */
        Parallel = 0x188,
    }

}
