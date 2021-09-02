namespace jacdac {
    type SMap<T> = { [s: string]: T }
    function splitPair(kv: string): string[] {
        let i = kv.indexOf("=")
        if (i < 0) return [kv, ""]
        else return [kv.slice(0, i), kv.slice(i + 1)]
    }

    function parsePropertyBag(msg: string, separator?: string): SMap<string> {
        let r: SMap<string> = {}
        msg.split(separator || "&")
            .map(kv => splitPair(kv))
            .forEach(
                parts => (r[net.urldecode(parts[0])] = net.urldecode(parts[1]))
            )
        return r
    }
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
            const connString = settings.programSecrets.readSecret(
                azureiot.SECRETS_KEY,
                true
            )
            if (!connString) return ""

            // TODO: move to azureiot
            const connStringParts = parsePropertyBag(connString, ";")
            const iotHubHostName = connStringParts["HostName"]
            return iotHubHostName || ""
        }

        get hubDeviceId() {
            const connString = settings.programSecrets.readSecret(
                azureiot.SECRETS_KEY,
                true
            )
            if (!connString) return ""

            // TODO: move to azureiot
            const connStringParts = parsePropertyBag(connString, ";")
            const deviceId = connStringParts["DeviceId"]
            return deviceId
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
            if (!azureiot.isConnected()) {
                this.setConnectionStatus(
                    AzureIotHubHealthConnectionStatus.Connecting
                )
                azureiot.connect()
            }
        }

        private disconnect() {
            // TODO: disconnect
        }

        private handleSetConnectionString(pkt: JDPacket) {
            const newConnString = pkt.stringData
            const connString = settings.programSecrets.readSecret(
                azureiot.SECRETS_KEY,
                true
            )
            if (connString !== newConnString) {
                const wasConnected = azureiot.isConnected()
                this.disconnect()
                settings.programSecrets.setSecret(azureiot.SECRETS_KEY, true)
                if (wasConnected) this.connect()
            }
        }

        handlePacket(pkt: jacdac.JDPacket) {
            // hub name, device id
            if (pkt.isRegGet) {
                switch (pkt.regCode) {
                    case jacdac.AzureIotHubHealthReg.HubName:
                        this.handleRegValue(
                            pkt,
                            jacdac.AzureIotHubHealthReg.HubName,
                            "s",
                            this.hubName
                        )
                        break
                    case jacdac.AzureIotHubHealthReg.HubDeviceId:
                        this.handleRegValue(
                            pkt,
                            jacdac.AzureIotHubHealthReg.HubName,
                            "s",
                            this.hubDeviceId
                        )
                        break
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
}
