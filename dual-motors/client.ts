namespace modules {
    /**
     * A synchronized pair of motors.
     **/
    //% fixedInstances blockGap=8
    export class DualMotorsClient extends jacdac.Client {
        private readonly _speed: jacdac.RegisterClient<[number, number]>
        private readonly _enabled: jacdac.RegisterClient<[boolean]>
        private readonly _loadTorque: jacdac.RegisterClient<[number]>
        private readonly _loadRotationSpeed: jacdac.RegisterClient<[number]>
        private readonly _reversible: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_DUAL_MOTORS, role)

            this._speed = this.addRegister<[number, number]>(
                jacdac.DualMotorsReg.Speed,
                jacdac.DualMotorsRegPack.Speed
            )
            this._enabled = this.addRegister<[boolean]>(
                jacdac.DualMotorsReg.Enabled,
                jacdac.DualMotorsRegPack.Enabled
            )
            this._loadTorque = this.addRegister<[number]>(
                jacdac.DualMotorsReg.LoadTorque,
                jacdac.DualMotorsRegPack.LoadTorque,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._loadRotationSpeed = this.addRegister<[number]>(
                jacdac.DualMotorsReg.LoadRotationSpeed,
                jacdac.DualMotorsRegPack.LoadRotationSpeed,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._reversible = this.addRegister<[boolean]>(
                jacdac.DualMotorsReg.Reversible,
                jacdac.DualMotorsRegPack.Reversible,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Set the speed on a DC motor
         * @param speed the throttle of the motor from -100% to 100%
         */
        //% group="Motor"
        //% weight=100
        //% blockId=jacdac_dualmotors_speed_set block="run %motor at left $left \\% right $right \\%"
        //% left.shadow=speedPicker
        //% right.shadow=speedPicker
        run(left: number, right: number) {
            this.start()
            this.setEnabled(true)
            this.setSpeed(left, right)
        }

        private setSpeed(left: number, right: number) {
            const values = this._speed.values as any[]
            values[0] = left / 100
            values[1] = right / 100
            this._speed.values = values as [number, number]
        }

        /**
         * Unpower motor
         */
        //% group="Motor"
        //% weight=94
        //% blockId=jddualmotor block="stop %motor"
        stop() {
            this.start()
            this.setEnabled(false)
        }

        /**
         * Turn on motor and keep speed at 0
         */
        //% group="Motor"
        //% weight=93
        //% blockId=jddualmotorbrake block="brake %motor"
        brake() {
            this.start()
            this.setSpeed(0, 0)
            this.setEnabled(true)
        }

        /**
         * Relative speed of the motors. Use positive/negative values to run the motor forwards and backwards.
         * A speed of ``0`` while ``enabled`` acts as brake.
         */
        //% callInDebugger
        //% group="Motor"
        //% block="%dualmotors speed Left"
        //% blockId=jacdac_dualmotors_speed_left_get
        //% weight=100
        speedLeft(): number {
            this.start()
            const values = this._speed.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Relative speed of the motors. Use positive/negative values to run the motor forwards and backwards.
         * A speed of ``0`` while ``enabled`` acts as brake.
         */
        //% callInDebugger
        //% group="Motor"
        //% block="%dualmotors speed Right"
        //% blockId=jacdac_dualmotors_speed_right_get
        //% weight=98
        speedRight(): number {
            this.start()
            const values = this._speed.pauseUntilValues() as any[]
            return values[1] * 100
        }

        /**
         * Turn the power to the motors on/off.
         */
        //% callInDebugger
        //% group="Motor"
        //% block="%dualmotors enabled"
        //% blockId=jacdac_dualmotors_enabled___get
        //% weight=96
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Turn the power to the motors on/off.
         */
        //% group="Motor"
        //% blockId=jacdac_dualmotors_enabled___set
        //% block="set %dualmotors %value=toggleOnOff"
        //% weight=95
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value ? 1 : 0
            this._enabled.values = values as [boolean]
        }

        /**
         * Torque required to produce the rated power of an each electrical motor at load speed.
         */
        //% callInDebugger
        //% group="Motor"
        //% weight=94
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
        //% weight=93
        loadRotationSpeed(): number {
            this.start()
            const values = this._loadRotationSpeed.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Indicates if the motors can run backwards.
         */
        //% callInDebugger
        //% group="Motor"
        //% weight=92
        reversible(): boolean {
            this.start()
            const values = this._reversible.pauseUntilValues() as any[]
            return !!values[0]
        }
    }
    //% fixedInstance whenUsed weight=1 block="dual motors1"
    export const dualMotors1 = new DualMotorsClient("dual Motors1")
}
