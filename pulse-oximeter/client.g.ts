namespace modules {
    /**
     * A sensor approximating the oxygen level. 
     * 
     * **Jacdac is not suitable for medical devices and should NOT be used in any kind of device to diagnose or treat any medical conditions.**
     **/
    //% fixedInstances blockGap=8
    export class PulseOximeterClient extends jacdac.SensorClient<[number]> {

        private readonly _oxygenError : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_PULSE_OXIMETER, role, "u8.8");

            this._oxygenError = this.addRegister<[number]>(jacdac.PulseOximeterReg.OxygenError, "u8.8");            
        }
    

        /**
        * The estimated oxygen level in blood.
        */
        //% callInDebugger
        //% group="Biometric"
        //% block="%pulseoximeter oxygen"
        //% blockId=jacdac_pulseoximeter_oxygen___get
        //% weight=100
        oxygen(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The estimated error on the reported sensor data.
        */
        //% callInDebugger
        //% group="Biometric"
        //% weight=99
        oxygenError(): number {
            this.start();            
            const values = this._oxygenError.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const pulseOximeter = new PulseOximeterClient("pulse Oximeter");
}