namespace servers {
    export class BuzzerServer extends jacdac.Server {
        constructor() {
            super(jacdac.SRV_BUZZER)
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            // registers
            const oldVol = music.volume()
            const vol =
                (this.handleRegValue(
                    pkt,
                    jacdac.BuzzerReg.Volume,
                    jacdac.BuzzerRegPack.Volume,
                    oldVol / 0xff
                ) *
                    0xff) |
                0
            if (vol !== oldVol) music.setVolume(vol)

            // commands
            switch (pkt.serviceCommand) {
                case jacdac.BuzzerCmd.PlayTone:
                    this.handlePlayToneCommand(pkt)
                    break
                default:
                    pkt.possiblyNotImplemented()
                    break
            }
        }

        private handlePlayToneCommand(pkt: jacdac.JDPacket) {
            const [period, duty, duration] =
                pkt.jdunpack<[number, number, number]>(jacdac.BuzzerCmdPack.PlayTone)
            const frequency = 1000000 / period
            music.stopAllSounds()
            music.playTone(frequency, duration)
        }
    }

    //% fixedInstance whenUsed block="buzzer"
    export const buzzerServer = new BuzzerServer()
}
