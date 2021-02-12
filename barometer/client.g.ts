namespace modules {
    /**
     * A sensor measuring air pressure of outside environment.
     **/
    //% fixedInstances blockGap=8
    export class BarometerClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_BAROMETER, role, "u22.10");
            
        }
    

        /**
        * The air pressure.
        */
        //% blockId=jacdac_barometer_pressure___get
        //% group="Barometer"
        //% block="%barometer pressure" callInDebugger
        pressure(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const barometer = new BarometerClient("barometer");
}