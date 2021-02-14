namespace microbit {
    export class MButton extends jacdac.SensorHost {
        constructor(dev: string, private button: Button) {
            super(dev, SRV_BUTTON);
            control.onEvent(button, EventBusValue.MICROBIT_EVT_ANY, 
            () => {    
                let v = control.eventValue();    
                if (v == EventBusValue.MICROBIT_BUTTON_EVT_DOWN)
                    this.sendEvent(ButtonEvent.Down);
                else if (v == EventBusValue.MICROBIT_BUTTON_EVT_UP)
                    this.sendEvent(ButtonEvent.Up);
            })
        }
        public serializeState(): Buffer {
            let pressed = input.buttonIsPressed(this.button);
            return jacdac.jdpack("u8", [ pressed ? 1 : 0]);
        }
    }
}
