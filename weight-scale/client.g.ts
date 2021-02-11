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
        //% blockId=jacdacweightscale_101_0
        //% group="weight"
        //% blockCombine block="weight" callInDebugger
        get weight(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const weightScale = new WeightScaleClient("weight Scale");
}