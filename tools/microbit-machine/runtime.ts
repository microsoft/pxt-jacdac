namespace machine {
    export function ignoreDevice(d: jacdac.Device) {
        return (
            d === jacdac.bus.selfDevice ||
            d.hasService(jacdac.SRV_INFRASTRUCTURE) ||
            d.hasService(jacdac.SRV_PROXY)
        )
    }

    class ClientFactory {
        constructor(
            public serviceIndex: number,
            public handler: (devid: string, serviceIndex: number) => void
        ) {}
    }
    const factories: ClientFactory[] = []
    export function addClientFactory(
        serviceIndex: number,
        handler: (devid: string, serviceIndex: number) => void
    ) {
        console.log(`modules: register ${serviceIndex}`)
        factories.push(new ClientFactory(serviceIndex, handler))
    }

    export function startClient(d: jacdac.Device, serviceIndex: number) {
        const serviceClass = d.serviceClassAt(serviceIndex)
        const factory = factories.find(f => f.serviceIndex === serviceIndex)
        if (factory) return factory.handler(d.deviceId, serviceIndex)
        return null
    }

    function start() {
        jacdac.bus.on(jacdac.DEVICE_ANNOUNCE, (d: jacdac.Device) => {
            if (machine.ignoreDevice(d)) return
            // whenever a device announces itself,
            // cache its services, if not already done
            // spin up clients
            if (!d.clients.length)
                for (let i = 1; i < d.serviceClassLength; i++)
                    machine.startClient(d, i)
        })
    }

    start()
}
