namespace modules {
    /**
     * A MIDI output device.
     **/
    //% fixedInstances blockGap=8
    export class MidiOutputClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_MIDI_OUTPUT, role);

            this._enabled = this.addRegister(jacdac.MidiOutputReg.Enabled, "u8");            
        }
    

        /**
        * Opens or closes the port to the MIDI device
        */
        //% group="MIDI output" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): number {
            const values = this._enabled.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Opens or closes the port to the MIDI device
        */
        //% group="MIDI output" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: number) {
            const values = this._enabled.values() as any[];
            values[0] = value;
            this._enabled.setValues(values as [number]);
        }     

    }
    //% fixedInstance whenUsed
    export const midiOutput = new MidiOutputClient("midi Output");
}