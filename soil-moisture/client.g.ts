namespace modules {
    /**
     * A soil moisture sensor.
     **/
    //% fixedInstances blockGap=8
    export class SoilMoistureClient extends jacdac.SensorClient<[number]> {

            private readonly _variant : jacdac.RegisterClient<[jacdac.SoilMoistureVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_SOIL_MOISTURE, role, "u0.16");

            this._variant = this.addRegister<[jacdac.SoilMoistureVariant]>(jacdac.SoilMoistureReg.Variant, "u8");            
        }
    

        /**
        * Indicates the wetness of the soil, from ``dry`` to ``wet``.
        */
        //% callInDebugger
        //% group="Environment"
        //% block="%soilmoisture moisture"
        //% blockId=jacdac_soilmoisture_moisture___get
        moisture(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Describe the type of physical sensor.
        */
        //% callInDebugger
        //% group="Environment"
        variant(): jacdac.SoilMoistureVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const soilMoisture = new SoilMoistureClient("soil Moisture");
}