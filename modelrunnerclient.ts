namespace jacdac {
    export enum ModelRunnerModelFormat { // uint32_t
        TFLite = 0x334c4654,
        ML4F = 0x30470f62,
        EdgeImpulseCompiled = 0x30564945,
    }

    export enum ModelRunnerCmd {
        /**
         * Argument: model_size bytes uint32_t. Open pipe for streaming in the model. The size of the model has to be declared upfront.
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

    export enum ModelRunnerReg {
        /**
         * Read-write uint16_t. When register contains `N > 0`, run the model automatically every time new `N` samples are collected.
         * Model may be run less often if it takes longer to run than `N * sampling_interval`.
         * The `outputs` register will stream its value after each run.
         * This register is not stored in flash.
         */
        AutoInvokeEvery = 0x80,

        /** Read-only bytes. Results of last model invocation as `float32` array. */
        Outputs = 0x101,

        /** Read-only dimension uint16_t. The shape of the input tensor. */
        InputShape = 0x180,

        /** Read-only dimension uint16_t. The shape of the output tensor. */
        OutputShape = 0x181,

        /** Read-only μs uint32_t. The time consumed in last model execution. */
        LastRunTime = 0x182,

        /** Read-only bytes uint32_t. Number of RAM bytes allocated for model execution. */
        AllocatedArenaSize = 0x183,

        /** Read-only bytes uint32_t. The size of the model in bytes. */
        ModelSize = 0x184,

        /** Read-only string (bytes). Textual description of last error when running or loading model (if any). */
        LastError = 0x185,

        /**
         * Constant ModelFormat (uint32_t). The type of ML models supported by this service.
         * `ModelRunner` is flatbuffer `.tflite` file.
         * `ML4F` is compiled machine code model for Cortex-M4F.
         * The format is typically present as first or second little endian word of model file.
         */
        Format = 0x186,

        /** Constant uint32_t. A version number for the format. */
        FormatVersion = 0x187,

        /**
         * Constant bool (uint8_t). If present and true this service can run models independently of other
         * instances of this service on the device.
         */
        Parallel = 0x188,
    }

    function unpackArray(buf: Buffer, fmt: NumberFormat) {
        const sz = Buffer.sizeOfNumberFormat(fmt)
        const res: number[] = []
        for (let i = 0; i < buf.length; i += sz)
            res.push(buf.getNumber(fmt, i))
        return res
    }

    //% fixedInstances
    export class ModelRunnerClient extends Client {
        constructor(requiredDevice: string = null) {
            super("mrun", jd_class.MODEL_RUNNER, requiredDevice);
        }

        private _autoInv: number
        private _currClass = 0
        private _minScore = 0.8

        private autoStart() {
            this.start()
            if (this._autoInv == null) {
                this.autoInvoke()
            }
        }

        autoInvoke(numSamples = 10) {
            this._autoInv = numSamples
            this.setRegInt(ModelRunnerReg.AutoInvokeEvery, numSamples)
        }

        handlePacket(pkt: JDPacket) {
            if (pkt.service_command == (ModelRunnerReg.Outputs | CMD_GET_REG)) {
                const scores = unpackArray(pkt.data, NumberFormat.Float32LE)
                for (let i = 0; i < scores.length; ++i) {
                    if (scores[i] > this._minScore) {
                        if (this._currClass != i) {
                            this._currClass = i
                            this.raiseEvent(this._currClass + 1000, 0)
                        }
                        break
                    }
                }
            }
        }

        /**
         * Run code when a specific even is detected in input data.
         */
        //% group="Machine Learning"
        //% blockId=jacadacmrundetect block="jacdac %client on ML class %classId detected"
        onDetection(classId: number, handler: () => void) {
            this.autoStart()
            this.registerEvent(classId + 1000, handler);
        }
    }

    /**
     * Default model runner
     */
    //% fixedInstance block="model runner client"
    export const modelRunnerClient = new ModelRunnerClient();
}