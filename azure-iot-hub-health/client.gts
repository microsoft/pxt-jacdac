namespace modules {
    /**
     * Health and diagnostics information about the Azure Iot Hub connection.
     **/
    //% fixedInstances blockGap=8
    export class AzureIotHubHealthClient extends jacdac.Client {

        private readonly _hubName : jacdac.RegisterClient<[string]>;
        private readonly _hubDeviceId : jacdac.RegisterClient<[string]>;
        private readonly _connectionStatus : jacdac.RegisterClient<[jacdac.AzureIotHubHealthConnectionStatus]>;            

        constructor(role: string) {
            super(jacdac.SRV_AZURE_IOT_HUB_HEALTH, role);

            this._hubName = this.addRegister<[string]>(jacdac.AzureIotHubHealthReg.HubName, "s");
            this._hubDeviceId = this.addRegister<[string]>(jacdac.AzureIotHubHealthReg.HubDeviceId, "s");
            this._connectionStatus = this.addRegister<[jacdac.AzureIotHubHealthConnectionStatus]>(jacdac.AzureIotHubHealthReg.ConnectionStatus, "u16");            
        }
    

        /**
        * Something like `my-iot-hub.azure-devices.net`; empty string when not properly configured
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=100
        hubName(): string {
            this.start();            
            const values = this._hubName.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Device identifier in Azure Iot Hub
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=99
        hubDeviceId(): string {
            this.start();            
            const values = this._hubDeviceId.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates the status of connection. A message beyond the [0..3] range represents an HTTP error code.
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=98
        connectionStatus(): jacdac.AzureIotHubHealthConnectionStatus {
            this.start();            
            const values = this._connectionStatus.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Raised when the connection status changes
         */
        //% group="Iot"
        //% blockId=jacdac_on_azureiothubhealth_connection_status_change
        //% block="on %azureiothubhealth connection status change"
        //% weight=97
        onConnectionStatusChange(handler: () => void): void {
            this.registerEvent(jacdac.AzureIotHubHealthEvent.ConnectionStatusChange, handler);
        }

        /**
        * Starts a connection to the IoT hub service
        */
        //% group="Iot"
        //% blockId=jacdac_azureiothubhealth_connect_cmd
        //% block="%azureiothubhealth connect"
        //% weight=96
        connect(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.AzureIotHubHealthCmd.Connect))
        }

        /**
        * Starts disconnecting from the IoT hub service
        */
        //% group="Iot"
        //% blockId=jacdac_azureiothubhealth_disconnect_cmd
        //% block="%azureiothubhealth disconnect"
        //% weight=95
        disconnect(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.AzureIotHubHealthCmd.Disconnect))
        }

        /**
        * Restricted command to override the existing connection string to the Azure IoT Hub.
        */
        //% group="Iot"
        //% blockId=jacdac_azureiothubhealth_set_connection_string_cmd
        //% block="%azureiothubhealth set connection string"
        //% weight=94
        setConnectionString(connectionString: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.AzureIotHubHealthCmd.SetConnectionString, "s", [connectionString]))
        }
    
    }
    //% fixedInstance whenUsed block="azure iot hub health 1"
    export const azureIotHubHealth1 = new AzureIotHubHealthClient("azure Iot Hub Health1");
}