const enum TemperatureEvent {
    //% block="hot"
    Hot = DAL.SENSOR_THRESHOLD_HIGH,  // ANALOG_THRESHOLD_HIGH
    //% block="cold"
    Cold = DAL.SENSOR_THRESHOLD_LOW  // ANALOG_THRESHOLD_LOW
}

const enum TemperatureUnit {
    //% block="°C"
    Celsius = 0,
    //% block="°F"
    Fahrenheit = 1,
}

namespace modules {
    //% fixedInstances
    export class ThermometerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_THERMOMETER, role, "i22.10");
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockId=jddevice_temperature block="%thermometer temperature in $unit"
        //% group="Thermometer"
        //% weight=26
        temperature(unit?: TemperatureUnit): number {
            // TODO: no data then what?
            const [value = 21] = this.values();
            if (unit === TemperatureUnit.Fahrenheit)
                return (value * 18) / 10 + 32;
            else
                return value;
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacadacthermoonevent block="on %thermometer $condition"
        //% group="Thermometer"
        onEvent(condition: TemperatureEvent, handler: () => void): void {
            this.registerEvent(condition, handler)
        }
    }

    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient("thermometer");
}