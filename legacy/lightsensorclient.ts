namespace jacdac {
    const enum JDLightCondition {
        //% block="dark"
        Dark = DAL.SENSOR_THRESHOLD_LOW,
        //% block="bright"
        Bright = DAL.SENSOR_THRESHOLD_HIGH
    }

    //% fixedInstances
    export class LightSensorClient extends SensorClient {
        constructor(requiredDevice: string = null) {
            super("lis", jd_class.LIGHT_SENSOR, requiredDevice);
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockId=jacdaclightsensorlevel block="%lightsensor light level"
        //% group="Light sensor"
        get lightLevel(): number {
            const s = this.state;
            if (!s || s.length < 1) return 0;
            return s.getNumber(NumberFormat.UInt8LE, 0);
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacadaclightsensoronevent block="%client on %event"
        //% group="Light sensor"
        onEvent(event: JDLightCondition, handler: () => void) {
            this.registerEvent(event, handler);
        }

        /**
         * Sets the threshold value for the event
         * @param level 
         * @param value 
         */
        //% blockId=jacdaclightsetthrshold block="%lightsensor set threshold %level to %value"
        //% group="Light sensor"
        setLightConditionThreshold(level: JDLightCondition, value: number) {
            this.setThreshold(level == JDLightCondition.Dark, value);
        }
    }

    //% fixedInstance whenUsed block="light sensor client"
    export const lightSensorClient = new LightSensorClient();
}