import { readFileSync } from "node:fs"
const src = readFileSync(
    "../../jacdac-ts/jacdac-spec/services/hidkeyboard.md",
    { encoding: "utf-8" }
)
const keys = []

src.replace(
    /^\s+_?(?<name>[a-z0-9])\s+=\s+(?<value>0x[a-f0-9]+)/gim,
    (m, name, value) => {
        const k = name.charCodeAt(0)
        const v = parseInt(value, 16)
        keys[k] = v
        console.log(`${k} (${name.charAt(0)}) = ${v}`)
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
console.log(keys)


const n = Math.max(...Object.keys(keys))
console.log(n)
let hex = "const letters = hex`"
for (let i = 0; i < n; ++i) {
    const c = keys[i] || 0
    hex += ("00" + c.toString(16)).slice(-2)
}
hex += "`"

console.log(hex)
