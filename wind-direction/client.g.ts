namespace modules {
    /**
     * A sensor that measures wind direction.
     **/
    //% fixedInstances blockGap=8
    export class WindDirectionClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_WIND_DIRECTION, role, "u16");
            
        }
    

        /**
        * The direction of the wind.
        */
        //% group="Wind direction" blockSetVariable=myModule
        //% blockCombine block="wind direction" callInDebugger
        get windDirection(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const windDirection = new WindDirectionClient("wind Direction");
}