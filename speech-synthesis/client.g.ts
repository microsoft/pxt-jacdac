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
        //% blockId=jacdac_speechsynthesis_enabled___get
        //% group="Speech synthesis"
        //% block="%speechsynthesis enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Determines if the speech engine is in a non-paused state.
        */
        //% blockId=jacdac_speechsynthesis_enabled___set
        //% group="Speech synthesis"
        //% block="set %speechsynthesis %value=toggleOnOff"
        setEnabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const speechSynthesis = new SpeechSynthesisClient("speech Synthesis");
}