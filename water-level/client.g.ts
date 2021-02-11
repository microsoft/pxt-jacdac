namespace modules {
    //% fixedInstances
    export class WaterLevelClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_WATER_LEVEL, role, "u0.16");
        }
    
        /**
        * The reported water level.
        */
        //% blockId=jacdacwaterlevel101 block="%sensor level"
        //% group="level"
        get level(): number {
            // level
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const waterLevel = new WaterLevelClient("water Level");
}