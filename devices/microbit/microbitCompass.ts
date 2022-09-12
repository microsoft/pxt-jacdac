namespace servers {
    export class CompassServer extends jacdac.SensorServer {
        enabled = false

        constructor() {
            super(jacdac.SRV_COMPASS)
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            const oldEnabled = this.enabled
            this.enabled = this.handleRegBool(
                pkt,
                jacdac.CompassReg.Enabled,
                this.enabled
            )
            this.handleRegValue(pkt, jacdac.CompassReg.HeadingError, jacdac.CompassRegPack.HeadingError, 2)

            // trigger calibration
            if (this.enabled && oldEnabled !== this.enabled)
                this.startCalibration()

            pkt.possiblyNotImplemented()
        }

        private startCalibration() {
            control.runInBackground(() => {
                input.compassHeading()
            })
        }

        protected handleCalibrateCommand(pkt: jacdac.JDPacket) {
            if (this.enabled) this.startCalibration()
        }

        public serializeState(): Buffer {
            const heading = this.enabled ? input.compassHeading() : 0
            return jacdac.jdpack(jacdac.CompassRegPack.Heading, [heading])
        }
    }

    //% fixedInstance whenUsed block="compass"
    export const compassServer = new CompassServer()
}
