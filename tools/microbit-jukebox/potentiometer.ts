machine.addClientFactory(jacdac.SRV_POTENTIOMETER, (devid, srvid, options) => {
    const client = new modules.PotentiometerClient(`${devid}:${srvid}`)
    client.onPositionChangedBy(5, () => {
        const current = client.position()
        machine.plot(current, 100, options)
        machine.microbit.emit(machine.POT_CHANGE, current)
    })
    return client
})
