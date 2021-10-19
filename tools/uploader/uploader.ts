jacdac.logPriority = ConsolePriority.Log
// console.minPriority = ConsolePriority.Log

namespace userconfig {}

jacdac.start()

/*
jacdac.bus.on(jacdac.SELF_ANNOUNCE, () => {
    pins.LED_G.digitalWrite(false)
    pins.LED_G.digitalWrite(true)
})
*/

servers.wifi.start()
servers.azureIotHubHealth.start()

jacdac.twins.init()

