namespace modules {
    //% fixedInstances
    export class ServoClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SERVO, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const servo = new ServoClient("servo");
}