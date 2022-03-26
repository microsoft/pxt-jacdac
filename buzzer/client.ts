namespace modules {

    function tonePayload(frequency: number, ms: number, volume: number) {
        const period = Math.idiv(1000000, frequency)
        const duty = (period * volume) >> 11
        return jacdac.jdpack<[number, number, number]>("u16 u16 u16", [
            period,
            duty,
            ms,
        ])
    }

    //% fixedInstances
    export class BuzzerClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_BUZZER, role)
        }

        /**
         * Play a tone through the speaker for some amount of time.
         * @param frequency pitch of the tone to play in Hertz (Hz), eg: 440
         * @param ms tone duration in milliseconds (ms), eg: 500
         */
        //% blockId=jdmusic_play_note block="play %music tone|at %note|for %duration"
        //% note.defl=440
        //% duration.defl=500
        //% weight=76 blockGap=8
        //% group="Music"
        playTone(frequency: number, ms: number, volume = 255): void {
            this.sendCommand(
                jacdac.JDPacket.from(
                    jacdac.BuzzerCmd.PlayTone,
                    tonePayload(frequency, ms, volume << 2)
                )
            )
        }
    }

    //% fixedInstance whenUsed
    export const buzzer1 = new BuzzerClient("buzzer1")
}
