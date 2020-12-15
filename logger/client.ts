namespace jacdac {
    export class LoggerClient extends Client {
        minPriority = LoggerPriority.Error + 1; // drop all packets by default

        onMessageReceived: (priority: number, dev: Device, message: string) => void;

        constructor() {
            super("conc", SRV_LOGGER, null);
            this.broadcast = true
            onAnnounce(() => {
                // on every announce, if we're listening to anything, tell
                // everyone to log
                if (this.minPriority <= LoggerPriority.Error) {
                    const SetMinPriority = 0x2000 | LoggerReg.MinPriority
                    JDPacket.packed(SetMinPriority, "i", [this.minPriority])
                        .sendAsMultiCommand(this.serviceClass)
                }
            })
        }

        handlePacket(packet: JDPacket) {
            let pri = packet.service_command - LoggerCmd.Debug
            if (0 <= pri && pri <= LoggerPriority.Error) {
                if (pri < this.minPriority)
                    return;

                // send message to console
                const deviceName = this.currentDevice.toString();
                const innerMsg = packet.data.toString()
                // the initial ':' is used as marker to avoid infinite console repeat
                const msg = `:${deviceName}> ${innerMsg}`;
                switch (pri) {
                    case LoggerPriority.Debug: console.debug(msg); break;
                    case LoggerPriority.Log: console.log(msg); break;
                    case LoggerPriority.Warning: console.warn(msg); break;
                    case LoggerPriority.Error: console.error(msg); break;
                }
                if (this.onMessageReceived)
                    this.onMessageReceived(pri, this.currentDevice, innerMsg);

            }
        }

    }

}