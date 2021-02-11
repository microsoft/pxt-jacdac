namespace modules {
    //% fixedInstances
    export class UvIndexClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_UV_INDEX, role, "u16.16");
        }
    
        /**
        * Ultraviolet index, typically refreshed every second.
        */
        //% blockId=jacdacuvindex101 block="%sensor uv index"
        //% group="reading"
        get reading(): number {
            // uvIndex
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const uvIndex = new UvIndexClient("uv Index");
}