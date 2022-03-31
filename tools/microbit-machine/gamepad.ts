function plot(x: number, y: number) {
    basic.clearScreen()
    let dispX = 2
    let dispY = 2
    //console.log(`${x} ${y}`);
    if (x < -30) dispX--
    if (x < -60) dispX--
    if (x > 30) dispX++
    if (x > 60) dispX++
    if (y < -30) dispY--
    if (y < -60) dispY--
    if (y > 30) dispY++
    if (y > 60) dispY++
    led.plot(dispX, dispY)
}

machine.addClientFactory(jacdac.SRV_GAMEPAD, devid => {
    const client = new modules.GamepadClient(devid)
    client.onStateChanged(() => {
        plot(client.x() * 100, client.y() * 100)
        //const maxSpeed = 20
        // if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1)
        //    mouseMove(x * maxSpeed, y * maxSpeed)
    })
})

