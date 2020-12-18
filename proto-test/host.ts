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
        i8u8u16i32: number[] = [];

        handlePacket(pkt: JDPacket) {
            this.log(`pkt: ${pkt}`)

            const oldBool = this.bool;
            const oldi32 = this.i32;
            const oldu32 = this.u32;
            const olds = this.s;
            const oldbytes = this.bytes;
            const oldi8u8u16i32 = this.i8u8u16i32;

            this.bool = this.handleRegBool(pkt, ProtoTestReg.RwBool, this.bool);
            this.handleRegBool(pkt, ProtoTestReg.RoBool, this.bool);

            this.i32 = this.handleRegInt32(pkt, ProtoTestReg.RwI32, this.i32);
            this.handleRegInt32(pkt, ProtoTestReg.RoI32, this.i32);

            this.u32 = this.handleRegUInt32(pkt, ProtoTestReg.RwU32, this.u32);
            this.handleRegUInt32(pkt, ProtoTestReg.RoU32, this.u32);

            this.s = this.handleRegValue(pkt, ProtoTestReg.RwString, "s", this.s);
            this.handleRegValue(pkt, ProtoTestReg.RoString, "s", this.s);

            this.bytes = this.handleRegValue(pkt, ProtoTestReg.RwBytes, "b", this.bytes);
            this.handleRegValue(pkt, ProtoTestReg.RoBytes, "b", this.bytes);

            this.i8u8u16i32 = this.handleRegFormat<number[]>(pkt, ProtoTestReg.RwI8U8U16I32, "i8 u8 u16 i32", this.i8u8u16i32);
            this.handleRegValue<number[]>(pkt, ProtoTestReg.RoI8U8U16I32, "i8 u8 u16 i32", this.i8u8u16i32);

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

            // events
            if (pkt.is_reg_set) {
                if (pkt.reg_identifier === ProtoTestReg.RwBool)
                    this.sendEvent(ProtoTestReg.RwBool, jdpack("u8", [this.bool ? 1 : 0]))
                else if (pkt.reg_identifier === ProtoTestReg.RwI32)
                    this.sendEvent(ProtoTestReg.RwI32, jdpack("i32", [this.i32]))
                else if (pkt.reg_identifier === ProtoTestReg.RwU32)
                    this.sendEvent(ProtoTestReg.RwU32, jdpack("u32", [this.i32]))
                else if (pkt.reg_identifier === ProtoTestReg.RwString)
                    this.sendEvent(ProtoTestReg.RwString, jdpack("s", [this.s]))
                else if (pkt.reg_identifier === ProtoTestReg.RwBytes)
                    this.sendEvent(ProtoTestReg.RwBytes, jdpack("b", [this.bytes]))
            }
        }
    }

    //% whenUsed
    export const protoTestHost = new ProtoTestHost();
}
