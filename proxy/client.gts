namespace modules {
    /**
     * A service that tags a device as a packet proxy.
     * 
     * 
     * A device in proxy mode will proxy Jacdac packets and typically has its core logic halted.
     **/
    //% fixedInstances blockGap=8
    export class ProxyClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_PROXY, role);
            
        }
    

    
    }
    //% fixedInstance whenUsed block="proxy1"
    export const proxy1 = new ProxyClient("proxy1");
}