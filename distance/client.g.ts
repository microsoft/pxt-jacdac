namespace modules {
    //% fixedInstances
    export class DistanceClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_DISTANCE, role, "u16.16");
        }
    
        /**
        * Current distance from the object
        */
        //% blockId=jacdacdistance101 block="%sensor distance"
        //% group="reading"
        get reading(): number {
            // distance
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const distance = new DistanceClient("distance");
}