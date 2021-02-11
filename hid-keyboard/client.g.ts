namespace modules {
    //% fixedInstances
    export class HidKeyboardClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_HID_KEYBOARD, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const hidKeyboard = new HidKeyboardClient("hid Keyboard");
}