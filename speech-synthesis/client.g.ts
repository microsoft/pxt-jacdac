namespace modules {
    /**
     * A speech synthesizer
     **/
    //% fixedInstances blockGap=8
    export class SpeechSynthesisClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SPEECH_SYNTHESIS, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const speechSynthesis = new SpeechSynthesisClient("speech Synthesis");
}