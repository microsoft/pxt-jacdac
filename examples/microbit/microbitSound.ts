namespace microbit {
    export class SoundLevel extends jacdac.SensorHost {
        enabled: boolean = true;
        // Sensitivity	-38dB ±3dB @ 94dB SPL
        minDecibels: number = 56
        maxDecibels: number = 132
        loudThreshold: number = 0.8;
        quietThreshold: number = 0.2;
        
        constructor() {
            super("microbitSound", 0x14ad1a5d)
            this.setThresholds()
            input.onSound(DetectedSound.Loud, function() {
                this.sendEvent(jacdac.SoundLevelEvent.Loud)
            })
            input.onSound(DetectedSound.Quiet, function () {
                this.sendEvent(jacdac.SoundLevelEvent.Quiet)
            })
        }

        private setThresholds() {
            input.setSoundThreshold(SoundThreshold.Loud, 255 * this.loudThreshold)
            input.setSoundThreshold(SoundThreshold.Quiet, 255 * this.quietThreshold)
        
        }
        public handlePacket(pkt: jacdac.JDPacket) {
            this.enabled = this.handleRegBool(pkt, jacdac.SoundLevelReg.Enabled, this.enabled);
            this.loudThreshold = this.handleRegValue(pkt, jacdac.SoundLevelReg.LoudThreshold, "u0.16", this.loudThreshold);
            this.quietThreshold = this.handleRegValue(pkt, jacdac.SoundLevelReg.QuietThreshold, "u0.16", this.quietThreshold);
            this.setThresholds()
        }

        public serializeState(): Buffer {
            return jacdac.jdpack("u0.16", [this.enabled ? input.soundLevel() / 255 : 0]);
        }
    }
}