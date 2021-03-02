namespace jacdac {
    export class ButtonHost extends Host {
        constructor(name: string) {
            super(name, SRV_BUTTON);
        }

        handlePacket(packet: JDPacket) {

        }
    }
}
