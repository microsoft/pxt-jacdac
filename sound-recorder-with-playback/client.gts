namespace modules {
    /**
     * A record and replay module. You can record a few seconds of audio and play it back.
     **/
    //% fixedInstances blockGap=8
    export class SoundRecorderWithPlaybackClient extends jacdac.Client {

        private readonly _status : jacdac.RegisterClient<[jacdac.SoundRecorderWithPlaybackStatus]>;
        private readonly _time : jacdac.RegisterClient<[number]>;
        private readonly _volume : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_SOUND_RECORDER_WITH_PLAYBACK, role);

            this._status = this.addRegister<[jacdac.SoundRecorderWithPlaybackStatus]>(jacdac.SoundRecorderWithPlaybackReg.Status, jacdac.SoundRecorderWithPlaybackRegPack.Status);
            this._time = this.addRegister<[number]>(jacdac.SoundRecorderWithPlaybackReg.Time, jacdac.SoundRecorderWithPlaybackRegPack.Time);
            this._volume = this.addRegister<[number]>(jacdac.SoundRecorderWithPlaybackReg.Volume, jacdac.SoundRecorderWithPlaybackRegPack.Volume);            
        }
    

        /**
        * Indicate the current status
        */
        //% callInDebugger
        //% group="Sound"
        //% weight=100
        status(): jacdac.SoundRecorderWithPlaybackStatus {
            this.start();            
            const values = this._status.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Milliseconds of audio recorded.
        */
        //% callInDebugger
        //% group="Sound"
        //% weight=99
        time(): number {
            this.start();            
            const values = this._time.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Playback volume control
        */
        //% callInDebugger
        //% group="Sound"
        //% block="%soundrecorderwithplayback volume"
        //% blockId=jacdac_soundrecorderwithplayback_volume___get
        //% weight=98
        volume(): number {
            this.start();            
            const values = this._volume.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Playback volume control
        */
        //% group="Sound"
        //% blockId=jacdac_soundrecorderwithplayback_volume___set
        //% block="set %soundrecorderwithplayback volume to %value"
        //% weight=97
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setVolume(value: number) {
            this.start();
            const values = this._volume.values as any[];
            values[0] = value / 100;
            this._volume.values = values as [number];
        }


        /**
        * Replay recorded audio.
        */
        //% group="Sound"
        //% blockId=jacdac_soundrecorderwithplayback_play_cmd
        //% block="%soundrecorderwithplayback play"
        //% weight=96
        play(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.SoundRecorderWithPlaybackCmd.Play))
        }

        /**
        * Record audio for N milliseconds.
        */
        //% group="Sound"
        //% blockId=jacdac_soundrecorderwithplayback_record_cmd
        //% block="%soundrecorderwithplayback record $duration"
        //% weight=95
        record(duration: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.SoundRecorderWithPlaybackCmd.Record, "u16", [duration]))
        }

        /**
        * Cancel record, the `time` register will be updated by already cached data.
        */
        //% group="Sound"
        //% blockId=jacdac_soundrecorderwithplayback_cancel_cmd
        //% block="%soundrecorderwithplayback cancel"
        //% weight=94
        cancel(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.SoundRecorderWithPlaybackCmd.Cancel))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="sound recorder with playback1"
    export const soundRecorderWithPlayback1 = new SoundRecorderWithPlaybackClient("sound Recorder With Playback1");
}