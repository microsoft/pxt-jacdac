namespace jacdac {
    const INTERNAL_KEY_UP = 2050;
    const INTERNAL_KEY_DOWN = 2051;

    //% fixedInstances
    export class ArcadeControlsClient extends Client {
        constructor(requiredDevice: string = null) {
            super("apad", SRV_GAMEPAD, requiredDevice);
        }

        handlePacket(pkt: JDPacket) {
            if (pkt.isEvent) {
                const evid = pkt.eventCode
                let evsrc = 0
                if (evid == GamepadEvent.Down)
                    evsrc = INTERNAL_KEY_DOWN
                else if (evid == GamepadEvent.Up)
                    evsrc = INTERNAL_KEY_UP
                if (!evsrc) return
                control.raiseEvent(evsrc, pkt.intData)
            }
        }
    }

    //% fixedInstance whenUsed
    export const arcadeControls = new ArcadeControlsClient();
}