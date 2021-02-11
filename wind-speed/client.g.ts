namespace modules {
    /**
     * A sensor that measures wind speed.
     **/
    //% fixedInstances blockGap=8
    export class WindSpeedClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_WIND_SPEED, role, "u16.16");
        }
    
        /**
        * The velocity of the wind.
        */
        //% blockId=jacdacwindspeed_101_0
        //% group="wind_speed"
        //% blockCombine block="wind_speed" callInDebugger
        get windSpeed(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const windSpeed = new WindSpeedClient("wind Speed");
}