namespace modules {
    /**
     * A sound level detector sensor, gives a relative indication of the sound level.
     **/
    //% fixedInstances blockGap=8
    export class SoundLevelClient extends jacdac.SensorClient<[number]> {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;
        private readonly _minDecibels : jacdac.RegisterClient<[number]>;
        private readonly _maxDecibels : jacdac.RegisterClient<[number]>;
        private readonly _loudThreshold : jacdac.RegisterClient<[number]>;
        private readonly _quietThreshold : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_SOUND_LEVEL, role, "u0.16");

            this._enabled = this.addRegister<[boolean]>(jacdac.constants.SoundLevelReg.Enabled, "u8");
            this._minDecibels = this.addRegister<[number]>(jacdac.constants.SoundLevelReg.MinDecibels, "i16");
            this._maxDecibels = this.addRegister<[number]>(jacdac.constants.SoundLevelReg.MaxDecibels, "i16");
            this._loudThreshold = this.addRegister<[number]>(jacdac.constants.SoundLevelReg.LoudThreshold, "u0.16");
            this._quietThreshold = this.addRegister<[number]>(jacdac.constants.SoundLevelReg.QuietThreshold, "u0.16");            
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
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
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
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Turn on or off the microphone.
        */
        //% group="Sound"
        //% blockId=jacdac_soundlevel_enabled___set
        //% block="set %soundlevel %value=toggleOnOff"
        //% weight=98
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * The minimum power value considered by the sensor.
        * If both ``min_decibels`` and ``max_decibels`` are supported,
        * the volume in deciment can be linearly interpolated between
        * ``[min_decibels, max_decibels]``.
        */
        //% callInDebugger
        //% group="Sound"
        //% weight=97
        minDecibels(): number {
            this.start();            
            const values = this._minDecibels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The minimum power value considered by the sensor.
        * If both ``min_decibels`` and ``max_decibels`` are supported,
        * the volume in deciment can be linearly interpolated between
        * ``[min_decibels, max_decibels]``.
        */
        //% group="Sound"
        //% weight=96
        setMinDecibels(value: number) {
            this.start();
            const values = this._minDecibels.values as any[];
            values[0] = value;
            this._minDecibels.values = values as [number];
        }

        /**
        * The maximum power value considered by the sensor.
        * If both ``min_decibels`` and ``max_decibels`` are supported,
        * the volume in deciment can be linearly interpolated between
        * ``[min_decibels, max_decibels]``.
        */
        //% callInDebugger
        //% group="Sound"
        //% weight=95
        maxDecibels(): number {
            this.start();            
            const values = this._maxDecibels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The maximum power value considered by the sensor.
        * If both ``min_decibels`` and ``max_decibels`` are supported,
        * the volume in deciment can be linearly interpolated between
        * ``[min_decibels, max_decibels]``.
        */
        //% group="Sound"
        //% weight=94
        setMaxDecibels(value: number) {
            this.start();
            const values = this._maxDecibels.values as any[];
            values[0] = value;
            this._maxDecibels.values = values as [number];
        }

        /**
        * The sound level to trigger a loud event.
        */
        //% callInDebugger
        //% group="Sound"
        //% weight=93
        loudThreshold(): number {
            this.start();            
            const values = this._loudThreshold.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The sound level to trigger a loud event.
        */
        //% group="Sound"
        //% weight=92
        //% value.min=0
        //% value.max=1
        setLoudThreshold(value: number) {
            this.start();
            const values = this._loudThreshold.values as any[];
            values[0] = value;
            this._loudThreshold.values = values as [number];
        }

        /**
        * The sound level to trigger a quite event.
        */
        //% callInDebugger
        //% group="Sound"
        //% weight=91
        quietThreshold(): number {
            this.start();            
            const values = this._quietThreshold.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The sound level to trigger a quite event.
        */
        //% group="Sound"
        //% weight=90
        //% value.min=0
        //% value.max=1
        setQuietThreshold(value: number) {
            this.start();
            const values = this._quietThreshold.values as any[];
            values[0] = value;
            this._quietThreshold.values = values as [number];
        }
 

        /**
         * Raised when a loud sound is detected
         */
        //% group="Sound"
        //% blockId=jacdac_on_soundlevel_loud
        //% block="on %soundlevel loud"
        //% weight=89
        onLoud(handler: () => void): void {
            this.registerEvent(jacdac.constants.SoundLevelEvent.Loud, handler);
        }
        /**
         * Raised when a period of quietness is detected
         */
        //% group="Sound"
        //% blockId=jacdac_on_soundlevel_quiet
        //% block="on %soundlevel quiet"
        //% weight=88
        onQuiet(handler: () => void): void {
            this.registerEvent(jacdac.constants.SoundLevelEvent.Quiet, handler);
        }
    
    }
    //% fixedInstance whenUsed
    export const soundLevel = new SoundLevelClient("sound Level");
}