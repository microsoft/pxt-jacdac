namespace modules {
    /**
     * A service that tags a device as purely infrastructure device.
     * 
     * 
     * A Jacdac user interface can ignore any device that hosts this service.
     **/
    //% fixedInstances blockGap=8
    export class InfrastructureClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_INFRASTRUCTURE, role);
            
        }
    

    
    }
    //% fixedInstance whenUsed block="infrastructure1"
    export const infrastructure1 = new InfrastructureClient("infrastructure1");
}