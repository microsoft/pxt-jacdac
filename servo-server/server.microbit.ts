namespace jacdac {
    export interface ServoServerOptions extends jacdac.ServerOptions {
        minAngle?: number
        maxAngle?: number
    }

    export class ServoServer extends jacdac.Server {
        pin: AnalogPin
        angle: number
        enabled: boolean
        offset: number
        minAngle = 0
        maxAngle = 180

        constructor(pin: AnalogPin, options?: jacdac.ServoServerOptions) {
            super(jacdac.SRV_SERVO, options)
            this.pin = pin
            this.offset = 0
            this.enabled = false
            if (options) {
                if (!isNaN(options.minAngle)) this.minAngle = options.minAngle
                if (!isNaN(options.maxAngle)) this.maxAngle = options.maxAngle
            }
            this.angle = Math.round((this.maxAngle - this.minAngle) / 2)
            this.sync()
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.handleRegValue(
                pkt,
                jacdac.ServoReg.MinAngle,
                jacdac.ServoRegPack.MinAngle,
                this.minAngle
            )
            this.handleRegValue(
                pkt,
                jacdac.ServoReg.MaxAngle,
                jacdac.ServoRegPack.MaxAngle,
                this.maxAngle
            )

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
                jacdac.ServoReg.ActualAngle,
                jacdac.ServoRegPack.ActualAngle,
                this.angle + this.offset
            )

            this.sync()
        }

        //% hiddenParts=servo
        sync() {
            if (!this.enabled) pins.digitalWritePin(<number>this.pin, 0)
            else {
                const degrees = Math.clamp(
                    this.minAngle,
                    this.maxAngle,
                    this.angle + this.offset
                )
                pins.servoWritePin(this.pin, degrees)
            }
        }
    }
}
