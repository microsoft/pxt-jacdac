namespace modules {
    /**
     * Send messages, receive commands, and work with device twins in Azure IoT Hub.
     **/
    //% fixedInstances blockGap=8
    export class IotHubClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_IOT_HUB, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const iotHub = new IotHubClient("iot Hub");
}