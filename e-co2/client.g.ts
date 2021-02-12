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
        //% blockId=jacdac_eco2_e_CO2___get
        //% group="Environment"
        //% block="%eco2 e CO2" callInDebugger
        eCO2(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const eCO2 = new ECO2Client("e CO2");
}