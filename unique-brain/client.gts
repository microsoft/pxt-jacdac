namespace modules {
    /**
     * The presence of this service indicates that this device is a client that controls sensors and actuators.
     * If a unique brain detects another younger unique brain (determined by reset counter in announce packets),
     * then the older brain should switch into proxy mode.
     **/
    //% fixedInstances blockGap=8
    export class UniqueBrainClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_UNIQUE_BRAIN, role);
            
        }
    

    
    }
    //% fixedInstance whenUsed block="unique brain1"
    export const uniqueBrain1 = new UniqueBrainClient("unique Brain1");
}