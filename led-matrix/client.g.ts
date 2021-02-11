namespace modules {
    /**
     * A rectangular monochrome LED matrix controller.
     **/
    //% fixedInstances blockGap=8
    export class LedMatrixClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LED_MATRIX, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const ledMatrix = new LedMatrixClient("led Matrix");
}