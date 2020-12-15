namespace modules {
    //% fixedInstances
    export class MotorClient extends jacdac.Client {
        constructor(requiredDevice: string = null) {
            super("motor", jacdac.SRV_MOTOR, requiredDevice);
        }

        break() {
            this.run(0.0000001)
        }

        /**
         * Set the throttle on a DC motor
         * @param speed the throttle of the motor from -100% to 100%
         */
        //% group="Servos"
        //% weight=99
        //% blockId=jdmotorrun block="jacdac motor %motor run at %speed=speedPicker \\%"
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        run(speed: number): void {
            speed = Math.clamp(-100, 100, speed)
            if (speed == 0)
                this.setRegInt(jacdac.MotorReg.Enabled, 0)
            else {
                this.setRegInt(jacdac.MotorReg.Duty, Math.clamp(-0x7fff, 0x7fff, (speed * 327.67) | 0))
                this.setRegInt(jacdac.MotorReg.Enabled, 1)
            }
        }
    }

    //% fixedInstance whenUsed
    export const motor = new MotorClient();
}