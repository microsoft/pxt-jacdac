namespace modules {
    /**
     * A single-channel microphone.
     **/
    //% fixedInstances blockGap=8
    export class MicrophoneClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_MICROPHONE, role);
            
        }
    
     
     

    }
    //% fixedInstance whenUsed
    export const microphone = new MicrophoneClient("microphone");
}