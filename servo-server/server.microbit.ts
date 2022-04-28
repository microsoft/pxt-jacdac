namespace jacdac {
    export class ServoServer extends jacdac.Server {
        pin: AnalogPin
        angle: number
        enabled: boolean
        offset: number

        constructor(
            pin: AnalogPin,
            options?: jacdac.ServerOptions
        ) {
            super(jacdac.SRV_SERVO, options)
            this.pin = pin
            this.angle = 0
            this.offset = 0
            this.enabled = false
            this.sync()
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.enabled = this.handleRegBool(
                pkt,
                jacdac.ServoReg.Enabled,
                this.enabled
            )
            this.angle = this.handleRegValue(
                pkt,
                jacdac.ServoReg.Angle,
                jacdac.ServoRegPack.Angle,
                this.angle
            )
            this.offset = this.handleRegValue(
                pkt,
                jacdac.ServoReg.Offset,
                jacdac.ServoRegPack.Offset,
                this.offset
            )
            this.handleRegValue(
                pkt,
                jacdac.ServoReg.CurrentAngle,
                jacdac.ServoRegPack.CurrentAngle,
                this.angle + this.offset
            )

            this.sync()
        }

        sync() {
            if (!this.enabled) pins.digitalWritePin(<number>this.pin, 0)
            else {
                const degrees = Math.clamp(0, 180, this.angle + this.offset)
                pins.servoWritePin(this.pin, degrees)
            }
        }
    }
}
