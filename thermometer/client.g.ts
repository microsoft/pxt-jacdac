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
        //% blockId=jacdac_thermometer_temperature___get
        //% group="Environment"
        //% block="%thermometer temperature" callInDebugger
        temperature(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient("thermometer");
}