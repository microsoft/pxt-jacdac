namespace modules {
    //% fixedInstances
    export class SoundLevelClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_SOUND_LEVEL, role, "u0.16");
        }
    
        /**
        * The sound level detected by the microphone
        */
        //% blockId=jacdacsoundlevel101 block="%sensor sound level"
        //% group="reading"
        get reading(): number {
            // soundLevel
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const soundLevel = new SoundLevelClient("sound Level");
}