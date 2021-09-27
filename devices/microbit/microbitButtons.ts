namespace servers {
    const SRV_BUTTON = 0x1473a263
    
    const enum ButtonEvent {
        Down = 0x1,
        Up = 0x2,
        Hold = 0x81,
    }

    class BaseButton extends jacdac.SensorServer {
        pressed: boolean;
        prevPressed: boolean
        nextHold: number = 500000;
        pressTime: number;
        nextSample: number;

        constructor(dev: string, protected button: number) {
            super(dev, SRV_BUTTON)
            this.pressed = this.isPressed()
            this.prevPressed = this.pressed
            control.onEvent(button, EventBusValue.MICROBIT_EVT_ANY, () => {
                const v = control.eventValue()
                this.update(v === EventBusValue.MICROBIT_BUTTON_EVT_DOWN ? true :
                    v === EventBusValue.MICROBIT_BUTTON_EVT_UP ? false : undefined)
            })          
        }

        protected isPressed() {
            return false
        }

        private update(pressed: boolean) {
            if (pressed === undefined)
                return
            this.pressed = pressed

            if (this.pressed !== this.prevPressed) {
                this.prevPressed = this.pressed;
                if (this.pressed) {
                    this.sendEvent(ButtonEvent.Down)
                    this.pressTime = control.millis();
                    this.nextHold = 500
                    control.runInBackground(() => {
                        pause(500)
                        if (this.pressed && this.nextHold)
                           this.update(true);
                    })
                } else {
                    const pressLen = control.millis() - this.pressTime;
                    this.nextHold = 0
                    this.sendEvent(
                        ButtonEvent.Up,
                        jacdac.jdpack("u32", [pressLen])
                    )
                }
            } else if (this.pressed) {
                let pressLen = control.millis() - this.pressTime;
                if (pressLen >= this.nextHold) {
                    this.nextHold += 500;
                    this.sendEvent(
                        ButtonEvent.Hold,
                        jacdac.jdpack("u32", [pressLen])
                    )
                    control.runInBackground(() => {
                        pause(500)
                        if (this.pressed && this.nextHold)
                           this.update(true);
                    })
                }
            }

        }

        public serializeState(): Buffer {
            const pressed = this.isPressed()
            return jacdac.jdpack("u16", [pressed ? 0xffff : 0])
        }
    }

    // button as button
    export class MButton extends BaseButton {
        protected isPressed() {
            const pressed = input.buttonIsPressed(this.button) 
            return pressed
        }
    }

    // pin as button
    export class TouchButton extends BaseButton {
        protected isPressed() {
            return input.pinIsPressed(this.button)
        }
    }

    // logo as button
    export class LogoButton extends BaseButton {
        protected isPressed() {
            return input.logoIsPressed()
        }
    }

    //% fixedInstance whenUsed block="button A"
    export const buttonA = new servers.MButton("A", Button.A)
    //% fixedInstance whenUsed block="button B"
    export const buttonB = new servers.MButton("B", Button.B)
    //% fixedInstance whenUsed block="button AB"
    export const buttonAB = new servers.MButton("A+B", Button.AB)
    //% fixedInstance whenUsed block="button logo"
    export const buttonLogo = new servers.LogoButton("Logo", DAL.MICROBIT_ID_LOGO)
    //% fixedInstance whenUsed block="pin P0"
    export const touchP0 = new servers.TouchButton("P0", TouchPin.P0)
    //% fixedInstance whenUsed block="pin P1"
    export const touchP1 = new servers.TouchButton("P1", TouchPin.P1)
    //% fixedInstance whenUsed block="pin P2"
    export const touchP2 = new servers.TouchButton("P2", TouchPin.P2)
}
