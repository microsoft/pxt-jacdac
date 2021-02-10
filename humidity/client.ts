namespace modules {
    //% fixedInstances
    export class HumidityClient extends jacdac.SensorClient {
        constructor(role: string) {
            super(jacdac.SRV_HUMIDITY, role);
        }

        /**
        * The relative humidity in percentage of full water saturation.
        */
        //% blockId=jacdachumidity101 block="%sensor humidity"
        //% group="Humidity"
        humidity(): number {
            // humidity
            const values = jacdac.jdunpack<[number]>(this.state, "u22.10")
            return values && values[0];
        }
    }

    //% fixedInstance whenUsed
    export const humidity = new HumidityClient("humidity");
}