namespace modules {
    /**
     * A thermometer measuring outside or inside environment.
     **/
    //% fixedInstances blockGap=8
    export class ThermometerClient extends jacdac.SensorClient<[number]> {

        private readonly _minTemperature : jacdac.RegisterClient<[number]>;
        private readonly _maxTemperature : jacdac.RegisterClient<[number]>;
        private readonly _temperatureError : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.ThermometerVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_THERMOMETER, role, "i22.10");

            this._minTemperature = this.addRegister<[number]>(jacdac.ThermometerReg.MinTemperature, "i22.10");
            this._maxTemperature = this.addRegister<[number]>(jacdac.ThermometerReg.MaxTemperature, "i22.10");
            this._temperatureError = this.addRegister<[number]>(jacdac.ThermometerReg.TemperatureError, "u22.10");
            this._variant = this.addRegister<[jacdac.ThermometerVariant]>(jacdac.ThermometerReg.Variant, "u8");            
        }
    

        /**
        * The temperature.
        */
        //% callInDebugger
        //% group="Environment"
        //% block="%thermometer temperature"
        //% blockId=jacdac_thermometer_temperature___get
        //% weight=100
        temperature(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Lowest temperature that can be reported.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        minTemperature(): number {
            this.start();            
            const values = this._minTemperature.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Highest temperature that can be reported.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        maxTemperature(): number {
            this.start();            
            const values = this._maxTemperature.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The real temperature is between `temperature - temperature_error` and `temperature + temperature_error`.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=97
        temperatureError(): number {
            this.start();            
            const values = this._temperatureError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the type of thermometer.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=96
        variant(): jacdac.ThermometerVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient("thermometer");
}