import { readFileSync } from "node:fs"
const src = readFileSync(
    "../../jacdac-ts/jacdac-spec/services/hidkeyboard.md",
    { encoding: "utf-8" }
)
const keys = []

src.replace(
    /^\s+_?(?<name>[a-z0-9])\s+=\s+(?<value>0x[a-f0-9]+)/gim,
    (m, name, value) => {
        keys[name.charCodeAt(0)] = parseInt(value, 16)
    }
)

const others = {
    "\t": 0x2b,
    " ": 0x2c,
    "-": 0x2d,
    "=": 0x2e,
    "[": 0x2f,
    "]": 0x30,
    "\\": 0x31,
    ";": 0x33,
    '"': 0x34,
    ",": 0x36,
    ".": 0x37,
    "/": 0x38,
}
Object.keys(others).forEach(k => (keys[k.charCodeAt(0)] = others[k]))

let hex = "const letters = hex`"
for (let i = 0; i < keys.length; ++i) {
    const c = keys[i] || 0
    hex += c.toString(16)
}
hex += "`"

console.log(keys)
console.log(hex)
