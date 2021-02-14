namespace microbit {
    // Service: Button
    const SRV_BUTTON = 0x1473a263
    const enum ButtonReg {
        /**
         * Read-only bool (uint8_t). Indicates whether the button is currently active (pressed).
         *
         * ```
         * const [pressed] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Pressed = 0x101,
    }
    const enum ButtonEvent {
        /**
         * Emitted when button goes from inactive (`pressed == 0`) to active.
         */
        //% block="down"
        Down = 0x1,
        /**
         * Emitted when button goes from active (`pressed == 1`) to inactive.
         */
        //% block="up"
        Up = 0x2,
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% block="click"
        Click = 0x80,
        /**
         * Emitted together with `up` when the press time was more than 500ms.
         */
        //% block="long click"
        LongClick = 0x81,
    }

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
