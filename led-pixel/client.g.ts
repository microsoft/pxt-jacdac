namespace modules {
    /**
     * A controller for strips of individually controlled RGB LEDs.
     **/
    //% fixedInstances blockGap=8
    export class LedPixelClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LED_PIXEL, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const ledPixel = new LedPixelClient("led Pixel");
}