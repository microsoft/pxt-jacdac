namespace modules {
    /**
     * This is test service to validate the protocol packet transmissions between the browser and a MCU.
     * Use this page if you are porting Jacdac to a new platform.
     **/
    //% fixedInstances blockGap=8
    export class ProtoTestClient extends jacdac.Client {

        private readonly _rwBool : jacdac.RegisterClient<[boolean]>;
        private readonly _roBool : jacdac.RegisterClient<[boolean]>;
        private readonly _rwU32 : jacdac.RegisterClient<[number]>;
        private readonly _roU32 : jacdac.RegisterClient<[number]>;
        private readonly _rwI32 : jacdac.RegisterClient<[number]>;
        private readonly _roI32 : jacdac.RegisterClient<[number]>;
        private readonly _rwString : jacdac.RegisterClient<[string]>;
        private readonly _roString : jacdac.RegisterClient<[string]>;
        private readonly _rwBytes : jacdac.RegisterClient<[Buffer]>;
        private readonly _roBytes : jacdac.RegisterClient<[Buffer]>;
        private readonly _rwI8U8U16I32 : jacdac.RegisterClient<[number,number,number,number]>;
        private readonly _roI8U8U16I32 : jacdac.RegisterClient<[number,number,number,number]>;            

        constructor(role: string) {
            super(jacdac.SRV_PROTO_TEST, role);

            this._rwBool = this.addRegister<[boolean]>(jacdac.ProtoTestReg.RwBool, "u8");
            this._roBool = this.addRegister<[boolean]>(jacdac.ProtoTestReg.RoBool, "u8");
            this._rwU32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RwU32, "u32");
            this._roU32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RoU32, "u32");
            this._rwI32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RwI32, "i32");
            this._roI32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RoI32, "i32");
            this._rwString = this.addRegister<[string]>(jacdac.ProtoTestReg.RwString, "s");
            this._roString = this.addRegister<[string]>(jacdac.ProtoTestReg.RoString, "s");
            this._rwBytes = this.addRegister<[Buffer]>(jacdac.ProtoTestReg.RwBytes, "b");
            this._roBytes = this.addRegister<[Buffer]>(jacdac.ProtoTestReg.RoBytes, "b");
            this._rwI8U8U16I32 = this.addRegister<[number,number,number,number]>(jacdac.ProtoTestReg.RwI8U8U16I32, "i8 u8 u16 i32");
            this._roI8U8U16I32 = this.addRegister<[number,number,number,number]>(jacdac.ProtoTestReg.RoI8U8U16I32, "i8 u8 u16 i32");            
        }
    

        /**
        * A read write bool register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=100
        rwBool(): boolean {
            this.start();            
            const values = this._rwBool.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * A read write bool register.
        */
        //% group="Protocol Test"
        //% weight=99
        setRwBool(value: boolean) {
            this.start();
            const values = this._rwBool.values as any[];
            values[0] = value ? 1 : 0;
            this._rwBool.values = values as [boolean];
        }

        /**
        * A read only bool register. Mirrors rw_bool.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=98
        roBool(): boolean {
            this.start();            
            const values = this._roBool.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * A read write u32 register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=97
        rwU32(): number {
            this.start();            
            const values = this._rwU32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write u32 register.
        */
        //% group="Protocol Test"
        //% weight=96
        setRwU32(value: number) {
            this.start();
            const values = this._rwU32.values as any[];
            values[0] = value;
            this._rwU32.values = values as [number];
        }

        /**
        * A read only u32 register.. Mirrors rw_u32.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=95
        roU32(): number {
            this.start();            
            const values = this._roU32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i32 register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=94
        rwI32(): number {
            this.start();            
            const values = this._rwI32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i32 register.
        */
        //% group="Protocol Test"
        //% weight=93
        setRwI32(value: number) {
            this.start();
            const values = this._rwI32.values as any[];
            values[0] = value;
            this._rwI32.values = values as [number];
        }

        /**
        * A read only i32 register.. Mirrors rw_i32.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=92
        roI32(): number {
            this.start();            
            const values = this._roI32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write string register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=91
        rwString(): string {
            this.start();            
            const values = this._rwString.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write string register.
        */
        //% group="Protocol Test"
        //% weight=90
        setRwString(value: string) {
            this.start();
            const values = this._rwString.values as any[];
            values[0] = value;
            this._rwString.values = values as [string];
        }

        /**
        * A read only string register. Mirrors rw_string.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=89
        roString(): string {
            this.start();            
            const values = this._roString.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write string register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=88
        rwBytes(): Buffer {
            this.start();            
            const values = this._rwBytes.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write string register.
        */
        //% group="Protocol Test"
        //% weight=87
        setRwBytes(value: Buffer) {
            this.start();
            const values = this._rwBytes.values as any[];
            values[0] = value;
            this._rwBytes.values = values as [Buffer];
        }

        /**
        * A read only string register. Mirrors ro_bytes.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=86
        roBytes(): Buffer {
            this.start();            
            const values = this._roBytes.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=85
        i8(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=84
        setI8(value: number) {
            this.start();
            const values = this._rwI8U8U16I32.values as any[];
            values[0] = value;
            this._rwI8U8U16I32.values = values as [number,number,number,number];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=83
        u8(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=82
        setU8(value: number) {
            this.start();
            const values = this._rwI8U8U16I32.values as any[];
            values[1] = value;
            this._rwI8U8U16I32.values = values as [number,number,number,number];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=81
        u16(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=80
        setU16(value: number) {
            this.start();
            const values = this._rwI8U8U16I32.values as any[];
            values[2] = value;
            this._rwI8U8U16I32.values = values as [number,number,number,number];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=79
        i32(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=78
        setI32(value: number) {
            this.start();
            const values = this._rwI8U8U16I32.values as any[];
            values[3] = value;
            this._rwI8U8U16I32.values = values as [number,number,number,number];
        }

        /**
        * A read only i8, u8, u16, i32 register.. Mirrors rw_i8_u8_u16_i32.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=77
        i8(): number {
            this.start();            
            const values = this._roI8U8U16I32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read only i8, u8, u16, i32 register.. Mirrors rw_i8_u8_u16_i32.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=76
        u8(): number {
            this.start();            
            const values = this._roI8U8U16I32.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * A read only i8, u8, u16, i32 register.. Mirrors rw_i8_u8_u16_i32.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=75
        u16(): number {
            this.start();            
            const values = this._roI8U8U16I32.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * A read only i8, u8, u16, i32 register.. Mirrors rw_i8_u8_u16_i32.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=74
        i32(): number {
            this.start();            
            const values = this._roI8U8U16I32.pauseUntilValues() as any[];
            return values[3];
        }
 

        /**
         * An event raised when rw_bool is modified
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_e_bool
        //% block="on %prototest e bool"
        //% weight=73
        onEBool(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EBool, handler);
        }
        /**
         * An event raised when rw_u32 is modified
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_e_u32
        //% block="on %prototest e u32"
        //% weight=72
        onEU32(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EU32, handler);
        }
        /**
         * An event raised when rw_i32 is modified
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_e_i32
        //% block="on %prototest e i32"
        //% weight=71
        onEI32(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EI32, handler);
        }
        /**
         * An event raised when rw_string is modified
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_e_string
        //% block="on %prototest e string"
        //% weight=70
        onEString(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EString, handler);
        }
        /**
         * An event raised when rw_bytes is modified
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_e_bytes
        //% block="on %prototest e bytes"
        //% weight=69
        onEBytes(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EBytes, handler);
        }
        /**
         * An event raised when rw_i8_u8_u16_i32 is modified
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_e_i8_u8_u16_i32
        //% block="on %prototest e i8 u8 u16 i32"
        //% weight=68
        onEI8U8U16I32(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EI8U8U16I32, handler);
        }

        /**
        * A command to set rw_bool. Returns the value.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_bool_cmd
        //% block="%prototest c bool"
        //% weight=67
        cBool(bool: boolean): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CBool, "u8", [bool]))
        }

        /**
        * A command to set rw_u32. Returns the value.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_u32_cmd
        //% block="%prototest c u32"
        //% weight=66
        cU32(u32: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CU32, "u32", [u32]))
        }

        /**
        * A command to set rw_i32. Returns the value.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_i32_cmd
        //% block="%prototest c i32"
        //% weight=65
        cI32(i32: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CI32, "i32", [i32]))
        }

        /**
        * A command to set rw_string. Returns the value.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_string_cmd
        //% block="%prototest c string"
        //% weight=64
        cString(string: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CString, "s", [string]))
        }

        /**
        * A command to set rw_string. Returns the value.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_bytes_cmd
        //% block="%prototest c bytes"
        //% weight=63
        cBytes(bytes: Buffer): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CBytes, "b", [bytes]))
        }

        /**
        * A command to set rw_bytes. Returns the value.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_i8_u8_u16_i32_cmd
        //% block="%prototest c i8 u8 u16 i32"
        //% weight=62
        cI8U8U16I32(i8: number, u8: number, u16: number, i32: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CI8U8U16I32, "i8 u8 u16 i32", [i8, u8, u16, i32]))
        }
    
    }
    //% fixedInstance whenUsed
    export const protoTest = new ProtoTestClient("proto Test");
}