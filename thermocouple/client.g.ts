namespace modules {
    /**
     * A thermocouple using a heat probe to gather temperatures.
     **/
    //% fixedInstances blockGap=8
    export class ThermocoupleClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_THERMOCOUPLE, role, "i22.10");
            
        }
    

        /**
        * The temperature.
        */
        //% group="Thermocouple" blockSetVariable=myModule
        //% blockCombine block="temperature" callInDebugger
        get temperature(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const thermocouple = new ThermocoupleClient("thermocouple");
}