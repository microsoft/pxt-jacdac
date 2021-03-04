namespace jacdac {
    export class LoggerClient extends Client {
        minPriority = jacdac.constants.LoggerPriority.Silent; // drop all packets by default

        onMessageReceived: (priority: number, dev: Device, message: string) => void;

        constructor() {
            super(jacdac.constants.SRV_LOGGER, "logger");
            this.broadcast = true
            onAnnounce(() => {
                // on every announce, if we're listening to anything, tell
                // everyone to log
                if (this.minPriority < jacdac.constants.LoggerPriority.Silent) {
                    const SetMinPriority = 0x2000 | jacdac.constants.LoggerReg.MinPriority
                    JDPacket.jdpacked(SetMinPriority, "i32", [this.minPriority])
                        .sendAsMultiCommand(this.serviceClass)
                }
            })
        }

        handlePacket(packet: JDPacket) {
            let pri = packet.serviceCommand - jacdac.constants.LoggerCmd.Debug
            if (0 <= pri && pri <= jacdac.constants.LoggerPriority.Error) {
                if (pri < this.minPriority)
                    return;

                // send message to console
                const deviceName = this.currentDevice.toString();
                const innerMsg = packet.data.toString()
                // the initial ':' is used as marker to avoid infinite console repeat
                const msg = `:${deviceName}> ${innerMsg}`;
                switch (pri) {
                    case jacdac.constants.LoggerPriority.Debug: console.debug(msg); break;
                    case jacdac.constants.LoggerPriority.Log: console.log(msg); break;
                    case jacdac.constants.LoggerPriority.Warning: console.warn(msg); break;
                    case jacdac.constants.LoggerPriority.Error: console.error(msg); break;
                }
                if (this.onMessageReceived)
                    this.onMessageReceived(pri, this.currentDevice, innerMsg);

            }
        }

    }

}