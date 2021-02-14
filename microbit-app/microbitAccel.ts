namespace microbit {
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
