namespace jacdac {
    export class AccelerometerServer extends jacdac.SensorServer {
        constructor() {
            super(jacdac.SRV_ACCELEROMETER)

            // todo events
        }

        serializeState(): Buffer {
            const x = input.acceleration(Dimension.X)
            const y = input.acceleration(Dimension.Y)
            const z = input.acceleration(Dimension.Z)

            return jacdac.jdpack(jacdac.AccelerometerRegPack.Forces, [x, y, z])
        }
    }
}
