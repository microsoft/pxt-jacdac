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
        //% group="Light level" blockSetVariable=myModule
        //% blockCombine block="light level" callInDebugger
        get lightLevel(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const lightLevel = new LightLevelClient("light Level");
}