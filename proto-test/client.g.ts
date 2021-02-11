namespace modules {
    /**
     * This is test service to validate the protocol packet transmissions between the browser and a MCU.
     * Use this page if you developing Jacdac HDK for a new platform.
     **/
    //% fixedInstances blockGap=8
    export class ProtoTestClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_PROTO_TEST, role);
            
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