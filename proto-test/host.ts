namespace jacdac {
    export class ProtoTestHost extends Host {
        constructor() {
            super("prototest", SRV_PROTO_TEST);
        }

        bool: boolean = false;
        i32: number = 0;
        ui32: number = 0;
        s: string = "";
        bytes: Buffer = Buffer.create(0);

        handlePacket(pkt: JDPacket) {
            this.bool = this.handleRegValue(pkt, ProtoTestReg.RwBool, "u8", this.bool);
            this.handleRegValue(pkt, ProtoTestReg.RoBool, "u8", this.bool);

            this.i32 = this.handleRegValue(pkt, ProtoTestReg.RwI32, "i32", this.i32);
            this.handleRegValue(pkt, ProtoTestReg.RoI32, "i32", this.i32);

            this.ui32 = this.handleRegValue(pkt, ProtoTestReg.RwU32, "u32", this.ui32);
            this.handleRegValue(pkt, ProtoTestReg.RoU32, "u32", this.ui32);

            this.s = this.handleRegValue(pkt, ProtoTestReg.RwString, "s", this.s);
            this.handleRegValue(pkt, ProtoTestReg.RoString, "s", this.s);

            this.bytes = this.handleRegValue(pkt, ProtoTestReg.RwBytes, "b", this.bytes);
            this.handleRegValue(pkt, ProtoTestReg.RoBytes, "b", this.bytes);
        }
    }

    //% whenUsed
    export const protoTestHost = new ProtoTestHost();
}

jacdac.protoTestHost.start();