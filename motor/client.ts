namespace modules {
    /**
     * A bi-directional DC motor.
     **/
    //% fixedInstances blockGap=8
    export class MotorClient extends jacdac.Client {
        private readonly _speed: jacdac.RegisterClient<[number]>
        private readonly _enabled: jacdac.RegisterClient<[boolean]>
        private readonly _loadTorque: jacdac.RegisterClient<[number]>
        private readonly _loadRotationSpeed: jacdac.RegisterClient<[number]>
        private readonly _reversible: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_MOTOR, role)

            this._speed = this.addRegister<[number]>(
                jacdac.MotorReg.Speed,
                jacdac.MotorRegPack.Speed
            )
            this._enabled = this.addRegister<[boolean]>(
                jacdac.MotorReg.Enabled,
                jacdac.MotorRegPack.Enabled
            )
            this._loadTorque = this.addRegister<[number]>(
                jacdac.MotorReg.LoadTorque,
                jacdac.MotorRegPack.LoadTorque,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._loadRotationSpeed = this.addRegister<[number]>(
                jacdac.MotorReg.LoadRotationSpeed,
                jacdac.MotorRegPack.LoadRotationSpeed,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._reversible = this.addRegister<[boolean]>(
                jacdac.MotorReg.Reversible,
                jacdac.MotorRegPack.Reversible,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
        * Relative speed of the motor. Use positive/negative values to run the motor forwards and backwards.
        * Positive is recommended to be clockwise rotation and negative counterclockwise. A speed of ``0`` 
        * while ``enabled`` acts as brake.
        */
        //% callInDebugger
        //% group="Motor"
        //% weight=100
        speed(): number {
            this.start();            
            const values = this._speed.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Relative speed of the motor. Use positive/negative values to run the motor forwards and backwards.
        * Positive is recommended to be clockwise rotation and negative counterclockwise. A speed of ``0`` 
        * while ``enabled`` acts as brake.
        */
        //% group="Motor"
        //% weight=99
        //% value.min=-100
        //% value.max=100
        //% value.defl=100
        setSpeed(value: number) {
            this.start();
            const values = this._speed.values as any[];
            values[0] = value / 100;
            this._speed.values = values as [number];
        }

        /**
         * Turn the power to the motor on/off.
         */
        //% callInDebugger
        //% group="Motor"
        //% block="%motor enabled"
        //% blockId=jacdac_motor_enabled___get
        //% weight=98
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Turn the power to the motor on/off.
         */
        //% group="Motor"
        //% blockId=jacdac_motor_enabled___set
        //% block="set %motor %value=toggleOnOff"
        //% weight=97
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value ? 1 : 0
            this._enabled.values = values as [boolean]
        }

        /**
         * Torque required to produce the rated power of an electrical motor at load speed.
         */
        //% callInDebugger
        //% group="Motor"
        //% weight=96
        loadTorque(): number {
            this.start()
            const values = this._loadTorque.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Revolutions per minute of the motor under full load.
         */
        //% callInDebugger
        //% group="Motor"
        //% weight=95
        loadRotationSpeed(): number {
            this.start()
            const values = this._loadRotationSpeed.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Reversible.
         */
        //% callInDebugger
        //% group="Motor"
        //% weight=95
        reversible(): boolean {
            this.start()
            const values = this._reversible.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Set the throttle on a DC motor
         * @param speed the throttle of the motor from -100% to 100%
         */
        //% group="Motor"
        //% weight=100
        //% blockId=jdmotorrun block="run %motor at $speed=speedPicker \\%"
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        run(speed: number): void {
            speed = Math.clamp(-100, 100, speed)
            if (speed == 0) this.setEnabled(false)
            else {
                this.setSpeed(speed)
                this.setEnabled(true)
            }
        }
    }

    //% fixedInstance whenUsed
    export const motor1 = new MotorClient("motor1")
}
