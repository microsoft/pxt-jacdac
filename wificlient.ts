namespace jacdac {
    const CMD_SCAN = 0x80
    const CMD_CONNECT = 0x81
    const CMD_DISCONNECT = 0x82

    export class WifiNetwork {
        constructor(private buf: Buffer) { }
        get rssi() {
            return this.buf.getNumber(NumberFormat.Int8LE, 8)
        }
        get ssid() {
            let p = 16
            while (this.buf[p]) p++
            return this.buf.slice(16, p - 16).toString()
        }
        get flags() {
            return this.buf.getNumber(NumberFormat.UInt32LE, 0)
        }
        get hasPassword() {
            return (this.flags & 1) != 0
        }
    }

    //% fixedInstances
    export class WifiClient extends Client {
        constructor(requiredDevice: string = null) {
            super("wifi", jd_class.WIFI, requiredDevice);
        }

        scan() {
            if (!this.device) return []
            const s = new InStream(this.device)
            this.sendCommand(JDPacket.from(CMD_SCAN, s.openInfo()), true)
            const elts = s.readList(buf => new WifiNetwork(buf))
            elts.sort((x, y) => y.rssi - x.rssi)
            return elts
        }
    }

    //% fixedInstance whenUsed block="wifi client"
    export const wifiClient = new WifiClient();
}