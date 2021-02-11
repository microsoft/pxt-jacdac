namespace modules {
    //% fixedInstances
    export class BarometerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_BAROMETER, role, "u22.10");
        }
    
        /**
        * The air pressure.
        */
        //% blockId=jacdacbarometer101 block="%sensor pressure"
        //% group="pressure"
        get pressure(): number {
            // pressure
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const barometer = new BarometerClient("barometer");
}