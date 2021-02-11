namespace modules {
    //% fixedInstances
    export class WindDirectionClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_WIND_DIRECTION, role, "u16");
        }
    
        /**
        * The direction of the wind.
        */
        //% blockId=jacdacwinddirection101 block="%sensor wind direction"
        //% group="reading"
        get reading(): number {
            // windDirection
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const windDirection = new WindDirectionClient("wind Direction");
}