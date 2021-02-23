namespace modules {
    /**
     * A speech synthesizer
     **/
    //% fixedInstances blockGap=8
    export class SpeechSynthesisClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;
            private readonly _lang : jacdac.RegisterClient<[string]>;
            private readonly _volume : jacdac.RegisterClient<[number]>;
            private readonly _pitch : jacdac.RegisterClient<[number]>;
            private readonly _rate : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_SPEECH_SYNTHESIS, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.SpeechSynthesisReg.Enabled, "u8");
            this._lang = this.addRegister<[string]>(jacdac.SpeechSynthesisReg.Lang, "s");
            this._volume = this.addRegister<[number]>(jacdac.SpeechSynthesisReg.Volume, "u0.8");
            this._pitch = this.addRegister<[number]>(jacdac.SpeechSynthesisReg.Pitch, "u16.16");
            this._rate = this.addRegister<[number]>(jacdac.SpeechSynthesisReg.Rate, "u16.16");            
        }
    

        /**
        * Determines if the speech engine is in a non-paused state.
        */
        //% callInDebugger
        //% group="Speech synthesis"
        //% block="%speechsynthesis enabled"
        //% blockId=jacdac_speechsynthesis_enabled___get
        enabled(): boolean {
            this.start();            
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
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * Language used for utterances as defined in https://www.ietf.org/rfc/bcp/bcp47.txt.
        */
        //% callInDebugger
        //% group="Speech synthesis"
        lang(): string {
            this.start();            
            const values = this._lang.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Language used for utterances as defined in https://www.ietf.org/rfc/bcp/bcp47.txt.
        */
        //% 
        //% group="Speech synthesis"
        //% block="set %speechsynthesis lang to %value"
        setLang(value: string) {
            this.start();
            const values = this._lang.values as any[];
            values[0] = value;
            this._lang.values = values as [string];
        }

        /**
        * Volume for utterances.
        */
        //% callInDebugger
        //% group="Speech synthesis"
        volume(): number {
            this.start();            
            const values = this._volume.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Volume for utterances.
        */
        //% 
        //% group="Speech synthesis" value.min=0 value.max=1 value.defl=1
        //% block="set %speechsynthesis volume to %value"
        setVolume(value: number) {
            this.start();
            const values = this._volume.values as any[];
            values[0] = value;
            this._volume.values = values as [number];
        }

        /**
        * Pitch for utterances
        */
        //% callInDebugger
        //% group="Speech synthesis"
        pitch(): number {
            this.start();            
            const values = this._pitch.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Pitch for utterances
        */
        //% 
        //% group="Speech synthesis" value.min=0 value.max=2 value.defl=1
        //% block="set %speechsynthesis pitch to %value"
        setPitch(value: number) {
            this.start();
            const values = this._pitch.values as any[];
            values[0] = value;
            this._pitch.values = values as [number];
        }

        /**
        * Rate for utterances
        */
        //% callInDebugger
        //% group="Speech synthesis"
        rate(): number {
            this.start();            
            const values = this._rate.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Rate for utterances
        */
        //% 
        //% group="Speech synthesis" value.min=0.1 value.max=10 value.defl=1
        //% block="set %speechsynthesis rate to %value"
        setRate(value: number) {
            this.start();
            const values = this._rate.values as any[];
            values[0] = value;
            this._rate.values = values as [number];
        }
 

    }
    //% fixedInstance whenUsed
    export const speechSynthesis = new SpeechSynthesisClient("speech Synthesis");
}