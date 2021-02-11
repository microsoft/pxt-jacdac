namespace modules {
    //% fixedInstances
    export class LedMatrixClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LED_MATRIX, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const ledMatrix = new LedMatrixClient("led Matrix");
}