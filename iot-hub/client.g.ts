namespace modules {
    /**
     * Send messages, receive commands, and work with device twins in Azure IoT Hub.
     **/
    //% fixedInstances blockGap=8
    export class IotHubClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_IOT_HUB, role);
            
        }
    
     
     

        /**
         * Emitted upon successful connection.
         */
        //% block="connected" blockSetVariable=myModule
        //% group="Azure IoT Hub" blockCombine
        onConnected(handler: () => void) {
            this.registerEvent(jacdac.IotHubEvent.Connected, handler);
        }
        /**
         * Emitted when connection was lost.
         */
        //% block="connection error" blockSetVariable=myModule
        //% group="Azure IoT Hub" blockCombine
        onConnectionError(handler: () => void) {
            this.registerEvent(jacdac.IotHubEvent.ConnectionError, handler);
        }
        /**
         * This event is emitted upon reception of a cloud to device message, that is a string
        * (doesn't contain NUL bytes) and fits in a single event packet.
        * For reliable reception, use the `subscribe` command above.
         */
        //% block="devicebound str" blockSetVariable=myModule
        //% group="Azure IoT Hub" blockCombine
        onDeviceboundStr(handler: () => void) {
            this.registerEvent(jacdac.IotHubEvent.DeviceboundStr, handler);
        }
    }
    //% fixedInstance whenUsed
    export const iotHub = new IotHubClient("iot Hub");
}