namespace jacdac {
    export function isConstRegister(code: number) {
        return (0x180 <= code && code <= 0x1ff) || (0x100 <= code && code <= 0x17f)
    }
}