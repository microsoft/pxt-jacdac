namespace servers {
    //% fixedInstance whenUsed block="temperature"
    export const temperatureServer = jacdac.createSimpleSensorServer(
        jacdac.SRV_TEMPERATURE,
        jacdac.TemperatureRegPack.Temperature,
        () => input.temperature(),
        {
            minReading: -10,
            maxReading: 50,
            variant: jacdac.TemperatureVariant.Indoor,
            streamingInterval: 1000,
            readingError: () => 3,
        }
    )
}
