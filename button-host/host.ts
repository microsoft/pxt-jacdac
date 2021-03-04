namespace jacdac {
    export class ButtonHost extends jacdac.SensorHost {
        constructor(dev: string, public readonly button: Button) {
            super(dev, jacdac.constants.SRV_BUTTON);
            this.button.onEvent(ButtonEvent.Down, () => this.sendEvent(constants.ButtonEvent.Down));
            this.button.onEvent(ButtonEvent.Up, () => this.sendEvent(constants.ButtonEvent.Up));
            this.button.onEvent(ButtonEvent.Click, () => this.sendEvent(constants.ButtonEvent.Click));
            this.button.onEvent(ButtonEvent.LongClick, () => this.sendEvent(constants.ButtonEvent.LongClick));
            this.button.onEvent(<number>DAL.DEVICE_BUTTON_EVT_HOLD, () => this.sendEvent(constants.ButtonEvent.Hold));
        }

        serializeState(): Buffer {
            const pressed = this.button.isPressed();
            return jacdac.jdpack("u8", [ pressed ? 1 : 0]);
        }
    }
}
