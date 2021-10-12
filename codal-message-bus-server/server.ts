namespace servers {
    export class CODALMessageBusServer extends jacdac.Server {
        constructor(dev: string) {
            super(dev, jacdac.SRV_CODAL_MESSAGE_BUS)
            // TODO: implement events
        }

        handlePacket(packet: jacdac.JDPacket) {
            switch (packet.serviceCommand) {
                case jacdac.CodalMessageBusCmd.Send:
                    this.handleSendCommand(packet)
                    break
            }
        }

        private handleSendCommand(pkt: jacdac.JDPacket) {
            const [source, value] = pkt.jdunpack<[number,  number]>("u16 u16")
            control.raiseEvent(source, value)
        }
    }

    //% fixedInstance whenUsed
    export const codalMessageBus = new CODALMessageBusServer("codal")
}
