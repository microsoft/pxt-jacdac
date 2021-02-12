namespace modules {
    /**
     * A soil moisture sensor.
     **/
    //% fixedInstances blockGap=8
    export class SoilMoistureClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_SOIL_MOISTURE, role, "u0.16");
            
        }
    

        /**
        * Indicates the wetness of the soil, from ``dry`` to ``wet``.
        */
        //% blockId=jacdac_soilmoisture_moisture___get
        //% group="Soil moisture"
        //% block="%soilmoisture moisture" callInDebugger
        moisture(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const soilMoisture = new SoilMoistureClient("soil Moisture");
}