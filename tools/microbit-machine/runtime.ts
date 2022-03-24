namespace modules {
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
}
