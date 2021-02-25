function jdpackTest() {
    function testOne(fmt: string, data0: any[]) {
        function checksame(a: any, b: any) {
            function fail(msg: string): never {
                debugger
                throw (`jdpack test error: ${msg} (at ${fmt}; a=${JSON.stringify(a)}; b=${JSON.stringify(b)})`)
            }

            if (a === b || JSON.stringify(a) == JSON.stringify(b))
                return
            fail("not the same")
        }

        const buf = jacdac.jdpack(fmt, data0)
        const data1 = jacdac.jdunpack(buf, fmt)
        console.log(`${JSON.stringify(data0)}->${fmt}->${buf.toHex()}->${JSON.stringify(data1)}`)
        // console.log(fmt, data0, data1, toHex(buf))
        checksame(data0, data1)
    }

    testOne("i8", [-42])
    testOne("u16", [42])
    testOne("u16 u16 i16", [42, 77, -10])
    testOne("u16 z s", [42, "foo", "bar"])
    testOne("u32 z s", [42, "foo", "bar"])
    testOne("i8 z s", [42, "foo", "bar"])
    testOne("u8 z s", [42, "foo12", "bar"])
    testOne("u8 r: u8 z", [42, [[17, "xy"], [18, "xx"]]])
    //testOne("z b", ["foo12", jacdac.stringToBuffer("bar")])
    testOne("u16 r: u16", [42, [[17], [18]]])
    testOne("i8 s[9] u16 s[10] u8", [-100, "foo", 1000, "barbaz", 250])
    testOne("i8 x[4] s[9] u16 x[2] s[10] x[3] u8", [-100, "foo", 1000, "barbaz", 250])
    testOne("u16 u16[]", [42, [17, 18]])
    testOne("u16 u16[]", [42, [18]])
    testOne("u16 u16[]", [42, []])
    testOne("u16 z[]", [42, ["foo", "bar", "bz"]])
}

// pins.A9.digitalWrite(false)

jacdac.consolePriority = ConsolePriority.Log;
jacdac.roleManagerHost.start()
jacdac.protoTestHost.start()
jacdac.start()
jacdac.loggerHost.log("test started")
modules.identify();

jdpackTest()

function addClient(cls: number, name: string) {
    console.log(`client: ${name} (${cls})`)
    new jacdac.Client(cls, name).start()
}
addClient(0x1f140409, "left_leg/acc1")
addClient(0x1473a263, "btn1")
addClient(0x16c810b8, "small/hum")
addClient(0x1421bac7, "small/temp")
addClient(0x169c9dc6, "big/eco2")
addClient(0x16c810b8, "big/hum")
addClient(0x1421bac7, "big/temp")
addClient(0x16c810b8, "xsmall/hum")
addClient(0x1421bac7, "xsmall/temp")


jacdac._rolemgr.clearRoles()
