namespace modules {
    //% fixedInstances
    export class WifiClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_WIFI, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const wifi = new WifiClient("wifi");
}