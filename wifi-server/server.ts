namespace servers {
    export class WiFiServer extends jacdac.Server {
        constructor(dev: string) {
            super(dev, jacdac.SRV_WIFI)
        }

        private handleScan(pkt: jacdac.JDPacket) {
            const knowns = net.knownAccessPoints()
            const aps: net.AccessPoint[] = net.instance().scanNetworks()
            const jdaps = aps.map(ap => {
                // TODO flags
                const rssi = ap.rssi
                const ssid = ap.ssid
                const flags: jacdac.WifiAPFlags = knowns[ssid]
                    ? jacdac.WifiAPFlags.HasPassword
                    : 0
                const bssid = Buffer.fromUTF8(ssid)
                const channel = 0
                return [flags, rssi, channel, bssid, ssid]
            })
            jacdac.OutPipe.respondForEach(pkt, jdaps, jdap =>
                jacdac.jdpack("u32 x[4] i8 u8 b[6] s[33]", jdap)
            )
        }

        private handleConnect(pkt: jacdac.JDPacket) {
            const controller = net.instance().controller
            if (controller) controller.connect()
            // TODO events
        }

        private handleDisconnect(pkt: jacdac.JDPacket) {
            const controller = net.instance().controller
            // TODO: support for disconnect
        }

        handlePacket(pkt: jacdac.JDPacket) {
            const controller = net.instance().controller
            this.handleRegBool(
                pkt,
                jacdac.WifiReg.Connected,
                controller && controller.isConnected
            )
            switch (pkt.serviceCommand) {
                case jacdac.WifiCmd.Scan:
                    this.handleScan(pkt)
                    break
                case jacdac.WifiCmd.Disconnect:
                    this.handleDisconnect(pkt)
                    break
                case jacdac.WifiCmd.Connect:
                    this.handleConnect(pkt)
                    break
            }
        }
    }

    //% fixedInstance whenUsed block="wifi"
    export const wifi = new WiFiServer("wifi")
}
