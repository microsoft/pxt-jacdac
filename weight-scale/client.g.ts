namespace modules {
    //% fixedInstances
    export class WeightScaleClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_WEIGHT_SCALE, role, "u16.16");
        }
    
        /**
        * The reported weight.
        */
        //% blockId=jacdacweightscale101 block="%sensor weight"
        //% group="weight"
        get weight(): number {
            // weight
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const weightScale = new WeightScaleClient("weight Scale");
}