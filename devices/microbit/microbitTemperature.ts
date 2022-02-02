namespace servers {
    const SRV_TEMPERATURE = 0x1421bac7
    const VARIANT = 0x2 // indoor
    //% fixedInstance whenUsed block="temperature"
    export const temperatureServer = jacdac.createSimpleSensorServer(
        "temperature",
        SRV_TEMPERATURE,
        "i22.10",
        () => input.temperature(),
        {
            minReading: -10,
            maxReading: 50,
            variant: VARIANT,
            streamingInterval: 1000,
            readingError: () => 3,
        }
    )
}
