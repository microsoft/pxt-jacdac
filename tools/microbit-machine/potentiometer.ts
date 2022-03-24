namespace modules {
    modules.addClientFactory(jacdac.SRV_POTENTIOMETER, (devid, si) => {
        {
            const client = new modules.PotentiometerClient(devid)
            led.toggle(0, 1)
            // TODO: this should be 1
            client.onReadingChangedBy(0.1, () => {
                led.toggle(1, 1)
                const current = client.position()
                led.plotBarGraph(current, 100)
            })
            client.start()
            led.toggle(2, 0)
        }
    })
}
