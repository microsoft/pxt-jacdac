namespace modules {
    //% fixedInstances
    export class HidMouseClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_HID_MOUSE, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const hidMouse = new HidMouseClient("hid Mouse");
}