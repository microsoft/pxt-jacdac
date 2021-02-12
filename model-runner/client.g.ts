namespace modules {
    /**
     * Runs machine learning models.
     * 
     * Only models with a single input tensor and a single output tensor are supported at the moment.
     * Input is provided by Sensor Aggregator service on the same device.
     * Multiple instances of this service may be present, if more than one model format is supported by a device.
     **/
    //% fixedInstances blockGap=8
    export class ModelRunnerClient extends jacdac.SensorClient<[number[]]> {
            

            constructor(role: string) {
            super(jacdac.SRV_MODEL_RUNNER, role, "r: f32");
            
        }
    

        /**
        * Results of last model invocation as `float32` array.
        */
        //% blockId=jacdac_modelrunner_outputs_output_get
        //% group="Model Runner"
        //% block="%modelrunner output" callInDebugger
        output(): number[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const modelRunner = new ModelRunnerClient("model Runner");
}