namespace modules {
    //% fixedInstances
    export class IlluminanceClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_ILLUMINANCE, role, "u22.10");
        }
    
        /**
        * The amount of illuminance, as lumens per square metre.
        */
        //% blockId=jacdacilluminance101 block="%sensor light"
        //% group="light"
        get light(): number {
            // light
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const illuminance = new IlluminanceClient("illuminance");
}