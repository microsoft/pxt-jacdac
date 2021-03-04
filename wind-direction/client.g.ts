namespace modules {
    /**
     * A sensor that measures wind direction.
     **/
    //% fixedInstances blockGap=8
    export class WindDirectionClient extends jacdac.SensorClient<[number]> {

        private readonly _windDirectionError : jacdac.RegisterClient<[number]>;
        private readonly _windDirectionOffset : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_WIND_DIRECTION, role, "u16");

            this._windDirectionError = this.addRegister<[number]>(jacdac.constants.WindDirectionReg.WindDirectionError, "u16");
            this._windDirectionOffset = this.addRegister<[number]>(jacdac.constants.WindDirectionReg.WindDirectionOffset, "i16");            
        }
    

        /**
        * The direction of the wind.
        */
        //% callInDebugger
        //% group="Wind direction"
        //% block="%winddirection wind direction"
        //% blockId=jacdac_winddirection_wind_direction___get
        //% weight=100
        windDirection(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Error on the wind direction reading
        */
        //% callInDebugger
        //% group="Wind direction"
        //% weight=99
        windDirectionError(): number {
            this.start();            
            const values = this._windDirectionError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Offset added to direction to account for sensor calibration.
        */
        //% callInDebugger
        //% group="Wind direction"
        //% weight=98
        windDirectionOffset(): number {
            this.start();            
            const values = this._windDirectionOffset.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const windDirection = new WindDirectionClient("wind Direction");
}