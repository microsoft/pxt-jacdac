namespace modules {
    //% fixedInstances
    //% blockGap=8
    export class SoundLevelClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_SOUND_LEVEL, role, "u0.16");
        }

        /**
         * Reads the microphone level between 0 (silent) and 255 (loud)
         */
        //% blockId=jacdacsoundlevelreading block="%sensor sound level"
        //% group="Sound Level"
        get soundLevel(): number {
            // map 0..1 to 0..255
            const [value] = this.values();
            return ((value || 0) * 0xff) >> 0;
        }
    }

    //% fixedInstance whenUsed
    export const soundLevel = new SoundLevelClient("soundLevel");
}