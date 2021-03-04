namespace modules {
    /**
     * A sensor measuring air pressure of outside environment.
     **/
    //% fixedInstances blockGap=8
    export class BarometerClient extends jacdac.SensorClient<[number]> {

        private readonly _pressureError : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_BAROMETER, role, "u22.10");

            this._pressureError = this.addRegister<[number]>(jacdac.constants.BarometerReg.PressureError, "u22.10");            
        }
    

        /**
        * The air pressure.
        */
        //% callInDebugger
        //% group="Environment"
        //% block="%barometer pressure"
        //% blockId=jacdac_barometer_pressure___get
        //% weight=100
        pressure(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The real pressure is between `pressure - pressure_error` and `pressure + pressure_error`.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        pressureError(): number {
            this.start();            
            const values = this._pressureError.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const barometer = new BarometerClient("barometer");
}