namespace modules {
    /**
     * A sound level detector sensor, gives a relative indication of the sound level.
     **/
    //% fixedInstances blockGap=8
    export class SoundLevelClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_SOUND_LEVEL, role, "u0.16");

            this._enabled = this.addRegister<[boolean]>(jacdac.SoundLevelReg.Enabled, "u8");            
        }
    

        /**
        * The sound level detected by the microphone
        */
        //% blockId=jacdac_soundlevel_sound_level___get
        //% group="Sound"
        //% block="%soundlevel sound level" callInDebugger
        soundLevel(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Turn on or off the sensor.
        */
        //% blockId=jacdac_soundlevel_enabled___get
        //% group="Sound"
        //% block="%soundlevel enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Turn on or off the sensor.
        */
        //% blockId=jacdac_soundlevel_enabled___set
        //% group="Sound"
        //% block="set %soundlevel %value=toggleOnOff"
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

        /**
         * Raised when a loud sound is detected
         */
        //% blockId=jacdac_on_soundlevel_loud
        //% block="loud" blockSetVariable=myModule
        //% group="Sound"
        onLoud(handler: () => void) {
            this.registerEvent(jacdac.SoundLevelEvent.Loud, handler);
        }
        /**
         * Raised when a period of quietness is detected
         */
        //% blockId=jacdac_on_soundlevel_quiet
        //% block="quiet" blockSetVariable=myModule
        //% group="Sound"
        onQuiet(handler: () => void) {
            this.registerEvent(jacdac.SoundLevelEvent.Quiet, handler);
        }
    }
    //% fixedInstance whenUsed
    export const soundLevel = new SoundLevelClient("sound Level");
}