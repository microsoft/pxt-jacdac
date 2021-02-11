namespace modules {
    //% fixedInstances
    export class ProtoTestClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_PROTO_TEST, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const protoTest = new ProtoTestClient("proto Test");
}