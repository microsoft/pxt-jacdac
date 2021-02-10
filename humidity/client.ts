namespace modules {
    //% fixedInstances
    export class HumidityClient extends jacdac.SensorClient {
        constructor(role: string) {
            super(jacdac.SRV_HUMIDITY, role);
        }

        /**
         * Reads the humidity from the sensor
         */
        //% blockId=jacdachumidityhumidity block="%sensor humidity"
        //% group="Humidity"
        humidity(): number {
            const [value] = jacdac.jdunpack<[number]>(this.state, "u22.10")
            return value;
        }
    }

    //% fixedInstance whenUsed
    export const humidity = new HumidityClient("humidity");
}