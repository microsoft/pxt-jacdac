namespace modules {
    /**
     * Servo is a small motor with arm that can be pointing at a specific direction.
     * Typically a servo angle is between 0° and 180° where 90° is the middle resting position.
     *
     * The `min_pulse/max_pulse` may be read-only if the servo is permanently affixed to its Jacdac controller.
     **/
    //% fixedInstances blockGap=8
    export class ServoClient extends jacdac.SimpleSensorClient {
        private readonly _angle: jacdac.RegisterClient<[number]>
        private readonly _enabled: jacdac.RegisterClient<[boolean]>
        private readonly _offset: jacdac.RegisterClient<[number]>
        private readonly _minAngle: jacdac.RegisterClient<[number]>
        private readonly _minPulse: jacdac.RegisterClient<[number]>
        private readonly _maxAngle: jacdac.RegisterClient<[number]>
        private readonly _maxPulse: jacdac.RegisterClient<[number]>
        private readonly _stallTorque: jacdac.RegisterClient<[number]>
        private readonly _responseSpeed: jacdac.RegisterClient<[number]>
        private _continuousMode: boolean = undefined

        constructor(role: string) {
            super(jacdac.SRV_SERVO, role, jacdac.ServoRegPack.ActualAngle)

            this._angle = this.addRegister<[number]>(
                jacdac.ServoReg.Angle,
                jacdac.ServoRegPack.Angle
            )
            this._enabled = this.addRegister<[boolean]>(
                jacdac.ServoReg.Enabled,
                jacdac.ServoRegPack.Enabled
            )
            this._offset = this.addRegister<[number]>(
                jacdac.ServoReg.Offset,
                jacdac.ServoRegPack.Offset
            )
            this._minAngle = this.addRegister<[number]>(
                jacdac.ServoReg.MinAngle,
                jacdac.ServoRegPack.MinAngle,
                jacdac.RegisterClientFlags.Const
            )
            this._minPulse = this.addRegister<[number]>(
                jacdac.ServoReg.MinPulse,
                jacdac.ServoRegPack.MinPulse,
                jacdac.RegisterClientFlags.Optional
            )
            this._maxAngle = this.addRegister<[number]>(
                jacdac.ServoReg.MaxAngle,
                jacdac.ServoRegPack.MaxAngle,
                jacdac.RegisterClientFlags.Const
            )
            this._maxPulse = this.addRegister<[number]>(
                jacdac.ServoReg.MaxPulse,
                jacdac.ServoRegPack.MaxPulse,
                jacdac.RegisterClientFlags.Optional
            )
            this._stallTorque = this.addRegister<[number]>(
                jacdac.ServoReg.StallTorque,
                jacdac.ServoRegPack.StallTorque,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._responseSpeed = this.addRegister<[number]>(
                jacdac.ServoReg.ResponseSpeed,
                jacdac.ServoRegPack.ResponseSpeed,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )

            this.on(jacdac.CONNECT, () => {
                this._minAngle.query()
                this._maxAngle.query()
            })
        }

        /**
         * Specifies the angle of the arm (request).
         */
        //% callInDebugger
        //% group="Servo"
        //% block="%servo angle (°)"
        //% blockId=jacdac_servo_angle___get
        //% weight=100
        angle(): number {
            this.start()
            const values = this._angle.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Specifies the angle of the arm (request).
         */
        //% group="Servo"
        //% blockId=jacdac_servo_angle___set
        //% block="set %servo angle to %value (°)"
        //% weight=99
        //% value.min=0
        //% value.max=180
        setAngle(value: number) {
            this.internalSetAngle(value)
            this.internalSetContinuous(false)
        }

        private internalSetAngle(value: number) {
            this.start()
            this.setEnabled(true)
            const values = this._angle.values as any[]
            if (value !== values[0]) {
                values[0] = value
                this._angle.values = values as [number]
            }
        }

        private internalSetContinuous(enabled: boolean) {
            if (this._continuousMode !== enabled) {
                this._continuousMode = enabled
                this.setReg(jacdac.SystemReg.ClientVariant, "s", [
                    enabled ? `cont=1` : ``,
                ])
            }
        }

        /**
         * Set the throttle on a continuous servo
         * @param speed the throttle of the motor from -100% to 100%
         */
        //% weight=99
        //% blockId=jacdac_servo_run block="servo continuous %servo run at %speed=speedPicker \\%"
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        //% group="Servo (Continuous)"
        //% blockGap=8
        run(speed: number): void {
            const minAngle = this.minAngle()
            const maxAngle = this.maxAngle()
            const degrees = Math.map(
                Math.clamp(-100, 100, Math.round(speed)),
                -100,
                100,
                minAngle,
                maxAngle
            )
            this.internalSetAngle(degrees)
            this.internalSetContinuous(true)
        }

        /**
         * Stop sending commands to the servo so that its rotation will stop at the current position.
         */
        // On a normal servo this will stop the servo where it is, rather than return it to neutral position.
        // It will also not provide any holding force.
        //% weight=10
        //% blockId=jacdac_servo_stop block="servo continuous %servo stop"
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        //% group="Servo (Continuous)"
        //% blockGap=8
        stop() {
            this.run(0)
            this.setEnabled(false)
        }

        /**
         * Turn the power to the servo on/off.
         */
        //% callInDebugger
        //% group="Servo"
        //% block="%servo enabled"
        //% blockId=jacdac_servo_enabled___get
        //% weight=98
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Turn the power to the servo on/off.
         */
        //% group="Servo"
        //% blockId=jacdac_servo_enabled___set
        //% block="set %servo %value=toggleOnOff"
        //% weight=97
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            if (!!value !== !!values[0]) {
                values[0] = value ? 1 : 0
                this._enabled.values = values as [boolean]
            }
        }

        /**
         * Correction applied to the angle to account for the servo arm drift.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=96
        offset(): number {
            this.start()
            const values = this._offset.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Correction applied to the angle to account for the servo arm drift.
         */
        //% group="Servo"
        //% weight=95
        setOffset(value: number) {
            this.start()
            const values = this._offset.values as any[]
            if (value !== values[0]) {
                values[0] = value
                this._offset.values = values as [number]
            }
        }

        /**
         * Lowest angle that can be set, typiclly 0 °.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=94
        minAngle(): number {
            this.start()
            const values = this._minAngle.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The length of pulse corresponding to lowest angle.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=93
        minPulse(): number {
            this.start()
            const values = this._minPulse.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The length of pulse corresponding to lowest angle.
         */
        //% group="Servo"
        //% weight=92
        //% value.min=0
        //% value.max=65535
        //% value.defl=500
        setMinPulse(value: number) {
            this.start()
            const values = this._minPulse.values as any[]
            if (value !== values[0]) {
                values[0] = value
                this._minPulse.values = values as [number]
            }
        }

        /**
         * Highest angle that can be set, typically 180°.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=91
        maxAngle(): number {
            this.start()
            const values = this._maxAngle.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The length of pulse corresponding to highest angle.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=90
        maxPulse(): number {
            this.start()
            const values = this._maxPulse.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The length of pulse corresponding to highest angle.
         */
        //% group="Servo"
        //% weight=89
        //% value.min=0
        //% value.max=65535
        //% value.defl=2500
        setMaxPulse(value: number) {
            this.start()
            const values = this._maxPulse.values as any[]
            if (value !== values[0]) {
                values[0] = value
                this._maxPulse.values = values as [number]
            }
        }

        /**
         * The servo motor will stop rotating when it is trying to move a ``stall_torque`` weight at a radial distance of ``1.0`` cm.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=88
        stallTorque(): number {
            this.start()
            const values = this._stallTorque.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Time to move 60°.
         */
        //% callInDebugger
        //% group="Servo"
        //% weight=87
        responseSpeed(): number {
            this.start()
            const values = this._responseSpeed.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The current physical position of the arm, if the device has a way to sense the position.
         */
        //% callInDebugger
        //% group="Servo"
        //% block="%servo actual angle (°)"
        //% blockId=jacdac_servo_actual_angle___get
        //% weight=86
        actualAngle(): number {
            return this.reading()
        }

        /**
         * Run code when the actual angle changes by the given threshold value.
         */
        //% group="Servo"
        //% blockId=jacdac_servo_on_actual_angle_change
        //% block="on %servo actual angle changed by %threshold (°)"
        //% weight=85
        //% threshold.min=0
        //% threshold.defl=1
        onActualAngleChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="servo1"
    export const servo1 = new ServoClient("servo1")
}
