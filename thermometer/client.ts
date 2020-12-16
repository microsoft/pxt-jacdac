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
    export class ThermometerClient extends jacdac.SensorClient {
        constructor(requiredDevice: string = null) {
            super("temp", jacdac.SRV_THERMOMETER, requiredDevice);
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockId=jddevice_temperature block="%thermometer temperature in $unit"
        //% group="Thermometer"
        //% weight=26
        temperature(unit?: TemperatureUnit): number {
            const s = this.state;
            if (!s || s.length < 2) return 0;
            const t = s.getNumber(NumberFormat.Int16LE, 0);
            switch (unit) {
                case TemperatureUnit.Fahrenheit: (t * 18) / 10 + 32;
                default: return t;
            }
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacadacthermoonevent block="%thermometer on $condition"
        //% group="Thermometer"
        onEvent(condition: TemperatureEvent, handler: () => void): void {
            this.registerEvent(condition, handler)
        }
    }

    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient();
}