namespace servers {
    export class SoundPlayerServer extends jacdac.Server {
        constructor() {
            super(jacdac.SRV_SOUND_PLAYER)
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            // registers
            const oldVol = music.volume()
            const vol =
                (this.handleRegValue(
                    pkt,
                    jacdac.SoundPlayerReg.Volume,
                    jacdac.SoundPlayerRegPack.Volume,
                    oldVol / 255
                ) *
                    255) |
                0
            if (vol !== oldVol) music.setVolume(vol)

            // commands
            switch (pkt.serviceCommand) {
                case jacdac.SoundPlayerCmd.Play:
                    this.handlePlayCommand(pkt)
                    break
                case jacdac.SoundPlayerCmd.ListSounds:
                    this.handleListSoundsCommand(pkt)
                    break
                default:
                    pkt.possiblyNotImplemented()
                    break
            }
        }

        private handlePlayCommand(pkt: jacdac.JDPacket) {
            const [name] = pkt.jdunpack<[string]>(jacdac.SoundPlayerCmdPack.Play)
            if (name) {
                music.stopAllSounds()
                const exp = new SoundExpression(name)
                exp.play()
            }
        }

        private handleListSoundsCommand(pkt: jacdac.JDPacket) {
            const sounds: [number, string][] = [
                [0, "giggle"],
                [0, "happy"],
                [0, "hello"],
                [0, "mysterious"],
                [0, "sad"],
                [0, "slide"],
                [0, "soaring"],
                [0, "spring"],
                [0, "twinkle"],
                [0, "yawn"],
            ]
            jacdac.OutPipe.respondForEach(pkt, sounds, k => {
                return jacdac.jdpack<[number, string]>("u32 s", k)
            })
        }
    }

    //% fixedInstance whenUsed block="sound player"
    export const soundPlayerServer = new SoundPlayerServer()
}
