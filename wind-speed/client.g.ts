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
        //% blockId=jacdac_windspeed_wind_speed___get
        //% group="Wind speed"
        //% block="%windspeed wind speed" callInDebugger
        windSpeed(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const windSpeed = new WindSpeedClient("wind Speed");
}