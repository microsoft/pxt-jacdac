namespace modules {
    /**
     * A sound level detector sensor, gives a relative indication of the sound level.
     **/
    //% fixedInstances blockGap=8
    export class SoundLevelClient extends jacdac.SimpleSensorClient {
        private readonly _enabled: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(
                jacdac.SRV_SOUND_LEVEL,
                role,
                jacdac.SoundLevelRegPack.SoundLevel
            )

            this._enabled = this.addRegister<[boolean]>(
                jacdac.SoundLevelReg.Enabled,
                jacdac.SoundLevelRegPack.Enabled
            )
        }

        /**
         * The sound level detected by the microphone
         */
        //% callInDebugger
        //% group="Sound"
        //% block="%soundlevel sound level"
        //% blockId=jacdac_soundlevel_sound_level___get
        //% weight=100
        soundLevel(): number {
            return this.reading() * 100
        }

        /**
         * Turn on or off the microphone.
         */
        //% callInDebugger
        //% group="Sound"
        //% block="%soundlevel enabled"
        //% blockId=jacdac_soundlevel_enabled___get
        //% weight=99
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Turn on or off the microphone.
         */
        //% group="Sound"
        //% blockId=jacdac_soundlevel_enabled___set
        //% block="set %soundlevel %value=toggleOnOff"
        //% weight=98
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value ? 1 : 0
            this._enabled.values = values as [boolean]
        }

        /**
         * Run code when the sound level changes by the given threshold value.
         */
        //% group="Sound"
        //% blockId=jacdac_soundlevel_on_sound_level_change
        //% block="on %soundlevel sound level changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onSoundLevelChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="sound level1"
    export const soundLevel1 = new SoundLevelClient("sound Level1")
}
