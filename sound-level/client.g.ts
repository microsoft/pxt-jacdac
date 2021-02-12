namespace modules {
    /**
     * A sound level detector sensor, gives a relative indication of the sound level.
     **/
    //% fixedInstances blockGap=8
    export class SoundLevelClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_SOUND_LEVEL, role, "u0.16");
            
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