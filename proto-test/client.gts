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
        private readonly _rwU8String : jacdac.RegisterClient<[number,string]>;
        private readonly _roU8String : jacdac.RegisterClient<[number,string]>;            

        constructor(role: string) {
            super(jacdac.SRV_PROTO_TEST, role);

            this._rwBool = this.addRegister<[boolean]>(jacdac.ProtoTestReg.RwBool, jacdac.ProtoTestRegPack.RwBool);
            this._roBool = this.addRegister<[boolean]>(jacdac.ProtoTestReg.RoBool, jacdac.ProtoTestRegPack.RoBool);
            this._rwU32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RwU32, jacdac.ProtoTestRegPack.RwU32);
            this._roU32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RoU32, jacdac.ProtoTestRegPack.RoU32);
            this._rwI32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RwI32, jacdac.ProtoTestRegPack.RwI32);
            this._roI32 = this.addRegister<[number]>(jacdac.ProtoTestReg.RoI32, jacdac.ProtoTestRegPack.RoI32);
            this._rwString = this.addRegister<[string]>(jacdac.ProtoTestReg.RwString, jacdac.ProtoTestRegPack.RwString);
            this._roString = this.addRegister<[string]>(jacdac.ProtoTestReg.RoString, jacdac.ProtoTestRegPack.RoString);
            this._rwBytes = this.addRegister<[Buffer]>(jacdac.ProtoTestReg.RwBytes, jacdac.ProtoTestRegPack.RwBytes);
            this._roBytes = this.addRegister<[Buffer]>(jacdac.ProtoTestReg.RoBytes, jacdac.ProtoTestRegPack.RoBytes);
            this._rwI8U8U16I32 = this.addRegister<[number,number,number,number]>(jacdac.ProtoTestReg.RwI8U8U16I32, jacdac.ProtoTestRegPack.RwI8U8U16I32);
            this._roI8U8U16I32 = this.addRegister<[number,number,number,number]>(jacdac.ProtoTestReg.RoI8U8U16I32, jacdac.ProtoTestRegPack.RoI8U8U16I32);
            this._rwU8String = this.addRegister<[number,string]>(jacdac.ProtoTestReg.RwU8String, jacdac.ProtoTestRegPack.RwU8String);
            this._roU8String = this.addRegister<[number,string]>(jacdac.ProtoTestReg.RoU8String, jacdac.ProtoTestRegPack.RoU8String);            
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
        rwI8U8U16I32I8(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=84
        setRwI8U8U16I32I8(value: number) {
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
        rwI8U8U16I32U8(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=82
        //% value.min=0
        //% value.max=255
        setRwI8U8U16I32U8(value: number) {
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
        rwI8U8U16I32U16(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=80
        //% value.min=0
        //% value.max=65535
        setRwI8U8U16I32U16(value: number) {
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
        rwI8U8U16I32I32(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% group="Protocol Test"
        //% weight=78
        setRwI8U8U16I32I32(value: number) {
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
        roI8U8U16I32I8(): number {
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
        roI8U8U16I32U8(): number {
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
        roI8U8U16I32U16(): number {
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
        roI8U8U16I32I32(): number {
            this.start();            
            const values = this._roI8U8U16I32.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * A read write u8, string register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=73
        rwU8StringU8(): number {
            this.start();            
            const values = this._rwU8String.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write u8, string register.
        */
        //% group="Protocol Test"
        //% weight=72
        //% value.min=0
        //% value.max=255
        setRwU8StringU8(value: number) {
            this.start();
            const values = this._rwU8String.values as any[];
            values[0] = value;
            this._rwU8String.values = values as [number,string];
        }

        /**
        * A read write u8, string register.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=71
        rwU8StringStr(): string {
            this.start();            
            const values = this._rwU8String.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * A read write u8, string register.
        */
        //% group="Protocol Test"
        //% weight=70
        setRwU8StringStr(value: string) {
            this.start();
            const values = this._rwU8String.values as any[];
            values[1] = value;
            this._rwU8String.values = values as [number,string];
        }

        /**
        * A read only u8, string register.. Mirrors rw_u8_string.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=69
        roU8StringU8(): number {
            this.start();            
            const values = this._roU8String.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read only u8, string register.. Mirrors rw_u8_string.
        */
        //% callInDebugger
        //% group="Protocol Test"
        //% weight=68
        roU8StringStr(): string {
            this.start();            
            const values = this._roU8String.pauseUntilValues() as any[];
            return values[1];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Protocol Test"
        //% blockId=jacdac_on_prototest_event
        //% block="on %prototest %event"
        //% weight=67
        onEvent(ev: jacdac.ProtoTestEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * An event raised when rw_bool is modified
         */
        //% group="Protocol Test"
        //% weight=66
        onEBool(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EBool, handler);
        }
        /**
         * An event raised when rw_u32 is modified
         */
        //% group="Protocol Test"
        //% weight=65
        onEU32(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EU32, handler);
        }
        /**
         * An event raised when rw_i32 is modified
         */
        //% group="Protocol Test"
        //% weight=64
        onEI32(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EI32, handler);
        }
        /**
         * An event raised when rw_string is modified
         */
        //% group="Protocol Test"
        //% weight=63
        onEString(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EString, handler);
        }
        /**
         * An event raised when rw_bytes is modified
         */
        //% group="Protocol Test"
        //% weight=62
        onEBytes(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EBytes, handler);
        }
        /**
         * An event raised when rw_i8_u8_u16_i32 is modified
         */
        //% group="Protocol Test"
        //% weight=61
        onEI8U8U16I32(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EI8U8U16I32, handler);
        }
        /**
         * An event raised when rw_u8_string is modified
         */
        //% group="Protocol Test"
        //% weight=60
        onEU8String(handler: () => void): void {
            this.registerEvent(jacdac.ProtoTestEvent.EU8String, handler);
        }

        /**
        * A command to set rw_bool.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_bool_cmd
        //% block="%prototest c bool $bo"
        //% weight=59
        cBool(bo: boolean): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CBool, "u8", [bo]))
        }

        /**
        * A command to set rw_u32.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_u32_cmd
        //% block="%prototest c u32 $u32"
        //% weight=58
        cU32(u32: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CU32, "u32", [u32]))
        }

        /**
        * A command to set rw_i32.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_i32_cmd
        //% block="%prototest c i32 $i32"
        //% weight=57
        cI32(i32: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CI32, "i32", [i32]))
        }

        /**
        * A command to set rw_string.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_string_cmd
        //% block="%prototest c string $str"
        //% weight=56
        cString(str: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CString, "s", [str]))
        }

        /**
        * A command to set rw_string.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_bytes_cmd
        //% block="%prototest c bytes $bytes"
        //% weight=55
        cBytes(bytes: Buffer): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CBytes, "b", [bytes]))
        }

        /**
        * A command to set rw_bytes.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_i8_u8_u16_i32_cmd
        //% block="%prototest c i8 u8 u16 i32 |i8 $i8 |u8 $u8 |u16 $u16 |i32 $i32"
        //% weight=54
        cI8U8U16I32(i8: number, u8: number, u16: number, i32: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CI8U8U16I32, "i8 u8 u16 i32", [i8, u8, u16, i32]))
        }

        /**
        * A command to set rw_u8_string.
        */
        //% group="Protocol Test"
        //% blockId=jacdac_prototest_c_u8_string_cmd
        //% block="%prototest c u8 string |u8 $u8 |str $str"
        //% weight=53
        cU8String(u8: number, str: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.ProtoTestCmd.CU8String, "u8 s", [u8, str]))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="proto test1"
    export const protoTest1 = new ProtoTestClient("proto Test1");
}