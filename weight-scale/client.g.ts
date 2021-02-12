namespace modules {
    /**
     * A weight measuring sensor.
     **/
    //% fixedInstances blockGap=8
    export class WeightScaleClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_WEIGHT_SCALE, role, "u16.16");
            
        }
    

        /**
        * The reported weight.
        */
        //% blockId=jacdac_weightscale_weight___get
        //% group="Weight Scale"
        //% block="%weightscale weight" callInDebugger
        weight(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const weightScale = new WeightScaleClient("weight Scale");
}