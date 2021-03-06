namespace servers {
    const SRV_BUTTON = 0x1473a263
    export class MButton extends jacdac.SensorServer {
        constructor(dev: string, private button: number) {
            super(dev, SRV_BUTTON)
            control.onEvent(button, EventBusValue.MICROBIT_EVT_ANY, () => {
                let v = control.eventValue()
                if (v == EventBusValue.MICROBIT_BUTTON_EVT_DOWN)
                    this.sendEvent(0x1)
                else if (v == EventBusValue.MICROBIT_BUTTON_EVT_UP)
                    this.sendEvent(0x2)
            })
        }
        public serializeState(): Buffer {
            let pressed = input.buttonIsPressed(this.button)
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
}
