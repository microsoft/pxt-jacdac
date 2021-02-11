namespace modules {
    //% fixedInstances
    export class TcpClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_TCP, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const tcp = new TcpClient("tcp");
}