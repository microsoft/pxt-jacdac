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

net.instance().controller.connect()

jacdac.twins.init()

const iotHubHealthServer = new jacdac.AzureIotHubHealthServer("iot hub")
iotHubHealthServer.start()
