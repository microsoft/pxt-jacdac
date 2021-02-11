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
        //% group="MIDI output" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): boolean {
            this._enabled.pauseUntilValues();
            const values = this._enabled.values as any[];
            return !!values[0];
        }
        /**
        * Opens or closes the port to the MIDI device
        */
        //% group="MIDI output" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const midiOutput = new MidiOutputClient("midi Output");
}