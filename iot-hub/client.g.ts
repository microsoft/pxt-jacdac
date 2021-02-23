namespace modules {
    /**
     * Send messages, receive commands, and work with device twins in Azure IoT Hub.
     **/
    //% fixedInstances blockGap=8
    export class IotHubClient extends jacdac.Client {

            private readonly _connectionStatus : jacdac.RegisterClient<[string]>;
            private readonly _connectionString : jacdac.RegisterClient<[string]>;
            private readonly _hubName : jacdac.RegisterClient<[string]>;
            private readonly _deviceId : jacdac.RegisterClient<[string]>;            

            constructor(role: string) {
            super(jacdac.SRV_IOT_HUB, role);

            this._connectionStatus = this.addRegister<[string]>(jacdac.IotHubReg.ConnectionStatus, "s");
            this._connectionString = this.addRegister<[string]>(jacdac.IotHubReg.ConnectionString, "s");
            this._hubName = this.addRegister<[string]>(jacdac.IotHubReg.HubName, "s");
            this._deviceId = this.addRegister<[string]>(jacdac.IotHubReg.DeviceId, "s");            
        }
    

        /**
        * Returns `"ok"` when connected, and an error description otherwise.
        */
        //% callInDebugger
        //% group="Iot"
        connectionStatus(): string {
            this.start();            
            const values = this._connectionStatus.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Connection string typically looks something like 
        * `HostName=my-iot-hub.azure-devices.net;DeviceId=my-dev-007;SharedAccessKey=xyz+base64key`.
        * You can get it in `Shared access policies -> iothubowner -> Connection string-primary key` in the Azure Portal.
        * This register is write-only.
        * You can use `hub_name` and `device_id` to check if connection string is set, but you cannot get the shared access key.
        */
        //% callInDebugger
        //% group="Iot"
        connectionString(): string {
            this.start();            
            const values = this._connectionString.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Connection string typically looks something like 
        * `HostName=my-iot-hub.azure-devices.net;DeviceId=my-dev-007;SharedAccessKey=xyz+base64key`.
        * You can get it in `Shared access policies -> iothubowner -> Connection string-primary key` in the Azure Portal.
        * This register is write-only.
        * You can use `hub_name` and `device_id` to check if connection string is set, but you cannot get the shared access key.
        */
        //% 
        //% group="Iot"
        //% block="set %iothub connection string to %value"
        setConnectionString(value: string) {
            this.start();
            const values = this._connectionString.values as any[];
            values[0] = value;
            this._connectionString.values = values as [string];
        }

        /**
        * Something like `my-iot-hub.azure-devices.net`; empty string when `connection_string` is not set.
        */
        //% callInDebugger
        //% group="Iot"
        hubName(): string {
            this.start();            
            const values = this._hubName.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Something like `my-dev-007`; empty string when `connection_string` is not set.
        */
        //% callInDebugger
        //% group="Iot"
        deviceId(): string {
            this.start();            
            const values = this._deviceId.pauseUntilValues() as any[];
            return values[0];
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