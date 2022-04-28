namespace jacdac {
    export class BuzzerServer extends jacdac.Server {
        constructor(options?: jacdac.ServerOptions) {
            super(jacdac.SRV_BUZZER, options)
        }

        handlePacket(pkt: JDPacket): void {
            const volume = music.volume() / 0xff
            const newVolume = this.handleRegValue(
                pkt,
                jacdac.BuzzerReg.Volume,
                jacdac.BuzzerRegPack.Volume,
                volume
            )
            if (newVolume != volume && pkt.isRegSet)
                music.setVolume(newVolume * 0xff)

            if (pkt.serviceCommand == jacdac.BuzzerCmd.PlayTone) {
                pkt.markHandled()
                const [period, duty, duration] = pkt.jdunpack<
                    [number, number, number]
                >(jacdac.BuzzerCmdPack.PlayTone)
                const frequency = 1000000 / period
                music.stopAllSounds()
                music.playTone(frequency, duration)
            }
        }
    }
}
