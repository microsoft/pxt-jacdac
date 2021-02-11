namespace modules {
    /**
     * A MIDI output device.
     **/
    //% fixedInstances blockGap=8
    export class MidiOutputClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_MIDI_OUTPUT, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const midiOutput = new MidiOutputClient("midi Output");
}