namespace modules {
    //% fixedInstances
    export class ECO2Client extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_E_CO2, role, "u22.10");
        }
    
        /**
        * Equivalent CO₂ (eCO₂) readings.
        */
        //% blockId=jacdaceco2101 block="%sensor e co2"
        //% group="e_CO2"
        get e_CO2(): number {
            // e_CO2
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const eCO2 = new ECO2Client("e CO2");
}