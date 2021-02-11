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
        //% blockId=jacdacwinddirection_101_0
        //% group="wind_direction"
        //% blockCombine block="wind_direction" callInDebugger
        get windDirection(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const windDirection = new WindDirectionClient("wind Direction");
}