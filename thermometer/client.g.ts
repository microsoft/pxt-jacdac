namespace modules {
    /**
     * A thermometer measuring outside or inside environment.
     **/
    //% fixedInstances blockGap=8
    export class ThermometerClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_THERMOMETER, role, "i22.10");
            
        }
    

        /**
        * The temperature.
        */
        //% group="Thermometer" blockSetVariable=myModule
        //% blockCombine block="temperature" callInDebugger
        get temperature(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient("thermometer");
}