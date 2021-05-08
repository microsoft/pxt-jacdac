namespace jacdac {
    export class HIDKeyboardServer extends jacdac.Server {
        constructor(dev: string) {
            super(dev, jacdac.SRV_HID_KEYBOARD);

            // todo events
        }

        handleClearCommand(packet: JDPacket) {
            keyboard.clearAllKeys();
        }

        handleKeyCommand(packet: JDPacket) {
            let upacked = packet.jdunpack<number[]>("r: u16 u8 u8")

            // each key press is represented by 32 bits, unpacked into three "numbers"
            for (let i = 0; i < upacked.length / 3; i+=3){
                const selector = upacked[i];
                const modifier = upacked[i + 1]
                const action = upacked[i + 2]
                if (modifier == 0)
                    keyboard.key(selector.toString(), action);
                else {
                    let mapped = 0;
                    switch (modifier) {
                        case KeyboardModifiers.LeftControl:
                            mapped = keyboard.KeyboardModifierKey.Control
                            break;
                        case KeyboardModifiers.LeftShift:
                            mapped = keyboard.KeyboardModifierKey.Shift
                            break;
                        case KeyboardModifiers.LeftAlt:
                            mapped = keyboard.KeyboardModifierKey.Alt
                            break;
                        case KeyboardModifiers.LeftGUID:
                            mapped = keyboard.KeyboardModifierKey.Meta
                            break;
                        case KeyboardModifiers.RightControl:
                            mapped = keyboard.KeyboardModifierKey.RightControl
                            break;
                        case KeyboardModifiers.RightShift:
                            mapped = keyboard.KeyboardModifierKey.RightShift
                            break;
                        case KeyboardModifiers.RightAlt:
                            mapped = keyboard.KeyboardModifierKey.RightAlt
                            break;
                        case KeyboardModifiers.RightGUID:
                            mapped = keyboard.KeyboardModifierKey.RightGUID
                            break;
                    }

                    if (mapped)
                        keyboard.modifierKey(mapped, action);
                }
            }
        }

        handlePacket(packet: JDPacket) {
            switch (packet.serviceCommand) {
                case jacdac.KeyboardCmd.Clear: this.handleClearCommand(packet); break;
                case jacdac.KeyboardCmd.Key: this.handleKeyCommand(packet); break;
            }
        }
    }
}
