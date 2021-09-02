namespace jacdac {
    export class AzureIotHubHealthServer extends jacdac.Server {
        constructor(dev: string) {
            super(dev, jacdac.SRV_AZURE_IOT_HUB_HEALTH)
        }
    }
}
