namespace modules {
    //% fixedInstances
    export class SoilMoistureClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_SOIL_MOISTURE, role, "u0.16");
        }
    
        /**
        * Indicates the wetness of the soil, from ``dry`` to ``wet``.
        */
        //% blockId=jacdacsoilmoisture101 block="%sensor moisture"
        //% group="moisture"
        get moisture(): number {
            // moisture
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const soilMoisture = new SoilMoistureClient("soil Moisture");
}