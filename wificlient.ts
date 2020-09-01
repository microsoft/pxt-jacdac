namespace jacdac {
    const CMD_SCAN = 0x80
    const CMD_CONNECT = 0x81
    const CMD_DISCONNECT = 0x82

    const EV_GOT_IP = 0x01
    const EV_LOST_IP = 0x02

    function decodeAP(buf: Buffer): net.AccessPoint {
        const [flags, reserved, rssi, channel] = buf.unpack("IIbB")
        let p = 16
        while (buf[p]) p++
        const ssid = buf.slice(16, p - 16).toString()
        const r = new net.AccessPoint(ssid)
        r.encryption = flags & 0x0001 ? 4 : 7;
        r.rssi = rssi
        return r
    }

    export class WifiClient extends Client {
        private gotIP = false

        constructor(requiredDevice: string = null) {
            super("wifi", jd_class.WIFI, requiredDevice);
        }

        get hasIP() {
            return this.gotIP
        }

        handlePacket(p: JDPacket) {
            if (p.service_command == CMD_EVENT) {
                switch (p.data[0]) {
                    case EV_GOT_IP:
                        this.gotIP = true
                        break
                    case EV_LOST_IP:
                        this.gotIP = false
                        break
                }
            }
        }

        scan() {
            if (!this.device) return []
            const s = new InPipe()
            this.sendCommandWithAck(JDPacket.from(CMD_SCAN, s.openInfo()))
            const elts = s.readList(decodeAP)
            elts.sort((x, y) => y.rssi - x.rssi)
            return elts
        }

        connect(ssid: string, password?: string) {
            const data = ssid + "\u0000" + (password ? password + "\u0000" : "")
            this.sendCommandWithAck(JDPacket.from(CMD_CONNECT, Buffer.fromUTF8(data)))
            pauseUntil(() => this.gotIP, 15000)
            if (!this.gotIP)
                throw "Can't connect"
        }
    }

    const CMD_OPEN = 0x80

    export class Socket {
        private outp: OutPipe
        private inp: InPipe
        isConnected = false

        close() {
            this.outp.close()
        }
        write(buf: Buffer) {
            if (this.isConnected)
                this.outp.write(buf)
        }
        read(): Buffer {
            if (this.isConnected)
                return this.inp.read()
            else
                return null
        }
        bytesAvailable(): number {
            return this.inp.bytesAvailable()
        }

        connectSSL(hostname: string, port: number) {
            if (this.isConnected)
                throw "already connected"
            this.outp.writeMeta(Buffer.pack("IH", [1, port]).concat(Buffer.fromUTF8(hostname + "\u0000")))
            const buf = this.inp.read()
            if (buf && buf.length == 0) {
                this.isConnected = true
            } else {
                throw "can't connect"
            }
        }

        constructor(private parent: TcpClient) {
            this.inp = new InPipe(this.parent.device)
            // TODO handle races
            this.parent.sendCommandWithAck(JDPacket.from(CMD_OPEN, this.inp.openInfo()))
            pauseUntil(() => this.parent._retPort != null)
            const port = this.parent._retPort
            this.parent._retPort = null
            this.outp = new OutPipe(this.parent.device, port)
        }
    }

    export class TcpClient extends Client {
        _retPort: number = null

        constructor(requiredDevice: string = null) {
            super("tcp", jd_class.TCP, requiredDevice);
        }

        handlePacket(pkt: JDPacket) {
            if (pkt.service_command == CMD_OPEN) {
                this._retPort = pkt.intData
            }
        }

        mkSocket() {
            const s = new Socket(this)
            return s
        }
    }

    export class WifiController extends net.Controller {
        wifiClient: WifiClient
        tcpClient: TcpClient
        private sockets: Socket[]
        private _ssid: string

        constructor() {
            super()
            this.sockets = []
        }

        start() {
            if (this.wifiClient)
                return

            this.wifiClient = new WifiClient()
            this.wifiClient.start()
            this.tcpClient = new TcpClient()
            this.tcpClient.start()
        }

        public scanNetworks(): net.AccessPoint[] {
            this.start()
            pauseUntil(() => this.wifiClient.isConnected())
            return this.wifiClient.scan()
        }

        public socket(): number {
            const s = this.tcpClient.mkSocket()
            for (let i = 0; i < this.sockets.length; ++i) {
                if (!this.sockets[i]) {
                    this.sockets[i] = s
                    return i;
                }
            }
            this.sockets.push(s)
            return this.sockets.length - 1
        }

        public socketConnect(socket_num: number, dest: string | Buffer, port: number, conn_mode = net.TCP_MODE): boolean {
            if (conn_mode != net.TLS_MODE)
                throw "only SSL supported now"
            if (typeof dest != "string")
                throw "only string hostnames supported"

            const s = this.sockets[socket_num]
            if (!s)
                throw "no such socket"

            try {
                s.connectSSL(dest, port)
                return true
            } catch {
                return false
            }
        }

        public socketWrite(socket_num: number, buffer: Buffer): void {
            const s = this.sockets[socket_num]
            if (!s) return
            s.write(buffer)
        }

        public socketAvailable(socket_num: number): number {
            const s = this.sockets[socket_num]
            if (!s) return 0
            return s.bytesAvailable()
        }

        public socketRead(socket_num: number, size: number): Buffer {
            const s = this.sockets[socket_num]
            if (!s) return undefined
            return s.read()
        }

        public socketClose(socket_num: number): void {
            const s = this.sockets[socket_num]
            if (!s) return
            s.close()
        }

        public hostbyName(hostname: string): Buffer {
            return undefined;
        }

        get isIdle(): boolean {
            return this.wifiClient && this.wifiClient.isConnected()
        }

        get isConnected(): boolean {
            return this.wifiClient && this.wifiClient.hasIP
        }

        /**
         * Uses RSSID and password in settings to connect to a compatible AP
         */
        public connect(): boolean {
            if (this.isConnected) return true;

            const wifis = net.knownAccessPoints();
            const ssids = Object.keys(wifis);
            const networks = this.scanNetworks()
                .filter(network => ssids.indexOf(network.ssid) > -1);
            // try connecting to known networks
            for (const network of networks) {
                try {
                    this.wifiClient.connect(network.ssid, wifis[network.ssid])
                    this._ssid = network.ssid
                    net.log(`connected to '${network.ssid}'`)
                    return true;
                } catch {
                    net.log(`can't connect to '${network.ssid}'`)
                }
            }

            // no compatible SSID
            net.log(`connection failed`)
            return false;
        }

        get ssid(): string { return this._ssid }
        get MACaddress(): Buffer {
            if (this.wifiClient && this.wifiClient.device)
                return Buffer.fromHex(this.wifiClient.device.deviceId.slice(2, 14))
            return undefined
        }

        public ping(dest: string, ttl: number = 250): number { return -1; }
    }

    // initialize default controller and net.Net instance
    new net.Net(() => new WifiController())
}