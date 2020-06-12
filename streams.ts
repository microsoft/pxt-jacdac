namespace jacdac {
    let streams: InStream[]
    function handleStreamData(pkt: JDPacket) {
        if (pkt.service_number != JD_SERVICE_NUMBER_STREAM)
            return
        const port = pkt.service_command >> 7
        const s = streams.find(s => s.port == port)
        if (s) s._handle(pkt)
    }

    export class InStream {
        port: number
        private nextCnt = 0
        private closed = false
        private inQ: Buffer[]
        private eventId: number

        constructor(public remote: Device) {
            this.eventId = control.allocateNotifyEvent()
            this.inQ = []
            if (!streams) {
                streams = []
                jacdac.onRawPacket(handleStreamData)
            }
            while (true) {
                this.port = Math.randomRange(1, 511)
                if (streams.every(s => s.port != this.port))
                    break
            }
            streams.push(this)
        }

        openInfo() {
            const b = Buffer.pack("IIHH", [0, 0, this.port, 0])
            b.write(0, Buffer.fromHex(selfDevice().deviceId))
            return b
        }

        read() {
            while (true) {
                if (this.inQ.length)
                    return this.inQ.shift()

                if (this.closed)
                    return null

                control.waitForEvent(DAL.DEVICE_ID_NOTIFY, this.eventId);
            }
        }

        private _close() {
            this.closed = true
            streams.removeElement(this)
        }

        close() {
            this._close()
            this.inQ = []
        }

        outOfBand(buf: Buffer) { }

        _handle(pkt: JDPacket) {
            let cmd = pkt.service_command
            if ((cmd & 0x1f) != this.nextCnt)
                return
            this.nextCnt++
            cmd = (cmd >> 5) & 3
            if (cmd == 1)
                this._close()
            if (cmd == 2) {
                this.outOfBand(pkt.data)
            } else if (cmd <= 1) {
                this.inQ.push(pkt.data)
                control.raiseEvent(DAL.DEVICE_ID_NOTIFY_ONE, this.eventId);
            }
        }

        readList<T>(f: (b: Buffer) => T) {
            const r: T[] = []
            while (true) {
                const buf = this.read()
                if (!buf) return r
                if (buf.length)
                    r.push(f(buf))
            }
        }
    }
}