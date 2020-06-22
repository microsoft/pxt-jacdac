namespace jacdac {
    const PORT_SHIFT = 7
    const COUNTER_MASK = 0x001f
    const CLOSE_MASK = 0x0020
    const METADATA_MASK = 0x0040

    let streams: InStream[]
    function handleStreamData(pkt: JDPacket) {
        if (pkt.service_number != JD_SERVICE_NUMBER_STREAM || pkt.device_identifier != selfDevice().deviceId)
            return
        const port = pkt.service_command >> PORT_SHIFT
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

        bytesAvailable() {
            let sum = 0
            for (const b of this.inQ)
                sum += b.length
            return sum
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

        meta(buf: Buffer) { }

        _handle(pkt: JDPacket) {
            let cmd = pkt.service_command
            if ((cmd & COUNTER_MASK) != (this.nextCnt & COUNTER_MASK))
                return
            this.nextCnt++
            if (cmd & CLOSE_MASK)
                this._close()
            if (cmd & METADATA_MASK) {
                this.meta(pkt.data)
            } else {
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

    export class OutStream {
        private nextCnt = 0

        constructor(public device: Device, public port: number) { }

        private writeEx(buf: Buffer, flags: number) {
            if (!this.port) return
            const pkt = JDPacket.from((this.nextCnt & COUNTER_MASK) | (this.port << PORT_SHIFT) | flags, buf)
            this.nextCnt++
            if (flags & CLOSE_MASK)
                this.port = null
            pkt.service_number = JD_SERVICE_NUMBER_STREAM
            if (!pkt._sendWithAck(this.device))
                throw "No ACK (stream)"
        }

        write(buf: Buffer) {
            this.writeEx(buf, 0)
        }

        writeAndClose(buf: Buffer) {
            this.writeEx(buf, CLOSE_MASK)
        }

        close() {
            this.writeAndClose(Buffer.create(0))
        }

        writeMeta(buf: Buffer) {
            this.writeEx(buf, METADATA_MASK)
        }
    }
}