jacdac.firmwareVersion = jacdac.VERSION
jacdac.productIdentifier = 0x1e53ec38
jacdac.logPriority = -1
const airthermometer = new modules.TemperatureClient("airthermometer")
const soilthermometer = new modules.TemperatureClient("soilthermometer")
const airhumidity = new modules.HumidityClient("airhumidity")
const sunlightvisible = new modules.LightLevelClient("sunlightvisible")
const sunlightuv = new modules.UvIndexClient("sunlightuv")
const soilmoisture = new modules.SoilMoistureClient("soilmoisture")
const relay = new modules.RelayClient("relay")
jacdac.start({ disableLogger: true })

function boolToNumber(value: boolean) {
    if (value) {
        return 1
    } else {
        return 0
    }
}
function toF(celcius: number) {
    if (isNaN(celcius)) return undefined
    return celcius * 1.8 + 32
}

basic.showIcon(IconNames.Heart)

airthermometer.start()
soilthermometer.start()
airhumidity.start()
sunlightvisible.start()
sunlightuv.start()
soilmoisture.start()
relay.start()

basic.forever(function () {
    led.toggle(0, 0)
    dataStreamer.writeNumber(input.runningTime())
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(toF(soilthermometer.temperature()))
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(soilmoisture.moisture())
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(toF(airthermometer.temperature()))
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(airhumidity.humidity())
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(sunlightvisible.lightLevel())
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(sunlightuv.uvIndex())
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(0)
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(boolToNumber(relay.active()))
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(boolToNumber(input.buttonIsPressed(Button.A)))
    dataStreamer.writeLine()
})
