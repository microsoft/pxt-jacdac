namespace jacdac {
    export class ProtoTestHost extends Host {
        constructor() {
            super("prototest", SRV_PROTO_TEST);
        }

        bool: boolean = false;
        int: number = 0;
        uint: number = 0;
        bytes: Buffer = Buffer.create(0);

        handlePacket(pkt: JDPacket) {
            this.bool = this.handleRegBool(pkt, ProtoTestReg.RwBool, this.bool);
            this.handleRegBool(pkt, ProtoTestReg.RoBool, this.bool);

            this.int = this.handleRegInt(pkt, ProtoTestReg.RwI32, this.int);
            this.handleRegInt(pkt, ProtoTestReg.RoI32, this.int);

            this.uint = this.handleRegInt(pkt, ProtoTestReg.RwU32, this.int);
            this.handleRegInt(pkt, ProtoTestReg.RoU32, this.uint);

            this.bytes = this.handleRegBuffer(pkt, ProtoTestReg.RwBytes, this.bytes);
            this.handleRegBuffer(pkt, ProtoTestReg.RoBytes, this.bytes);
        }
    }

    //% whenUsed
    export const protoTestHost = new ProtoTestHost();
}

jacdac.protoTestHost.start();