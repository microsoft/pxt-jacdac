namespace jd_class {
    // needs spec
    export const CONTROLLER = 0x188ae4b8;
}

namespace jacdac {
    // common logging level for jacdac services
    export let consolePriority = ConsolePriority.Debug;

    export function toHex(n: number): string {
        const hexBuf = control.createBuffer(4);
        hexBuf.setNumber(NumberFormat.UInt32LE, 0, n);
        return hexBuf.toHex();
    }
    export function toHex16(n: number): string {
        const hexBuf = control.createBuffer(2);
        hexBuf.setNumber(NumberFormat.UInt16LE, 0, n);
        return hexBuf.toHex();
    }
    export function toHex8(n: number): string {
        const hexBuf = control.createBuffer(1);
        hexBuf.setNumber(NumberFormat.UInt8LE, 0, n);
        return hexBuf.toHex();
    }

    // events are send with this device ID
    export const JD_MESSAGE_BUS_ID = 2000;

    export const BUTTON_EVENTS: number[] = [
        DAL.DEVICE_BUTTON_EVT_CLICK,
        DAL.DEVICE_BUTTON_EVT_LONG_CLICK,
        DAL.DEVICE_BUTTON_EVT_DOWN,
        DAL.DEVICE_BUTTON_EVT_UP
    ];
}

const enum JDKeyboardCommand {
    Type = 0x80,
    Key = 0x81,
    MediaKey = 0x82,
    FunctionKey = 0x83,
}

const enum JDGamepadCommand {
    Button = 0x80,
    Move = 0x81,
    Throttle = 0x82,
}

const enum JDDimension {
    //% block=x
    X = 0,
    //% block=y
    Y = 1,
    //% block=z
    Z = 2,
    //% block=strength
    Strength = 3
}

const enum JDControllerCommand {
    ClientButtons = 1,
    ControlServer = 2,
    ControlClient = 3
}

const enum JDControllerButton {
    A = 5,
    B = 6,
    Left = 1,
    Up = 2,
    Right = 3,
    Down = 4,
    Menu = 7
}
