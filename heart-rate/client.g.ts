namespace modules {
    //% fixedInstances
    export class HeartRateClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_HEART_RATE, role, "u16.16");
        }
    
        /**
        * The estimated heart rate.
        */
        //% blockId=jacdacheartrate101 block="%sensor heart rate"
        //% group="reading"
        get reading(): number {
            // heartRate
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const heartRate = new HeartRateClient("heart Rate");
}