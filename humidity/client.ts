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
    //% group="reading"
    get reading(): number {
        // humidity
        const values = jacdac.jdunpack<[number]>(this.state , "u22.10")
        return values && values[0];
    }
    /**
    * The real humidity is between `humidity - humidity_error` and `humidity + humidity_error`.
    */
    //% blockId=jacdachumidity106 block="%sensor humidity error"
    //% group="humidityError"
    get humidityError(): number {
        // humidityError
        const values = jacdac.jdunpack<[number]>(this.??? , "u22.10")
        return values && values[0];
    }
            
    }

    //% fixedInstance whenUsed
    export const humidity = new HumidityClient("humidity");
}
