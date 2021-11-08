namespace modules {
    //% fixedInstances
    //% blockGap=8
    export class ServoClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SERVO, role)
        }

        private angle: number = null
        private autoOff: number
        private lastSet: number

        private sync(angle: number) {
            this.lastSet = control.millis()
            if (angle === this.angle) return
            if (angle == null) {
                this.setReg(jacdac.ServoReg.Enabled, "u8", [0])
            } else {
                this.setReg(jacdac.ServoReg.Angle, "i16.16", [this.angle])
                this.setReg(jacdac.ServoReg.Enabled, "u8", [1])
            }
            this.angle = angle
        }

        setAutoOff(ms: number) {
            if (!ms) ms = 0
            this.lastSet = control.millis()
            if (this.autoOff === undefined)
                jacdac.bus.on(jacdac.SELF_ANNOUNCE, () => {
                    if (
                        this.angle != null &&
                        this.autoOff &&
                        control.millis() - this.lastSet > this.autoOff
                    ) {
                        this.turnOff()
                    }
                })

            this.autoOff = ms
        }

        turnOff() {
            this.sync(undefined)
        }

        /**
         * Set the servo angle
         */
        //% group="Servos"
        //% weight=100
        //% blockId=jdservoservosetangle block="set %servo angle to $degrees=protractorPicker °"
        //% degrees.defl=90
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        setAngle(degrees: number) {
            this.sync(degrees)
        }

        /**
         * Set the throttle on a continuous servo
         * @param speed the throttle of the motor from -100% to 100%
         */
        //% group="Servos"
        //% weight=99
        //% blockId=jdservoservorun block="run continuous %servo at $speed=speedPicker \\%"
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        run(speed: number): void {
            this.setAngle(Math.map(speed, -100, 100, 0, 180))
        }
    }

    //% fixedInstance whenUsed block="servo1"
    export const servo1 = new ServoClient("servo1")
}
