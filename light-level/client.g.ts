namespace modules {
    /**
     * A sensor that measures luminosity level.
     **/
    //% fixedInstances blockGap=8
    export class LightLevelClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_LIGHT_LEVEL, role, "u0.16");
            
        }
    

        /**
        * Detect light level
        */
        //% blockId=jacdac_lightlevel_light_level___get
        //% group="Imaging"
        //% block="%lightlevel light level" callInDebugger
        lightLevel(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const lightLevel = new LightLevelClient("light Level");
}