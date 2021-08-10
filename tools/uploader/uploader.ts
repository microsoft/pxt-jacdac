jacdac.logPriority = ConsolePriority.Log

namespace userconfig {
}

jacdac.start()
jacdac.bus.on(jacdac.SELF_ANNOUNCE, () => {
    pins.LED_G.digitalWrite(false)
    pins.LED_G.digitalWrite(true)
})
