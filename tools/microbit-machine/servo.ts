machine.addClientFactory(jacdac.SRV_SERVO, devid => {
    const client = new modules.ServoClient(devid)
    machine.microbit.onEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
        () => {
            const angle = client.minAngle() || 0
            client.setAngle(angle)
        }
    )
    machine.microbit.onEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_UP,
        () => {
            const angle = client.maxAngle() || 180
            client.setAngle(angle)
        }
    )
})
