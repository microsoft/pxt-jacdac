namespace hidevents {
    // all settings keys are prefixed with this string
    const PREFIX = "@ke_"
    // data layout format (18bytes)
    const FORMAT = "b[8] u32 u8 u8 u16 u16"
    // data layout types
    //type FORMAT_TYPE = [Buffer, number, number, number, number, number]

    function start() {
        // start services
        jacdac.start({ disableRoleManager: true })
        jacdac.settingsServer.start()

        // read bindings, keep as buffers
        const bindinds = settings.list(PREFIX)
            .map(kv => settings.readBuffer(kv))

        // register to events
    }

    start()
}