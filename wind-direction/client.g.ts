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
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }     
     

    }
    //% fixedInstance whenUsed
    export const windDirection = new WindDirectionClient("wind Direction");
}