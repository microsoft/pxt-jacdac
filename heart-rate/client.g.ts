namespace modules {
    /**
     * A sensor approximating the heart rate. 
     * 
     * 
     * **Jacdac is NOT suitable for medical devices and should NOT be used in any kind of device to diagnose or treat any medical conditions.**
     **/
    //% fixedInstances blockGap=8
    export class HeartRateClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_HEART_RATE, role, "u16.16");
        }
    
        /**
        * The estimated heart rate.
        */
        //% blockId=jacdacheartrate_101_0
        //% group="heart_rate"
        //% blockCombine block="heart_rate" callInDebugger
        get heartRate(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const heartRate = new HeartRateClient("heart Rate");
}