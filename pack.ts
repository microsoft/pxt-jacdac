namespace jacdac {
    // ASCII codes of characters
    const ch_b = 98
    const ch_i = 105
    const ch_r = 114
    const ch_s = 115
    const ch_u = 117
    const ch_x = 120
    const ch_z = 122
    const ch_0 = 48
    const ch_9 = 57
    const ch_colon = 58
    const ch_sq_open = 91
    const ch_sq_close = 93


    function numberFormatOfType(tp: string): NumberFormat {
        switch (tp) {
            case "u8": return NumberFormat.UInt8LE
            case "u16": return NumberFormat.UInt16LE
            case "u32": return NumberFormat.UInt32LE
            case "i8": return NumberFormat.Int8LE
            case "i16": return NumberFormat.Int16LE
            case "i32": return NumberFormat.Int32LE
            case "f32": return NumberFormat.Float32LE
            case "f64": return NumberFormat.Float64LE
            //case "i64": return NumberFormat.Int64LE
            //case "u64": return NumberFormat.UInt64LE
            default: return null
        }
    }

    function bufferToString(buf: Buffer) {
        return buf.toString();
    }

    function stringToBuffer(str: string) {
        return Buffer.fromUTF8(str);
    }

    function bufferSlice(buf: Buffer, start: number, end: number) {
        return buf.slice(start, end - start)
    }

    class TokenParser {
        c0: number
        size: number
        div: number
        fp = 0
        nfmt: NumberFormat
        word: string
        isArray: boolean

        constructor(public fmt: string) { }

        parse() {
            this.div = 1
            this.isArray = false

            const fmt = this.fmt
            while (this.fp < fmt.length) {
                let endp = this.fp
                while (endp < fmt.length && fmt.charCodeAt(endp) != 32)
                    endp++
                let word = fmt.slice(this.fp, endp)
                this.fp = endp + 1
                if (!word)
                    continue

                const dotIdx = word.indexOf(".")
                let c0 = word.charCodeAt(0)
                // "u10.6" -> "u16", div = 1 << 6
                if ((c0 == ch_i || c0 == ch_u) && dotIdx >= 0) {
                    const sz0 = parseInt(word.slice(1, dotIdx))
                    const sz1 = parseInt(word.slice(dotIdx + 1))
                    word = word[0] + (sz0 + sz1)
                    this.div = 1 << sz1
                }

                const c1 = word.charCodeAt(1)
                if (c1 == ch_sq_open) {
                    this.size = parseInt(word.slice(2))
                } else {
                    this.size = -1
                }

                if (word.charCodeAt(word.length - 1) == ch_sq_close && word.charCodeAt(word.length - 2) == ch_sq_open) {
                    word = word.slice(0, -2)
                    this.isArray = true
                }

                this.nfmt = numberFormatOfType(word)
                this.word = word

                if (this.nfmt == null) {
                    if (c0 == ch_r) {
                        if (c1 != ch_colon)
                            c0 = 0
                    } else if (c0 == ch_s || c0 == ch_b || c0 == ch_x) {
                        if (word.length != 1 && this.size == -1)
                            c0 = 0
                    } else if (c0 == ch_z) {
                        if (word.length != 1)
                            c0 = 0
                    } else {
                        c0 = 0
                    }
                    if (c0 == 0)
                        throw (`invalid format: ${word}`)
                    this.c0 = c0
                } else {
                    this.size = Buffer.sizeOfNumberFormat(this.nfmt)
                    this.c0 = -1
                }

                return true
            }
            return false
        }
    }

    function jdunpackCore(buf: Buffer, fmt: string, off: number, repeat: number) {
        const repeatRes: any[][] = repeat ? [] : null
        let res: any[] = []
        let fp0 = 0
        const parser = new TokenParser(fmt)
        if (repeat && buf.length == 0)
            return []
        while (parser.parse()) {
            if (parser.isArray && !repeat) {
                res.push(jdunpackCore(buf, fmt.slice(fp0), off, 1))
                return res
            }

            fp0 = parser.fp
            let sz = parser.size
            const c0 = parser.c0
            if (c0 == ch_z) {
                let endoff = off
                while (endoff < buf.length && buf[endoff] != 0)
                    endoff++
                sz = endoff - off
            } else if (sz < 0) {
                sz = buf.length - off
            }

            if (parser.nfmt !== null) {
                let v = buf.getNumber(parser.nfmt, off)
                if (parser.div != 1) v /= parser.div
                res.push(v)
                off += parser.size
            } else {
                const subbuf = bufferSlice(buf, off, off + sz)
                if (c0 == ch_z || c0 == ch_s) {
                    let zerop = 0
                    while (zerop < subbuf.length && subbuf[zerop] != 0)
                        zerop++
                    res.push(bufferToString(bufferSlice(subbuf, 0, zerop)))
                } else if (c0 == ch_b) {
                    res.push(subbuf)
                } else if (c0 == ch_x) {
                    // skip padding
                } else if (c0 == ch_r) {
                    res.push(jdunpackCore(subbuf, fmt.slice(fp0), 0, 2))
                    break
                } else {
                    throw (`whoops`)
                }
                off += subbuf.length
                if (c0 == ch_z)
                    off++
            }


            if (repeat && parser.fp >= fmt.length) {
                parser.fp = 0
                if (repeat == 2) {
                    repeatRes.push(res)
                    res = []
                }
                if (off >= buf.length)
                    break
            }
        }

        if (repeat == 2) {
            if (res.length)
                repeatRes.push(res)
            return repeatRes
        } else {
            return res
        }
    }

    export function jdunpack<T extends any[]>(buf: Buffer, fmt: string, offset: number = 0): T {
        if (!buf || !fmt || offset < 0)
            return [] as T;
            
        // shortcut: crashes makecode
        //const storage = numberFormatOfType(fmt);
        //if (storage)
        //    return [buf.getNumber(storage, 0)] as T;
        return jdunpackCore(buf, fmt, offset, 0) as T
    }

    function jdpackCore(trg: Buffer, fmt: string, data: any[], off: number) {
        let idx = 0
        const parser = new TokenParser(fmt)
        while (parser.parse()) {
            const c0 = parser.c0

            if (c0 == ch_x) {
                // skip padding
                off += parser.size
                continue
            }

            let dataItem = data[idx++]

            if (c0 == ch_r) {
                const fmt0 = fmt.slice(parser.fp)
                for (const velt of (dataItem as any[][])) {
                    off = jdpackCore(trg, fmt0, velt, off)
                }
                break
            }

            // use temporary variable to avoid a Gatsby build bug
            let arr: any[]
            if (parser.isArray)
                arr = dataItem
            else
                arr = [dataItem]

            for (const v of arr) {
                if (parser.nfmt !== null) {
                    if (typeof v != "number")
                        throw (`expecting number, got ` + typeof v)
                    if (trg)
                        trg.setNumber(parser.nfmt, off, (v * parser.div) | 0)
                    off += parser.size
                } else {
                    let buf: Buffer
                    if (typeof v == "string") {
                        if (c0 == ch_z)
                            buf = stringToBuffer(v + "\u0000")
                        else if (c0 == ch_s)
                            buf = stringToBuffer(v)
                        else
                            throw (`unexpected string`)
                    } else if (v && typeof v == "object" && (v as Buffer).length != null) {
                        // assume buffer
                        if (c0 == ch_b)
                            buf = v
                        else
                            throw (`unexpected buffer`)
                    } else {
                        throw (`expecting string or buffer`)
                    }

                    let sz = parser.size
                    if (sz >= 0) {
                        if (buf.length > sz)
                            buf = bufferSlice(buf, 0, sz)
                    } else {
                        sz = buf.length
                    }

                    if (trg)
                        trg.write(off, buf)
                    off += sz
                }
            }
        }

        if (data.length > idx)
            throw (`format too short`)

        return off
    }

    export function jdpack<T extends any[]>(fmt: string, data: T): Buffer {
        if (!fmt || !data)
            return undefined;

        // shortcut crashes makecode
        //const storage = numberFormatOfType(fmt);
        //if (storage) {
        //    const len = Buffer.sizeOfNumberFormat(storage)
        //    const buf = Buffer.create(len)
        //    buf.setNumber(storage, 0, data[0] || 0);
        //    return buf;
        //}

        const len = jdpackCore(null, fmt, data, 0)
        const res = Buffer.create(len)
        jdpackCore(res, fmt, data, 0)
        return res
    }

    export function jdpackEqual<T extends any[]>(fmt: string, left: T, right: T) {
        if ((!left) !== (!right))
            return false;
        if (!left) return true;
    
        const leftBuffer = jdpack<T>(fmt, left);
        const rightBuffer = jdpack<T>(fmt, right);
        return leftBuffer.equals(rightBuffer);
    }
}