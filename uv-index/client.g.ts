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
        //% blockId=jacdac_uvindex_uv_index___get
        //% group="UV index"
        //% block="%uvindex uv index" callInDebugger
        uvIndex(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const uvIndex = new UvIndexClient("uv Index");
}