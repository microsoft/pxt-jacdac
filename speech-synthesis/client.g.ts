namespace modules {
    /**
     * A speech synthesizer
     **/
    //% fixedInstances blockGap=8
    export class SpeechSynthesisClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_SPEECH_SYNTHESIS, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.SpeechSynthesisReg.Enabled, "u8");            
        }
    

        /**
        * Determines if the speech engine is in a non-paused state.
        */
        //% group="Speech synthesis" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): boolean {
            this._enabled.pauseUntilValues();
            const values = this._enabled.values as any[];
            return !!values[0];
        }
        /**
        * Determines if the speech engine is in a non-paused state.
        */
        //% group="Speech synthesis" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const speechSynthesis = new SpeechSynthesisClient("speech Synthesis");
}