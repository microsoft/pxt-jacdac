namespace modules {
    //% fixedInstances
    export class HumidityClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_HUMIDITY, role, "u22.10");
        }
    
        /**
        * The relative humidity in percentage of full water saturation.
        */
        //% blockId=jacdachumidity101 block="%sensor humidity"
        //% group="reading"
        reading(): number {
            // humidity
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const humidity = new HumidityClient("humidity");
}