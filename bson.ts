// completely untested - checking in so it doesn't get lost

namespace jacdac {
    const enum BsonTypes {
        Double = 0x01,
        String = 0x02,
        NestedDocument = 0x03,
        NestedArray = 0x04,
        Binary = 0x05,
        Boolean = 0x08,
        Null = 0x0A,
        Int32 = 0x10,
    }

    export type BsonValue = number | string | boolean | Buffer | BsonDocument

    export class BsonDocument {
        constructor(public _buffer: Buffer, public _offset: number) { }
        toJson() {
            const r: any = {}
            this.iter((k, v) => {
                if (v instanceof BsonDocument)
                    r[k] = v.toJson()
                else
                    r[k] = v
                return false
            })
            return r
        }
        at(key: string): BsonValue {
            let res: BsonValue = undefined
            this.iter((k, v) => {
                if (k == key) {
                    res = v
                    return true
                }
                return false
            })
            return res
        }
        iter(f: (key: string, val: BsonValue) => boolean) {
            const end = this._offset + this._buffer.getNumber(NumberFormat.UInt32LE, this._offset) - 1
            let ptr = this._offset
            const buf = this._buffer
            while (ptr < end) {
                const tp = buf[ptr++]
                const p0 = ptr
                while (ptr < end && buf[ptr])
                    ptr++
                ptr++
                if (ptr >= end)
                    throw "BSON too short"
                const key = buf.slice(p0, ptr - p0).toString()
                let v: BsonValue
                switch (tp) {
                    case BsonTypes.Double:
                        v = buf.getNumber(NumberFormat.Float64LE, ptr)
                        ptr += 8
                        break
                    case BsonTypes.String: {
                        const len = buf.getNumber(NumberFormat.Int32LE, ptr)
                        ptr += 4
                        v = buf.slice(ptr, len - 1).toString()
                        ptr += len
                        break
                    }
                    case BsonTypes.NestedArray:
                    case BsonTypes.NestedDocument: {
                        const len = buf.getNumber(NumberFormat.Int32LE, ptr)
                        v = new BsonDocument(buf, ptr)
                        ptr += len
                        break
                    }
                    case BsonTypes.Binary: {
                        const len = buf.getNumber(NumberFormat.Int32LE, ptr)
                        ptr += 5
                        v = buf.slice(ptr, len)
                        ptr += len
                        break
                    }
                    case BsonTypes.Boolean:
                        v = buf[ptr] != 0
                        ptr++
                        break
                    case BsonTypes.Null:
                        v = null
                        break
                    case BsonTypes.Int32:
                        v = buf.getNumber(NumberFormat.Int32LE, ptr)
                        ptr += 4
                        break
                    default:
                        throw "unsupported BSON " + tp
                }
                if (f(key, v))
                    break
            }
        }
    }
}