namespace microbit {
    export class SoundLevel extends jacdac.SensorHost {
        constructor() {
            super("microbitSound", SRV_SOUND_LEVEL)
        }

        public serializeState(): Buffer {
            return jacdac.jdpack("u0.16", [input.soundLevel()/255]);
        }
    }
}