namespace modules {
    /**
     * A sensor approximating the heart rate. 
     * 
     * 
     * **Jacdac is NOT suitable for medical devices and should NOT be used in any kind of device to diagnose or treat any medical conditions.**
     **/
    //% fixedInstances blockGap=8
    export class HeartRateClient extends jacdac.SensorClient<[number]> {

        private readonly _heartRateError : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.constants.HeartRateVariant]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_HEART_RATE, role, "u16.16");

            this._heartRateError = this.addRegister<[number]>(jacdac.constants.HeartRateReg.HeartRateError, "u16.16");
            this._variant = this.addRegister<[jacdac.constants.HeartRateVariant]>(jacdac.constants.HeartRateReg.Variant, "u8");            
        }
    

        /**
        * The estimated heart rate.
        */
        //% callInDebugger
        //% group="Biometric"
        //% block="%heartrate heart rate"
        //% blockId=jacdac_heartrate_heart_rate___get
        //% weight=100
        heartRate(): number {
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
        heartRateError(): number {
            this.start();            
            const values = this._heartRateError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical sensor
        */
        //% callInDebugger
        //% group="Biometric"
        //% weight=98
        variant(): jacdac.constants.HeartRateVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const heartRate = new HeartRateClient("heart Rate");
}