namespace modules {
    //% fixedInstances
    export class PotentiometerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_POTENTIOMETER, role, "u0.16");
        }
    
        /**
        * The relative position of the slider between `0` and `1`.
        */
        //% blockId=jacdacpotentiometer101 block="%sensor position"
        //% group="position"
        get position(): number {
            // position
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const potentiometer = new PotentiometerClient("potentiometer");
}