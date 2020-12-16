namespace jacdac {
    const INTERNAL_KEY_UP = 2050;
    const INTERNAL_KEY_DOWN = 2051;

    //% fixedInstances
    export class ArcadeControlsClient extends Client {
        constructor(requiredDevice: string = null) {
            super("apad", SRV_GAMEPAD, requiredDevice);
        }

        handlePacket(pkt: JDPacket) {
            if (pkt.service_command == jacdac.SystemCmd.Event) {
                const [evid, key] = jdunpack<[number, number]>(pkt.data, "u32 u32");
                let evsrc = 0
                if (evid == 1)
                    evsrc = INTERNAL_KEY_DOWN
                else if (evid == 2)
                    evsrc = INTERNAL_KEY_UP
                if (!evsrc) return
                control.raiseEvent(evsrc, key)
            }
        }
    }

    //% fixedInstance whenUsed
    export const arcadeControls = new ArcadeControlsClient();
}