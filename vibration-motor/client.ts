namespace modules {
    const T_DIT = 50
    const T_REST = 120

    /**
     * A vibration motor.
     **/
    //% fixedInstances blockGap=8
    export class VibrationMotorClient extends jacdac.Client {
        private readonly _enabled: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role)
        }

        /**
         * Starts a vibration pattern.
         */
        //% group="Vibration motor"
        //% blockId=jacdac_vibration_vibrate_multi_cmd
        //% block="%vibration vibrate %millis ms at %intensity \\%"
        //% inlineInputMode=inline
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
         * Starts a vibration pattern. Pattern of vibrations: "." dit, "-" dat, " " space, "_" low dat, "=" hight dat, "'" high dit, "," low dit.
         */
        //% group="Vibration motor"
        //% blockId=jacdac_vibration_vibrate_pattern
        //% block="%vibration vibrate pattern %pattern"
        //% pattern.defl=".-"
        vibratePattern(pattern: string): void {
            if (!pattern) {
                this.stop()
                return
            }
            const patterns: {
                [index: string]: {
                    name: string
                    duration: number
                    volume: number
                }
            } = {
                ".": {
                    name: "dit",
                    duration: 1,
                    volume: 0.6,
                },
                "-": {
                    name: "dat",
                    duration: 3,
                    volume: 0.6,
                },
                " ": {
                    name: "space",
                    duration: 1,
                    volume: 0,
                },
                _: {
                    name: "low dat",
                    duration: 3,
                    volume: 0.2,
                },
                "=": {
                    name: "hight dat",
                    duration: 3,
                    volume: 1,
                },
                "'": {
                    name: "high dit",
                    duration: 1,
                    volume: 1,
                },
                ",": {
                    name: "low dit",
                    duration: 1,
                    volume: 0.2,
                },
            }
            const multi: number[] = []
            for (const c of pattern) {
                const p = patterns[c]
                if (!p) continue
                multi.push(p.duration * T_DIT)
                multi.push(p.volume * 100)

                multi.push(T_REST)
                multi.push(0)
            }
            this.vibrateMulti(multi)
        }

        /**
         * Starts a sequence of vibration and pauses. To stop any existing vibration, send an empty payload.
         */
        //% group="Vibration motor"
        //% weight=95
        vibrateMulti(pattern: number[]) {
            pattern = pattern || []

            const payload: number[][] = []
            for (let i = 0; i < pattern.length; i += 2) {
                payload.push([pattern[i] >> 3, pattern[i + 1] / 100])
            }

            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.VibrationMotorCmd.Vibrate,
                    jacdac.VibrationMotorCmdPack.Vibrate,
                    [payload]
                )
            )
        }

        /**
         * Stops any vibration currently running.
         */
        //% group="Vibration motor"
        //% weight=95
        stop() {
            this.vibrateMulti([])
        }
    }

    //% fixedInstance whenUsed weight=1 block="vibration motor1"
    export const vibrationMotor1 = new VibrationMotorClient("vibration Motor1")
    //% fixedInstance whenUsed weight=1 block="vibration motor2"
    export const vibrationMotor2 = new VibrationMotorClient("vibration Motor2")
}
