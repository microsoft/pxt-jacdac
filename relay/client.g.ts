namespace modules {
    //% fixedInstances
    export class RelayClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_RELAY, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const relay = new RelayClient("relay");
}