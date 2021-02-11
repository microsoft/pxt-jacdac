namespace modules {
    //% fixedInstances
    export class LedPixelClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LED_PIXEL, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const ledPixel = new LedPixelClient("led Pixel");
}