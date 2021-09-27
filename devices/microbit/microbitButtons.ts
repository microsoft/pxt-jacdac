namespace servers {
    const SRV_BUTTON = 0x1473a263
    const enum ButtonEvent {
        Down = 0x1,
        Up = 0x2,
        Hold = 0x81,
    }

    export class MButton extends jacdac.SensorServer {
        constructor(dev: string, private button: number) {
            super(dev, SRV_BUTTON)
            control.onEvent(button, EventBusValue.MICROBIT_EVT_ANY, () => {
                let v = control.eventValue()
                if (v == EventBusValue.MICROBIT_BUTTON_EVT_DOWN)
                    this.sendEvent(ButtonEvent.Down)
                else if (v == EventBusValue.MICROBIT_BUTTON_EVT_UP)
                    this.sendEvent(ButtonEvent.Up)
            })
        }
        public serializeState(): Buffer {
            const pressed = input.buttonIsPressed(this.button)
            return jacdac.jdpack("u16", [pressed ? 0xffff : 0])
        }
    }

    //% fixedInstance whenUsed block="button A"
    export const buttonA = new servers.MButton("A", Button.A)
    //% fixedInstance whenUsed block="button B"
    export const buttonB = new servers.MButton("B", Button.B)
    //% fixedInstance whenUsed block="button AB"
    export const buttonAB = new servers.MButton("A+B", Button.AB)
    //% fixedInstance whenUsed block="button logo"
    export const buttonLogo = new servers.MButton("Logo", DAL.MICROBIT_ID_LOGO)

    export class TouchButton extends jacdac.SensorServer {
        pressed: boolean;
        prevPressed: boolean
        nextHold: number = 500000;
        pressTime: number;
        nextSample: number;

        constructor(dev: string, private button: number) {
            super(dev, SRV_BUTTON)
            // enable pin mode
            this.pressed = input.pinIsPressed(this.button)
            this.prevPressed = this.pressed
            control.onEvent(button, EventBusValue.MICROBIT_EVT_ANY, () => {
                this.update()
            })
            
        }

        private update() {
            this.pressed = input.pinIsPressed(this.button);

            if (this.pressed !== this.prevPressed) {
                this.prevPressed = this.pressed;
                if (this.pressed) {
                    this.sendEvent(ButtonEvent.Down)
                    this.pressTime = control.millis();
                    this.nextHold = 500000;
                    control.runInBackground(() => {
                        control.waitMicros(500000000)
                        if (this.pressed && this.nextHold)
                           this.update();
                    })
                } else {
                    const pressLen = control.millis() - this.pressTime;
                    this.nextHold = 0
                    this.sendEvent(
                        ButtonEvent.Up,
                        jacdac.jdpack("u32", [pressLen])
                    )
                }
            }
        
            if (this.pressed) {
                let pressLen = control.millis() - this.pressTime;
                if (pressLen >= this.nextHold) {
                    this.nextHold += 500000;
                    this.sendEvent(
                        ButtonEvent.Hold,
                        jacdac.jdpack("u32", [pressLen])
                    )
                    control.runInBackground(() => {
                        control.waitMicros(500000000)
                        if (this.pressed && this.nextHold)
                           this.update();
                    })
                }
            }

        }
        public serializeState(): Buffer {
            const pressed = input.pinIsPressed(this.button)
            return jacdac.jdpack("u16", [pressed ? 0xffff : 0])
        }
    }
    //% fixedInstance whenUsed block="button A"
    export const touchP0 = new servers.TouchButton("P0", TouchPin.P0)
    //% fixedInstance whenUsed block="button B"
    export const touchP1 = new servers.TouchButton("P1", TouchPin.P1)
    //% fixedInstance whenUsed block="button AB"
    export const touchP2 = new servers.TouchButton("P2", TouchPin.P2)
}
