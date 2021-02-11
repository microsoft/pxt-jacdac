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
        //% group="Sound level" blockSetVariable=myModule
        //% blockCombine block="sound level" callInDebugger
        get soundLevel(): number {
            const values = this.values() as any[];
            return values[0];
        } 

        /**
         * Raised when a loud sound is detected
         */
        //% block="loud" blockSetVariable=myModule
        //% group="Sound level" blockCombine
        onLoud(handler: () => void) {
            this.registerEvent(jacdac.SoundLevelEvent.Loud, handler);
        }
        /**
         * Raised when a period of quietness is detected
         */
        //% block="quiet" blockSetVariable=myModule
        //% group="Sound level" blockCombine
        onQuiet(handler: () => void) {
            this.registerEvent(jacdac.SoundLevelEvent.Quiet, handler);
        }
    }
    //% fixedInstance whenUsed
    export const soundLevel = new SoundLevelClient("sound Level");
}