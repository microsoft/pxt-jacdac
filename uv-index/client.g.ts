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
        //% group="UV index" blockSetVariable=myModule
        //% blockCombine block="uv index" callInDebugger
        get uvIndex(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }     
     

    }
    //% fixedInstance whenUsed
    export const uvIndex = new UvIndexClient("uv Index");
}