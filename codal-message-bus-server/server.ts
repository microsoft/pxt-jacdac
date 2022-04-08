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
                default:
                    packet.possiblyNotImplemented()
                    break
            }
        }

        private handleSendCommand(pkt: jacdac.JDPacket) {
            const [source, value] = pkt.jdunpack<[number, number]>("u16 u16")
            this.log(`raise ${source} ${value}`)
            control.raiseEvent(source, value)
        }
    }

    //% fixedInstance whenUsed weight=1 block="CODAL message bus"
    export const codalMessageBus = new CODALMessageBusServer("codal")
}
