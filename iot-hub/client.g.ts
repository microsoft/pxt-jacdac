namespace modules {
    //% fixedInstances
    export class IotHubClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_IOT_HUB, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const iotHub = new IotHubClient("iot Hub");
}