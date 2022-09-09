machine.addClientFactory(jacdac.SRV_BRAILLE_DISPLAY, (devid, srvi) => {
    const client = new modules.BrailleDisplayClient(`${devid}:${srvi}`)
    machine.microbit.onClient(client, machine.VALUE_CHANGE, (value: number) => {
        client.setNumber(value | 0)
    })
    return client
})
