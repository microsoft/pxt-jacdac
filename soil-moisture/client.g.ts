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
        //% blockId=jacdacsoilmoisture_101_0
        //% group="moisture"
        //% blockCombine block="moisture" callInDebugger
        get moisture(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const soilMoisture = new SoilMoistureClient("soil Moisture");
}