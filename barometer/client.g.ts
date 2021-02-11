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
        //% group="Barometer" blockSetVariable=myModule
        //% blockCombine block="pressure" callInDebugger
        get pressure(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const barometer = new BarometerClient("barometer");
}