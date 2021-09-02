namespace jacdac {
    export class AzureIotHubHealthServer extends jacdac.Server {
        private _connectionStatus: jacdac.AzureIotHubHealthConnectionStatus
        constructor(dev: string) {
            super(dev, jacdac.SRV_AZURE_IOT_HUB_HEALTH)
            this._connectionStatus =
                jacdac.AzureIotHubHealthConnectionStatus.Disconnected

            azureiot.onEvent(jacdac.AzureIotEvent.Connected, () =>
                this.setConnectionStatus(
                    jacdac.AzureIotHubHealthConnectionStatus.Connected
                )
            )
            azureiot.onEvent(jacdac.AzureIotEvent.Disonnected, () =>
                this.setConnectionStatus(
                    jacdac.AzureIotHubHealthConnectionStatus.Disconnected
                )
            )
        }

        get connectionStatus() {
            return this._connectionStatus
        }

        private setConnectionStatus(
            status: jacdac.AzureIotHubHealthConnectionStatus
        ) {
            if (status !== this._connectionStatus) {
                this._connectionStatus = status
                this.sendEvent(
                    jacdac.AzureIotHubHealthEvent.ConnectionStatusChange,
                    jdpack<[number]>("u8", [this._connectionStatus])
                )
            }
        }

        private connect() {
            if (!azureiot.isConneted()) {
                this.setConnectionStatus(
                    AzureIotHubHealthConnectionStatus.Connecting
                )
                azureiot.connect()
            }
        }

        private disconnect() {
            // TODO: disconnect
        }

        private handlePingCommand(pkt: Packet) {
            const payload = pkt.intData
            azureiot.pushMessageJSON({
                event: "ping",
                payload: payload,
            })
        }

        private handleTwinCommand(pkt: Packet) {
            const twin = azureiot.getTwin()
        }

        private handleSetConnectionString(pkt: Packet) {
            const KEY = azureiot.SECRETS_KEY
            const newConnString = pkt.stringData
            const connString = settings.programSecrets.readSecret(KEY, true)
            if (connString !== newConnString) {
                const wasConnected = azureiot.isConnected()
                this.disconnect()
                settings.programSecrets.setSecret(KEY, true)
                if (wasConnected) this.connect()
            }
        }

        handlePacket(pkt: jacdac.JDPacket) {
            switch (pkt.serviceCommand) {
                case jacdac.AzureIotHubHealthCmd.Connect:
                    this.connect()
                    break
                case jacdac.AzureIotHubHealthCmd.Disconnect:
                    this.disconnect()
                    break
                case jacdac.AzureIotHubHealthCmd.Ping:
                    this.handlePingCommand(pkt)
                    break
                case jacdac.AzureIotHubHealthCmd.SetConnectionString:
                    this.handleSetConnectionString(pkt)
                    break
                case jacdac.AzureIotHubHealthCmd.Twin:
                    this.handleTwinCommand(pkt)
                    break
            }
        }
    }
}
