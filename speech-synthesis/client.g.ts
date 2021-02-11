namespace modules {
    /**
     * A speech synthesizer
     **/
    //% fixedInstances blockGap=8
    export class SpeechSynthesisClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_SPEECH_SYNTHESIS, role);

            this._enabled = this.addRegister(jacdac.SpeechSynthesisReg.Enabled, "u8");            
        }
    

        /**
        * Determines if the speech engine is in a non-paused state.
        */
        //% group="Speech synthesis" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): number {
            const values = this._enabled.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Determines if the speech engine is in a non-paused state.
        */
        //% group="Speech synthesis" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: number) {
            const values = this._enabled.values() as any[];
            values[0] = value;
            this._enabled.setValues(values as [number]);
        }     

    }
    //% fixedInstance whenUsed
    export const speechSynthesis = new SpeechSynthesisClient("speech Synthesis");
}