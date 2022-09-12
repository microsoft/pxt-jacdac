jacdac.firmwareVersion = jacdac.VERSION
console.log(`starting microcode servers...`)
servers.start({
    logger: true,
    buttonA: true,
    buttonB: true,
    buttonLogo: true,
    touchP0: true,
    touchP1: true,
    touchP2: true,
    screen: true,
    buzzer: true,
    radio: true,
    soundPlayer: true,
    forceSimulators: true,
})
