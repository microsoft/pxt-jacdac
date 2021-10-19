namespace servers {
    export class AzureIotHubHealthServer extends jacdac.Server {
        private _connectionStatus: jacdac.AzureIotHubHealthConnectionStatus
        constructor(dev: string) {
            super(dev, jacdac.SRV_AZURE_IOT_HUB_HEALTH)
            this._connectionStatus =
                jacdac.AzureIotHubHealthConnectionStatus.Disconnected
            azureiot.onEvent(AzureIotEvent.Connected, () =>
                this.setConnectionStatus(
                    jacdac.AzureIotHubHealthConnectionStatus.Connected
                )
            )
            azureiot.onEvent(AzureIotEvent.Disconnected, () =>
                this.setConnectionStatus(
                    jacdac.AzureIotHubHealthConnectionStatus.Disconnected
                )
            )
        }

        get connectionStatus() {
            return this._connectionStatus
        }

        get hubName() {
            return azureiot.hubName()
        }

        get hubDeviceId() {
            return azureiot.hubDeviceId()
        }

        private setConnectionStatus(
            status: jacdac.AzureIotHubHealthConnectionStatus
        ) {
            if (status !== this._connectionStatus) {
                this._connectionStatus = status
                this.log(`conn status: ${this._connectionStatus}`)
                this.sendEvent(
                    jacdac.AzureIotHubHealthEvent.ConnectionStatusChange,
                    jacdac.jdpack<[number]>("u8", [this._connectionStatus])
                )
            }
        }

        private connect() {
            if (!azureiot.isConnected()) {
                this.log(`connecting`)
                this.setConnectionStatus(
                    jacdac.AzureIotHubHealthConnectionStatus.Connecting
                )
                try {
                    azureiot.connect()
                    this.setConnectionStatus(
                        jacdac.AzureIotHubHealthConnectionStatus.Connected
                    )
                } catch {
                    this.setConnectionStatus(
                        jacdac.AzureIotHubHealthConnectionStatus.Disconnected
                    )
                }
            }
        }

        private disconnect() {
            // TODO: disconnect
            this.log(`disconnecting`)
        }

        private handleSetConnectionString(pkt: jacdac.JDPacket) {
            const newConnString = pkt.stringData
            const connString = settings.programSecrets.readSecret(
                azureiot.SECRETS_KEY,
                false
            )
            if (connString !== newConnString) {
                this.log(`updated connection string`)
                const wasConnected = azureiot.isConnected()
                azureiot.setConnectionString(newConnString)
                if (wasConnected) this.connect()
            }
        }

        handlePacket(pkt: jacdac.JDPacket) {
            // hub name, device id
            if (pkt.isRegGet) {
                switch (pkt.regCode) {
                    case jacdac.AzureIotHubHealthReg.ConnectionStatus: {
                        this.handleRegValue(
                            pkt,
                            jacdac.AzureIotHubHealthReg.ConnectionStatus,
                            "u16",
                            this.connectionStatus
                        )
                        break
                    }
                    case jacdac.AzureIotHubHealthReg.HubName: {
                        this.handleRegValue(
                            pkt,
                            jacdac.AzureIotHubHealthReg.HubName,
                            "s",
                            this.hubName
                        )
                        break
                    }
                    case jacdac.AzureIotHubHealthReg.HubDeviceId: {
                        this.handleRegValue(
                            pkt,
                            jacdac.AzureIotHubHealthReg.HubDeviceId,
                            "s",
                            this.hubDeviceId
                        )
                        break
                    }
                }
                return
            }

            switch (pkt.serviceCommand) {
                case jacdac.AzureIotHubHealthCmd.Connect:
                    this.connect()
                    break
                case jacdac.AzureIotHubHealthCmd.Disconnect:
                    this.disconnect()
                    break
                case jacdac.AzureIotHubHealthCmd.SetConnectionString:
                    this.handleSetConnectionString(pkt)
                    break
            }
        }
    }

    //% fixedInstance whenUsed block="Azure IoT Hub"
    export const azureIotHubHealth = new AzureIotHubHealthServer(
        "Azure IoT Hub"
    )
}
