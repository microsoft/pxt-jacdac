namespace modules {
    //% fixedInstances
    export class ThermocoupleClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_THERMOCOUPLE, role, "i22.10");
        }
    
        /**
        * The temperature.
        */
        //% blockId=jacdacthermocouple101 block="%sensor temperature"
        //% group="temperature"
        get temperature(): number {
            // temperature
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const thermocouple = new ThermocoupleClient("thermocouple");
}