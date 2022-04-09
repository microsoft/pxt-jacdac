import JDButtonEvent = jacdac.ButtonEvent
import MkcdButtonEvent = ButtonEvent

namespace jacdac {
    export class ButtonServer extends jacdac.SensorServer {
        constructor(public readonly button: Button, options?: jacdac.SensorServerOptions) {
            super(jacdac.SRV_BUTTON, options)
            this.button.onEvent(MkcdButtonEvent.Down, () =>
                this.sendEvent(JDButtonEvent.Down)
            )
            this.button.onEvent(MkcdButtonEvent.Up, () =>
                this.sendEvent(JDButtonEvent.Up)
            )
            this.button.onEvent(<number>DAL.DEVICE_BUTTON_EVT_HOLD, () =>
                this.sendEvent(JDButtonEvent.Hold)
            )
        }

        serializeState(): Buffer {
            const pressed = this.button.isPressed()
            return jacdac.jdpack("u16", [pressed ? 0xffff : 0])
        }
    }
}
