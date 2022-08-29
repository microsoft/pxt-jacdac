machine.addClientFactory(jacdac.SRV_SERVO, (devid, srvid) => {
    const client = new modules.ServoClient(`${devid}:${srvid}`)
    machine.microbit.onControlEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
        () => {
            const angle = client.minAngle() || -90
            client.setAngle(angle)
        }
    )
    machine.microbit.onControlEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_UP,
        () => {
            const angle = client.maxAngle() || 90
            client.setAngle(angle)
        }
    )
    return client
})
