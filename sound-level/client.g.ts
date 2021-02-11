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
        //% blockId=jacdacsoundlevel_101_0
        //% group="Sound level" blockSetVariable=myModule
        //% blockCombine block="sound_level" callInDebugger
        get soundLevel(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const soundLevel = new SoundLevelClient("sound Level");
}