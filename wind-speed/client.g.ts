namespace modules {
    /**
     * A sensor that measures wind speed.
     **/
    //% fixedInstances blockGap=8
    export class WindSpeedClient extends jacdac.SensorClient<[number]> {

        private readonly _windSpeedError : jacdac.RegisterClient<[number]>;
        private readonly _maxWindSpeed : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_WIND_SPEED, role, "u16.16");

            this._windSpeedError = this.addRegister<[number]>(jacdac.constants.WindSpeedReg.WindSpeedError, "u16.16");
            this._maxWindSpeed = this.addRegister<[number]>(jacdac.constants.WindSpeedReg.MaxWindSpeed, "u16.16");            
        }
    

        /**
        * The velocity of the wind.
        */
        //% callInDebugger
        //% group="Wind speed"
        //% block="%windspeed wind speed"
        //% blockId=jacdac_windspeed_wind_speed___get
        //% weight=100
        windSpeed(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Error on the reading
        */
        //% callInDebugger
        //% group="Wind speed"
        //% weight=99
        windSpeedError(): number {
            this.start();            
            const values = this._windSpeedError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Maximum speed that can be measured by the sensor.
        */
        //% callInDebugger
        //% group="Wind speed"
        //% weight=98
        maxWindSpeed(): number {
            this.start();            
            const values = this._maxWindSpeed.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const windSpeed = new WindSpeedClient("wind Speed");
}