namespace modules {
    //% fixedInstances
    export class ModelRunnerClient extends jacdac.SensorClient<[number[]]> {
        constructor(role: string) {
            super(jacdac.SRV_MODEL_RUNNER, role, "r: f32");
        }
    
        /**
        * Results of last model invocation as `float32` array.
        */
        //% blockId=jacdacmodelrunner101 block="%sensor outputs"
        //% group="outputs"
        get outputs(): number[] {
            // output
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const modelRunner = new ModelRunnerClient("model Runner");
}