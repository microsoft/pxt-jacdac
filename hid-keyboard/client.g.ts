namespace modules {
    /**
     * Control a HID keyboard. 
     * 
     * This service cannot be simulated.
     * 
     * The codes for the key (selectors) is defined in the [HID Keyboard
     * specification](https://usb.org/sites/default/files/hut1_21.pdf), chapter 10 Keyboard/Keypad Page, page 81.
     * 
     * The device keeps tracks of the key state and is able to clear it all with the clear command.
     **/
    //% fixedInstances blockGap=8
    export class HidKeyboardClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_HID_KEYBOARD, role);
            
        }
    
     
     

    }
    //% fixedInstance whenUsed
    export const hidKeyboard = new HidKeyboardClient("hid Keyboard");
}