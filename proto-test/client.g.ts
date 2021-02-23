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
        rwBool(): boolean {
            this.start();            
            const values = this._rwBool.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * A read write bool register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest rw bool to %value"
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
        rwU32(): number {
            this.start();            
            const values = this._rwU32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write u32 register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest rw u32 to %value"
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
        rwI32(): number {
            this.start();            
            const values = this._rwI32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i32 register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest rw i32 to %value"
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
        rwString(): string {
            this.start();            
            const values = this._rwString.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write string register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest rw string to %value"
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
        rwBytes(): Buffer {
            this.start();            
            const values = this._rwBytes.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write string register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest rw bytes to %value"
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
        i8(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest i8 to %value"
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
        u8(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest u8 to %value"
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
        u16(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest u16 to %value"
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
        i32(): number {
            this.start();            
            const values = this._rwI8U8U16I32.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * A read write i8, u8, u16, i32 register.
        */
        //% 
        //% group="Protocol Test"
        //% block="set %prototest i32 to %value"
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
        i32(): number {
            this.start();            
            const values = this._roI8U8U16I32.pauseUntilValues() as any[];
            return values[3];
        }
 

        /**
         * An event raised when rw_bool is modified
         */
        //% blockId=jacdac_on_prototest_e_bool
        //% block="e bool" blockSetVariable=myModule
        //% group="Protocol Test"
        onEBool(handler: () => void) {
            this.registerEvent(jacdac.ProtoTestEvent.EBool, handler);
        }
        /**
         * An event raised when rw_u32 is modified
         */
        //% blockId=jacdac_on_prototest_e_u32
        //% block="e u32" blockSetVariable=myModule
        //% group="Protocol Test"
        onEU32(handler: () => void) {
            this.registerEvent(jacdac.ProtoTestEvent.EU32, handler);
        }
        /**
         * An event raised when rw_i32 is modified
         */
        //% blockId=jacdac_on_prototest_e_i32
        //% block="e i32" blockSetVariable=myModule
        //% group="Protocol Test"
        onEI32(handler: () => void) {
            this.registerEvent(jacdac.ProtoTestEvent.EI32, handler);
        }
        /**
         * An event raised when rw_string is modified
         */
        //% blockId=jacdac_on_prototest_e_string
        //% block="e string" blockSetVariable=myModule
        //% group="Protocol Test"
        onEString(handler: () => void) {
            this.registerEvent(jacdac.ProtoTestEvent.EString, handler);
        }
        /**
         * An event raised when rw_bytes is modified
         */
        //% blockId=jacdac_on_prototest_e_bytes
        //% block="e bytes" blockSetVariable=myModule
        //% group="Protocol Test"
        onEBytes(handler: () => void) {
            this.registerEvent(jacdac.ProtoTestEvent.EBytes, handler);
        }
        /**
         * An event raised when rw_i8_u8_u16_i32 is modified
         */
        //% blockId=jacdac_on_prototest_e_i8_u8_u16_i32
        //% block="e i8 u8 u16 i32" blockSetVariable=myModule
        //% group="Protocol Test"
        onEI8U8U16I32(handler: () => void) {
            this.registerEvent(jacdac.ProtoTestEvent.EI8U8U16I32, handler);
        }
    }
    //% fixedInstance whenUsed
    export const protoTest = new ProtoTestClient("proto Test");
}