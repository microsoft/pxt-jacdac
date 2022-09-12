namespace servers {
    export class AccelerometerServer extends jacdac.SensorServer {
        private lastEvent: number = -1
        constructor() {
            super(jacdac.SRV_ACCELEROMETER)
            input.onGesture(Gesture.Shake, function () {
                this.sendEvent(jacdac.AccelerometerEvent.Shake)
            })
            input.onGesture(Gesture.ScreenUp, function () {
                this.sendEvent(jacdac.AccelerometerEvent.FaceUp)
            })
            input.onGesture(Gesture.ScreenDown, function () {
                this.sendEvent(jacdac.AccelerometerEvent.FaceDown)
            })
            input.onGesture(Gesture.LogoUp, function () {
                this.sendEvent(jacdac.AccelerometerEvent.TiltUp)
            })
            input.onGesture(Gesture.LogoDown, function () {
                this.sendEvent(jacdac.AccelerometerEvent.TiltDown)
            })
            input.onGesture(Gesture.TiltLeft, function () {
                this.sendEvent(jacdac.AccelerometerEvent.TiltLeft)
            })
            input.onGesture(Gesture.TiltRight, function () {
                this.sendEvent(jacdac.AccelerometerEvent.TiltRight)
            })
            input.onGesture(Gesture.FreeFall, function () {
                this.sendEvent(jacdac.AccelerometerEvent.Freefall)
            })
        }

        public serializeState(): Buffer {
            let ax = input.acceleration(Dimension.X) / 1000
            let ay = input.acceleration(Dimension.Y) / 1000
            let az = input.acceleration(Dimension.Z) / 1000
            return jacdac.jdpack(jacdac.AccelerometerRegPack.Forces, [ax, ay, az])
        }
    }

    //% fixedInstance whenUsed block="accelerometer"
    export const accelerometerServer = new AccelerometerServer()
}
