namespace modules {
    /**
     * Discovery and connection to WiFi networks. Separate TCP service is used for data transfer.
     **/
    //% fixedInstances blockGap=8
    export class WifiClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_WIFI, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const wifi = new WifiClient("wifi");
}