namespace servers {
    const SRV_LIGHT_LEVEL = 0x17dc9a1c
    //% fixedInstance whenUsed block="light level"
    export const lightLevelServer = jacdac.createSimpleSensorServer(
        "light level",
        SRV_LIGHT_LEVEL,
        "u0.16",
        () => input.lightLevel() / 255.0,
        {
            minReading: 0,
            maxReading: 100,
            streamingInterval: 50,
            readingError: () => 3
        }
    )
}
