function fromHex(s) {
    const r = new Uint8Array(s.length >> 1);
    for (let i = 0; i < s.length; i += 2) {
        r[i >> 1] = parseInt(s.slice(i, i + 2), 16);
    }
    return r;
}
function readU32(s, off) {
    return new Uint32Array(s.slice(off, off + 4).buffer)[0];
}
function readFloat(s, off) {
    return new Float32Array(s.slice(off, off + 4).buffer)[0];
}
function u8toString(a) {
    let r = "";
    for (let i = 0; i < a.length; ++i)
        r += String.fromCharCode(a[i]);
    return r;
}
function parseMessage(str) {
    if (str[0] == "{") {
        const tmp = JSON.parse(str);
        if (tmp.body && typeof tmp.body["17"] == "number") {
            str = ""
            for (let i = 0; i < 10000; ++i) {
                const n = tmp.body[i + ""]
                if (typeof n != "number")
                    break
                str += String.fromCharCode(n)
            }
            if (str[0] == "{")
                return JSON.parse(str)
        } else {
            return tmp
        }
    }
    let buf = null;
    if (str.startsWith("4a444252"))
        buf = fromHex(str);
    else if (str.startsWith("JDBR"))
        buf = str;
    let off = 12 + 28;
    const res = {
        deviceTime: readU32(buf, 4) + 0x100000000 * readU32(buf, 8),
        readings: {}
    };
    while (off < buf.length) {
        let strp = off;
        while (buf[off])
            off++;
        const id = u8toString(buf.slice(strp, off));
        off++;
        const len = readU32(buf, off);
        off += 4;
        const endp = off + len;
        const readings = [];
        const timedelta = [];
        while (off < endp) {
            const ts = readU32(buf, off);
            timedelta.push(-ts);
            off += 4;
            const v = readFloat(buf, off);
            readings.push(v);
            off += 4;
        }
        // console.log(id, readings, timedelta)
        const [dev, serv] = id.split(":");
        if (!res.readings[dev])
            res.readings[dev] = {};
        res.readings[dev][serv] = {
            readings,
            timedelta
        };
    }
    return res;
}

let arg = process.argv[2]
if (!arg) {
    console.log("usage: node bin-parser.js <file|message>")
    process.exit(1)
}
if (arg.length < 80)
    arg = require("fs").readFileSync(arg, "utf-8")
const msg = parseMessage(arg)
console.log(JSON.stringify(msg, null, 2))