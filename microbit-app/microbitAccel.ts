namespace microbit {
    // Service: Accelerometer
    const SRV_ACCELEROMETER = 0x1f140409
    const enum AccelerometerReg {
        /**
         * Indicates the current forces acting on accelerometer.
         *
         * ```
         * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i6.10 i6.10 i6.10")
         * ```
         */
        Forces = 0x101,
    }
    const enum AccelerometerEvent {
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt up"
        TiltUp = 0x81,
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt down"
        TiltDown = 0x82,
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt left"
        TiltLeft = 0x83,
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt right"
        TiltRight = 0x84,
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% block="face up"
        FaceUp = 0x85,
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% block="face down"
        FaceDown = 0x86,
        /**
         * Emitted when total force acting on accelerometer is much less than 1g.
         */
        //% block="freefall"
        Freefall = 0x87,
        /**
         * Emitted when forces change violently a few times.
         */
        //% block="shake"
        Shake = 0x8b,
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 2g"
        Force_2g = 0x8c,
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 3g"
        Force_3g = 0x88,
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 6g"
        Force_6g = 0x89,
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 8g"
        Force_8g = 0x8a,
    }

    function mapEventValue(v: number) {
        switch(v) {
            case DAL.ACCELEROMETER_EVT_FACE_UP: return AccelerometerEvent.FaceUp;
            case DAL.ACCELEROMETER_EVT_FACE_DOWN: return AccelerometerEvent.FaceDown;
            case DAL.ACCELEROMETER_EVT_TILT_UP: return AccelerometerEvent.TiltUp;
            case DAL.ACCELEROMETER_EVT_TILT_DOWN: return AccelerometerEvent.TiltDown;
            case DAL.ACCELEROMETER_EVT_TILT_LEFT: return AccelerometerEvent.TiltLeft;
            case DAL.ACCELEROMETER_EVT_TILT_RIGHT: return AccelerometerEvent.TiltRight;
            case DAL.ACCELEROMETER_EVT_FREEFALL: return AccelerometerEvent.Freefall;
            case DAL.ACCELEROMETER_EVT_SHAKE: return AccelerometerEvent.Shake;
            case DAL.ACCELEROMETER_2G_TOLERANCE: return AccelerometerEvent.Force_2g;
            case DAL.ACCELEROMETER_3G_TOLERANCE: return AccelerometerEvent.Force_3g;
            case DAL.ACCELEROMETER_6G_TOLERANCE: return AccelerometerEvent.Force_6g;
            case DAL.ACCELEROMETER_8G_TOLERANCE: return AccelerometerEvent.Force_8g;
        }
        return -1;
    }

    export class Accelerometer extends jacdac.SensorHost {
        private lastEvent: number = -1;
        constructor() {
            super("microbitAccel", SRV_ACCELEROMETER);
            control.onEvent(EventBusSource.MICROBIT_ID_ACCELEROMETER, EventBusValue.MICROBIT_EVT_ANY, 
            () => {    
                let e = mapEventValue(control.eventValue());
                if (e != -1 && e != this.lastEvent) {
                    this.lastEvent = e;
                    this.sendEvent(e);
                }
            })
        }

        public serializeState(): Buffer {
            let ax = input.acceleration(Dimension.X);
            let ay = input.acceleration(Dimension.Y);
            let az = input.acceleration(Dimension.Z);
            return jacdac.jdpack("i16 i16 i16", [ax, ay, az]);
        }
    }
}
