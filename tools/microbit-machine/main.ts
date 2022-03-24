jacdac.bus.subscribe(jacdac.DEVICE_ANNOUNCE, (d: jacdac.Device) => {
    if (d === jacdac.bus.selfDevice) return
    // whenever a device announces itself,
    // cache its services, if not already done
    // spin up clients
    if (!d.clients.length)
        for (let i = 1; i < d.serviceClassLength; i++) modules.startClient(d, i)
})
