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
    
            
    }

    //% fixedInstance whenUsed
    export const protoTest = new ProtoTestClient("proto Test");
}