namespace jacdac {
    export class LoggerClient extends Client {
        minPriority = jacdac.LoggerPriority.Silent // drop all packets by default

        onMessageReceived: (
            priority: number,
            dev: Device,
            message: string
        ) => void

        constructor() {
            super(jacdac.SRV_LOGGER, "log")
            this.broadcast = true
        }

        handlePacket(packet: JDPacket) {
            let pri = packet.serviceCommand - jacdac.LoggerCmd.Debug
            if (0 <= pri && pri <= jacdac.LoggerPriority.Error) {
                if (pri < this.minPriority) return

                // send message to console
                const deviceName = this.device.toString()
                const innerMsg = packet.data.toString()
                // the initial ':' is used as marker to avoid infinite console repeat
                const msg = `:${deviceName}> ${innerMsg}`
                switch (pri) {
                    case jacdac.LoggerPriority.Debug:
                        console.debug(msg)
                        break
                    case jacdac.LoggerPriority.Log:
                        console.log(msg)
                        break
                    case jacdac.LoggerPriority.Warning:
                        console.warn(msg)
                        break
                    case jacdac.LoggerPriority.Error:
                        console.error(msg)
                        break
                }
                if (this.onMessageReceived)
                    this.onMessageReceived(pri, this.device, innerMsg)
            }
        }
    }

    //% fixedInstance whenUsed weight=1 block="logger" weight=0
    export const loggerClient = new LoggerClient()
}
