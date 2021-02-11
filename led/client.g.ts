namespace modules {
    //% fixedInstances
    export class LedClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LED, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const led = new LedClient("led");
}