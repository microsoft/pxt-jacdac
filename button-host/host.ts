namespace jacdac {
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

    const enum JDButtonEvent {
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
         * Emitted after button is held for 500ms. Long click events are followed by a separate up event.
         */
        //% block="long click"
        LongClick = 0x81,

        /**
         * Emitted after the button is held for 1500ms. Hold events are followed by a separate up event.
         */
        //% block="hold"
        Hold = 0x82,
    }

    export class ButtonHost extends jacdac.SensorHost {
        constructor(dev: string, public readonly button: Button) {
            super(dev, SRV_BUTTON);
            this.button.onEvent(ButtonEvent.Down, () => this.sendEvent(JDButtonEvent.Down));
            this.button.onEvent(ButtonEvent.Up, () => this.sendEvent(JDButtonEvent.Up));
            this.button.onEvent(ButtonEvent.Click, () => this.sendEvent(JDButtonEvent.Click));
            this.button.onEvent(ButtonEvent.LongClick, () => this.sendEvent(JDButtonEvent.LongClick));
            // TODO: Hold in makecode
            //this.button.onEvent(ButtonEvent., () => this.sendEvent(JDButtonEvent.Down));
        }

        serializeState(): Buffer {
            const pressed = this.button.isPressed();
            return jacdac.jdpack("u8", [ pressed ? 1 : 0]);
        }
    }
}
