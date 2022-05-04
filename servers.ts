namespace jacdac {
    export class ActuatorServer extends jacdac.Server {
        readonly valuePackFormat: string
        readonly intensityPackFormat: string
        private sync: (actuator: ActuatorServer) => void

        intensity = 0
        value = 0

        constructor(
            serviceClass: number,
            valuePackFormat: string,
            intensityPackFormat: string,
            sync: (actuator: ActuatorServer) => void,
            options?: jacdac.ServerOptions
        ) {
            super(serviceClass, options)

            this.valuePackFormat = valuePackFormat
            this.intensityPackFormat = intensityPackFormat
            this.sync = sync

            this.on(jacdac.CHANGE, () => this.syncMaybe())
            this.syncMaybe()
        }

        handlePacket(pkt: jacdac.JDPacket) {
            const oldIntensity = this.intensity
            const oldValue = this.value

            if (this.intensityPackFormat)
                this.intensity = this.handleRegValue(
                    pkt,
                    jacdac.SystemReg.Intensity,
                    this.intensityPackFormat,
                    this.intensity
                )
            if (this.valuePackFormat)
                this.value = this.handleRegValue(
                    pkt,
                    jacdac.SystemReg.Value,
                    this.valuePackFormat,
                    this.value
                )

            if (oldIntensity != this.intensity || oldValue != this.value)
                this.emit(CHANGE)
        }

        private syncMaybe() {
            if (this.statusCode !== jacdac.SystemStatusCodes.Ready) return
            this.sync(this)
        }
    }

    export function createActuatorServer(
        serviceClass: number,
        valuePackFormat: string,
        intensityPackFormat: string,
        sync: (actuator: ActuatorServer) => void,
        options?: jacdac.ServerOptions
    ): ActuatorServer {
        return new ActuatorServer(
            serviceClass,
            valuePackFormat,
            intensityPackFormat,
            sync,
            options
        )
    }
}
