namespace modules {
    /**
     * A MIDI output device.
     **/
    //% fixedInstances blockGap=8
    export class MidiOutputClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_MIDI_OUTPUT, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.MidiOutputReg.Enabled, "u8");            
        }
    

        /**
        * Opens or closes the port to the MIDI device
        */
        //% callInDebugger
        //% group="Sound"
        //% block="%midioutput enabled"
        //% blockId=jacdac_midioutput_enabled___get
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Opens or closes the port to the MIDI device
        */
        //% blockId=jacdac_midioutput_enabled___set
        //% group="Sound"
        //% block="set %midioutput %value=toggleOnOff"
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }
 

    }
    //% fixedInstance whenUsed
    export const midiOutput = new MidiOutputClient("midi Output");
}