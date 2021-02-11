namespace modules {
    //% fixedInstances
    export class RngClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_RNG, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const rng = new RngClient("rng");
}