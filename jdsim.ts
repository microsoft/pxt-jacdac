namespace jacdac {
    let recvQ: Buffer[]

    /**
     * Gets the physical layer component id
     **/
    //% shim=jacdac::__physId
    export function __physId(): int32 {
        return 30
    }

    function jdCrc16(p: Buffer) {
        let crc = 0xffff;
        for (let i = 0; i < p.length; ++i) {
            const data = p[i];
            let x = (crc >> 8) ^ data;
            x ^= x >> 4;
            crc = (crc << 8) ^ (x << 12) ^ (x << 5) ^ x;
            crc &= 0xffff;
        }
        return crc;
    }

    /**
     * Write a buffer to the jacdac physical layer.
     **/
    //% shim=jacdac::__physSendPacket
    export function __physSendPacket(header: Buffer, data: Buffer): void {
        // the sim transport layer computes the CRC
        const payload = header.concat(data);
        const crc = jdCrc16(payload.slice(2));
        header[0] = (crc >> 0) & 0xff;
        header[1] = (crc >> 8) & 0xff
        control.simmessages.send("jacdac", payload)
    }

    /**
     * Reads a packet from the queue. NULL if queue is empty
     **/
    //% shim=jacdac::__physGetPacket
    export function __physGetPacket(): Buffer {
        if (!recvQ) return undefined
        return recvQ.shift()
    }


    /**
     * Gets reception time in ms of last __physGetPacket()
     **/
    //% shim=jacdac::__physGetTimestamp
    export function __physGetTimestamp(): number {
        if (!recvQ) return 0
        return control.millis() // TODO
    }

    /**
     * Indicates if the bus is running
     **/
    //% shim=jacdac::__physIsRunning
    export function __physIsRunning(): boolean {
        return recvQ != null
    }

    /**
     * Starts the JACDAC physical layer.
     **/
    //% shim=jacdac::__physStart
    export function __physStart(): void {
        if (__physIsRunning()) return
        recvQ = []
        control.simmessages.onReceived("jacdac", buf => {
            buf = buf.slice(0, buf[3] + 12)
            const crc = jdCrc16(buf.slice(2));
            if (buf.getNumber(NumberFormat.UInt16LE, 0) != crc) {
                control.dmesg("bad crc in sim")
            } else {
                recvQ.push(buf)
                control.raiseEvent(__physId(), 1)
            }
        })
        // announce packet, don't rely on forever
        control.runInParallel(function () {
            while (true) {
                control.raiseEvent(__physId(), 100);
                pause(500)
            }
        })
    }

    /**
     * Reads the diagnostics struct provided by the physical layer. Returns a buffer or NULL.
     **/
    //% shim=jacdac::__physGetDiagnostics
    export function __physGetDiagnostics(): Buffer {
        return null // TODO?
    }
}