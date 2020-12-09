namespace jacdac {
    export class ProtoTestHost extends Host {
        constructor() {
            super("prototest", SRV_PROTO_TEST);
        }

        bool: boolean = false;
        i32: number = 0;
        u32: number = 0;
        s: string = "";
        bytes: Buffer = Buffer.create(0);

        handlePacket(pkt: JDPacket) {
            const oldBool = this.bool;
            const oldi32 = this.i32;
            const oldu32 = this.u32;

            this.bool = this.handleRegBool(pkt, ProtoTestReg.RwBool, this.bool);
            this.handleRegBool(pkt, ProtoTestReg.RoBool, this.bool);

            this.i32 = this.handleRegInt(pkt, ProtoTestReg.RwI32, this.i32);
            this.handleRegInt(pkt, ProtoTestReg.RoI32, this.i32);

            this.u32 = this.handleRegValue(pkt, ProtoTestReg.RwU32, "u32", this.u32);
            this.handleRegValue(pkt, ProtoTestReg.RoU32, "u32", this.u32);

            this.s = this.handleRegValue(pkt, ProtoTestReg.RwString, "s", this.s);
            this.handleRegValue(pkt, ProtoTestReg.RoString, "s", this.s);

            this.bytes = this.handleRegValue(pkt, ProtoTestReg.RwBytes, "b", this.bytes);
            this.handleRegValue(pkt, ProtoTestReg.RoBytes, "b", this.bytes);


            // commands
            switch (pkt.service_command) {
                case ProtoTestReg.RwBool:
                    this.bool = jdunpack(pkt.data, "u8")[0] != 0;
                    break;
                case ProtoTestReg.RwI32:
                    this.i32 = jdunpack(pkt.data, "i32")[0];
                    break;
                case ProtoTestReg.RwU32:
                    this.u32 = jdunpack(pkt.data, "u32")[0];
                    break;
                case ProtoTestReg.RwString:
                    this.s = jdunpack(pkt.data, "s")[0];
                    break;
                case ProtoTestReg.RwBytes:
                    this.bytes = jdunpack(pkt.data, "b")[0];
                    break;
            }

            // events: TODO
        }
    }

    //% whenUsed
    export const protoTestHost = new ProtoTestHost();
}

jacdac.protoTestHost.start();