namespace modules {
    /**
     * The UV Index is a measure of the intensity of ultraviolet (UV) rays from the Sun.
     **/
    //% fixedInstances blockGap=8
    export class UvIndexClient extends jacdac.SensorClient<[number]> {

        private readonly _uvIndexError : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.UvIndexVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_UV_INDEX, role, "u16.16");

            this._uvIndexError = this.addRegister<[number]>(jacdac.UvIndexReg.UvIndexError, "u16.16");
            this._variant = this.addRegister<[jacdac.UvIndexVariant]>(jacdac.UvIndexReg.Variant, "u8");            
        }
    

        /**
        * Ultraviolet index, typically refreshed every second.
        */
        //% callInDebugger
        //% group="Environment"
        //% block="%uvindex uv index"
        //% blockId=jacdac_uvindex_uv_index___get
        //% weight=100
        uvIndex(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Error on the UV measure.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        uvIndexError(): number {
            this.start();            
            const values = this._uvIndexError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical sensor and capabilities.
        */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        variant(): jacdac.UvIndexVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const uvIndex = new UvIndexClient("uv Index");
}