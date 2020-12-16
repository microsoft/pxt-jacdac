namespace jacdac {
    const enum JDLightSpectrumRange {
        Full = 10,
        Infrared = 20,
        Visible = 40
    }
        
    const enum JDLightSpectrumEvent {
        FullBright = JDLightSpectrumRange.Full | DAL.LEVEL_THRESHOLD_HIGH,
        FullDark = JDLightSpectrumRange.Full | DAL.LEVEL_THRESHOLD_LOW,
        InfraredBright = JDLightSpectrumRange.Infrared | DAL.LEVEL_THRESHOLD_HIGH,
        InfraredDark = JDLightSpectrumRange.Infrared | DAL.LEVEL_THRESHOLD_LOW,
        VisibleBright = JDLightSpectrumRange.Visible | DAL.LEVEL_THRESHOLD_HIGH,
        VisibleDark = JDLightSpectrumRange.Visible | DAL.LEVEL_THRESHOLD_LOW
    }    
    //% fixedInstances
    export class LightSpectrumSensorClient extends SensorClient {
        constructor(requiredDevice: string = null) {
            super("lspec", jd_class.LIGHT_SPECTRUM_SENSOR, requiredDevice);
        }

        /**
         * Reads the full spectrum 
         */
        //% blockId=jdlightspectrumfull block="%lightSpectrumSensor full"
        //% group="Light spectrum sensor"
        get full(): number {
            const s = this.state;
            if (!s || s.length < 6) return -1;
            return s.getNumber(NumberFormat.UInt16LE, 0);
        }

        /**
         * Reads the full spectrum 
         */
        //% blockId=jdlightspectruminfrared block="%lightSpectrumSensor infrared"
        //% group="Light spectrum sensor"
        get infrared(): number {
            const s = this.state;
            if (!s || s.length < 6) return -1;
            return s.getNumber(NumberFormat.UInt16LE, 2);
        }

        /**
         * Reads the full spectrum 
         */
        //% blockId=jdlightspectrumvisible block="%lightSpectrumSensor visible"
        //% group="Light spectrum sensor"
        get visible(): number {
            const s = this.state;
            if (!s || s.length < 6) return -1;
            return s.getNumber(NumberFormat.UInt16LE, 4);
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacadaclightsensorspectrumonevent block="on %lightSpectrumSensor %event"
        //% group="Light sensor"
        onEvent(event: JDLightSpectrumEvent, handler: () => void) {
            this.registerEvent(event, handler);
        }
    }

    //% fixedInstance whenUsed block="light spectrum sensor client"
    export const lightSpectrumSensorClient = new LightSpectrumSensorClient();
}