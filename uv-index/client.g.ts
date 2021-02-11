namespace modules {
    /**
     * The UV Index is a measure of the intensity of ultraviolet (UV) rays from the Sun.
     **/
    //% fixedInstances blockGap=8
    export class UvIndexClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_UV_INDEX, role, "u16.16");
        }
    
        /**
        * Ultraviolet index, typically refreshed every second.
        */
        //% blockId=jacdacuvindex_101_0
        //% group="uv_index"
        //% blockCombine block="uv_index" callInDebugger
        get uvIndex(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const uvIndex = new UvIndexClient("uv Index");
}