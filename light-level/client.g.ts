namespace modules {
    /**
     * A sensor that measures luminosity level.
     **/
    //% fixedInstances blockGap=8
    export class LightLevelClient extends jacdac.SensorClient<[number]> {

            private readonly _variant : jacdac.RegisterClient<[jacdac.LightLevelVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_LIGHT_LEVEL, role, "u0.16");

            this._variant = this.addRegister<[jacdac.LightLevelVariant]>(jacdac.LightLevelReg.Variant, "u8");            
        }
    

        /**
        * Detect light level
        */
        //% callInDebugger
        //% group="Imaging"
        //% block="%lightlevel light level"
        //% blockId=jacdac_lightlevel_light_level___get
        lightLevel(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical sensor.
        */
        //% callInDebugger
        //% group="Imaging"
        variant(): jacdac.LightLevelVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const lightLevel = new LightLevelClient("light Level");
}