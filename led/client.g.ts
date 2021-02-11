namespace modules {
    /**
     * A controller for 1 or more monochrome or RGB LEDs connected in parallel.
     **/
    //% fixedInstances blockGap=8
    export class LedClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LED, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const led = new LedClient("led");
}