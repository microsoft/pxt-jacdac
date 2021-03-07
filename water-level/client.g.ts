namespace modules {
    /**
     * A sensor that measures liquid/water level.
     **/
    //% fixedInstances blockGap=8
    export class WaterLevelClient extends jacdac.SensorClient<[number]> {

        private readonly _variant : jacdac.RegisterClient<[jacdac.WaterLevelVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_WATER_LEVEL, role, "u0.16");

            this._variant = this.addRegister<[jacdac.WaterLevelVariant]>(jacdac.WaterLevelReg.Variant, "u8");            
        }
    

        /**
        * The reported water level.
        */
        //% callInDebugger
        //% group="Water level"
        //% block="%waterlevel level"
        //% blockId=jacdac_waterlevel_level___get
        //% weight=100
        level(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical sensor.
        */
        //% callInDebugger
        //% group="Water level"
        //% weight=99
        variant(): jacdac.WaterLevelVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const waterLevel = new WaterLevelClient("water Level");
}