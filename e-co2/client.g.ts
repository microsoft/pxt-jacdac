namespace modules {
    /**
     * Measures equivalent CO₂ levels.
     **/
    //% fixedInstances blockGap=8
    export class ECO2Client extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_E_CO2, role, "u22.10");
        }
    
        /**
        * Equivalent CO₂ (eCO₂) readings.
        */
        //% blockId=jacdaceco2_101_0
        //% group="e_CO2"
        //% blockCombine block="e_CO2" callInDebugger
        get e_CO2(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const eCO2 = new ECO2Client("e CO2");
}