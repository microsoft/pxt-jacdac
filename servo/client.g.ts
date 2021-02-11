namespace modules {
    /**
     * Servo is a small motor with arm that can be pointing at a specific direction.
     **/
    //% fixedInstances blockGap=8
    export class ServoClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SERVO, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const servo = new ServoClient("servo");
}