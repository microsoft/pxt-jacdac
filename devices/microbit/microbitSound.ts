namespace servers {
    export class SoundLevelServer extends jacdac.SensorServer {
        enabled: boolean = false
        private registered = false
        // Sensitivity	-38dB ±3dB @ 94dB SPL
        minDecibels: number = 56
        maxDecibels: number = 132
        loudThreshold: number = 0.5
        quietThreshold: number = 0.2

        constructor() {
            super(jacdac.SRV_SOUND_LEVEL)
        }

        private setThresholds() {
            input.setSoundThreshold(
                SoundThreshold.Loud,
                255 * this.loudThreshold
            )
            input.setSoundThreshold(
                SoundThreshold.Quiet,
                255 * this.quietThreshold
            )
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            const oldEnabled = this.enabled
            this.enabled = this.handleRegBool(
                pkt,
                jacdac.SoundLevelReg.Enabled,
                this.enabled
            )
            this.loudThreshold = this.handleRegValue(
                pkt,
                jacdac.SoundLevelReg.LoudThreshold,
                jacdac.SoundLevelRegPack.LoudThreshold,
                this.loudThreshold
            )
            this.quietThreshold = this.handleRegValue(
                pkt,
                jacdac.SoundLevelReg.QuietThreshold,
                jacdac.SoundLevelRegPack.QuietThreshold,
                this.quietThreshold
            )
            super.handlePacket(pkt)

            if (this.enabled && oldEnabled !== this.enabled)
                this.registerEvents()
            if (this.enabled) this.setThresholds()
            pkt.possiblyNotImplemented()
        }

        private registerEvents() {
            if (this.enabled) {
                this.registered = true
                input.onSound(DetectedSound.Loud, function () {
                    this.sendEvent(jacdac.SoundLevelEvent.Loud)
                })
                input.onSound(DetectedSound.Quiet, function () {
                    this.sendEvent(jacdac.SoundLevelEvent.Quiet)
                })
            } else if (this.registered) {
                input.onSound(DetectedSound.Loud, function () {})
                input.onSound(DetectedSound.Quiet, function () {})
                this.registered = false
            }
        }

        public serializeState(): Buffer {
            const soundLevel = this.enabled ? input.soundLevel() / 255.0 : 0.0
            return jacdac.jdpack(jacdac.SoundLevelRegPack.SoundLevel, [soundLevel])
        }
    }

    //% fixedInstance whenUsed block="sound level"
    export const soundLevelServer = new SoundLevelServer()
}
