namespace modules {
    /**
     * Detects the amount of light falling onto a given surface area.
     * 
     * Note that this is different from *luminance*, the amount of light that passes through, emits from, or reflects off an object.
     **/
    //% fixedInstances blockGap=8
    export class IlluminanceClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_ILLUMINANCE, role, "u22.10");
            
        }
    

        /**
        * The amount of illuminance, as lumens per square metre.
        */
        //% blockId=jacdac_illuminance_light___get
        //% group="Illuminance"
        //% block="%illuminance light" callInDebugger
        light(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const illuminance = new IlluminanceClient("illuminance");
}