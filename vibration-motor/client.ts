namespace modules {
    /**
     * A vibration motor.
     **/
    //% fixedInstances blockGap=8
    export class VibrationMotorClient extends jacdac.Client {
        private readonly _enabled: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role)

            this._enabled = this.addRegister<[boolean]>(
                jacdac.VibrationMotorReg.Enabled,
                "u8"
            )
        }

        /**
         * Determines if the vibration motor responds to vibrate commands.
         */
        //% callInDebugger
        //% group="Vibration motor"
        //% block="%vibration enabled"
        //% blockId=jacdac_vibration_enabled___get
        //% weight=100
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Determines if the vibration motor responds to vibrate commands.
         */
        //% group="Vibration motor"
        //% blockId=jacdac_vibration_enabled___set
        //% block="set %vibration %value=toggleOnOff"
        //% weight=99
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value ? 1 : 0
            this._enabled.values = values as [boolean]
        }

        /**
         * Starts a vibration pattern.
         */
        //% group="Vibration motor"
        //% blockId=jacdac_vibration_vibrate_multi_cmd
        //% block="%vibration vibrate $millis ms at $intensity %"
        //% weight=98
        //% millis.min=0
        //% millis.defl=500
        //% intensity.min=0
        //% intensity.max=100
        //% intensity.defl=50
        //% millis2.min=0
        //% millis2.defl=200
        //% intensity2.min=0
        //% intensity2.max=100
        //% intensity2.defl=0
        //% repeat.defl=1
        //% repeat.min=1
        //% repeat.max=8
        vibrate(
            millis: number,
            intensity: number,
            millis2?: number,
            intensity2?: number,
            repeat?: number
        ): void {
            millis2 = isNaN(millis2) ? 0 : millis2
            intensity2 = isNaN(intensity2) ? 0 : intensity2
            repeat = isNaN(repeat) ? 1 : repeat
            const pattern: number[] = []
            for (let i = 0; i < repeat; ++i) {
                if (millis > 0) {
                    pattern.push(millis)
                    pattern.push(intensity)
                }
                if (millis2 > 0) {
                    pattern.push(millis2)
                    pattern.push(intensity2)
                }
            }
            this.vibrateMulti(pattern)
        }

        /**
         * Starts a sequence of vibration and pauses. To stop any existing vibration, send an empty payload.
         */
        //% group="Vibration motor"
        //% weight=95
        vibrateMulti(pattern: number[]) {
            if (!pattern) return

            const payload: number[][] = []
            for (let i = 0; i < pattern.length; i += 2) {
                payload.push([pattern[i] >> 3, pattern[i + 1] / 100])
            }

            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.VibrationMotorCmd.Vibrate,
                    "r: u8 u0.8",
                    [payload]
                )
            )
        }
    }
    //% fixedInstance whenUsed block="vibration motor 1"
    export const vibrationMotor1 = new VibrationMotorClient("vibration Motor1")
}
