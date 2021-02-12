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
        //% blockId=jacdac_on_iothub_connected
        //% block="connected" blockSetVariable=myModule
        //% group="Iot"
        onConnected(handler: () => void) {
            this.registerEvent(jacdac.IotHubEvent.Connected, handler);
        }
        /**
         * Emitted when connection was lost.
         */
        //% blockId=jacdac_on_iothub_connection_error
        //% block="connection error" blockSetVariable=myModule
        //% group="Iot"
        onConnectionError(handler: () => void) {
            this.registerEvent(jacdac.IotHubEvent.ConnectionError, handler);
        }
        /**
         * This event is emitted upon reception of a cloud to device message, that is a string
        * (doesn't contain NUL bytes) and fits in a single event packet.
        * For reliable reception, use the `subscribe` command above.
         */
        //% blockId=jacdac_on_iothub_devicebound_str
        //% block="devicebound str" blockSetVariable=myModule
        //% group="Iot"
        onDeviceboundStr(handler: () => void) {
            this.registerEvent(jacdac.IotHubEvent.DeviceboundStr, handler);
        }
    }
    //% fixedInstance whenUsed
    export const iotHub = new IotHubClient("iot Hub");
}