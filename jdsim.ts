namespace jacdac {
    let recvQ: Buffer[]

    /**
     * Gets the physical layer component id
     **/
    //% shim=jacdac::__physId
    export function __physId(): int32 {
        return 30
    }

    /**
     * Write a buffer to the jacdac physical layer.
     **/
    //% shim=jacdac::__physSendPacket
    export function __physSendPacket(header: Buffer, data: Buffer): void {
        control.simmessages.send("jacdac", header.concat(data))
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
            recvQ.push(buf)
            control.raiseEvent(__physId(), 1)
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