namespace servers {
    //% fixedInstance whenUsed block="light level"
    export const lightLevelServer = jacdac.createSimpleSensorServer(
        jacdac.SRV_LIGHT_LEVEL,
        jacdac.LightLevelRegPack.LightLevel,
        () => input.lightLevel() / 255.0,
        {
            streamingInterval: 50,
            readingError: () => 0.05,
        }
    )
}
