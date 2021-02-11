namespace modules {
    //% fixedInstances
    export class ThermometerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_THERMOMETER, role, "i22.10");
        }
    
        /**
        * The temperature.
        */
        //% blockId=jacdacthermometer101 block="%sensor temperature"
        //% group="temperature"
        get temperature(): number {
            // temperature
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient("thermometer");
}