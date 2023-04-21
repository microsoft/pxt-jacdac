namespace modules {
    export class CloudMessage {
        label: string
        values: number[]
    }
    const MAX_QUEUE = 5
    class CloudMessageHandler {
        label: string
        handler: (a: CloudMessage) => void
    }

    /**
     * Supports cloud connections to upload and download data.
     * Note that `f64` values following a label are not necessarily aligned.
     **/
    //% fixedInstances blockGap=8
    export class CloudAdapterClient extends jacdac.Client {
        private readonly _connected: jacdac.RegisterClient<[boolean]>
        private readonly _connectionName: jacdac.RegisterClient<[string]>
        private readonly _messageHandlers: CloudMessageHandler[] = []
        private readonly _messages: CloudMessage[] = []

        constructor(role: string) {
            super(jacdac.SRV_CLOUD_ADAPTER, role)

            this._connected = this.addRegister<[boolean]>(
                jacdac.CloudAdapterReg.Connected,
                jacdac.CloudAdapterRegPack.Connected
            )
            this._connectionName = this.addRegister<[string]>(
                jacdac.CloudAdapterReg.ConnectionName,
                jacdac.CloudAdapterRegPack.ConnectionName
            )
        }

        private handleConsumeCloudMessages() {
            // eat up queue
            let msg: CloudMessage
            while ((msg = this._messages.shift())) {
                const handler = this._messageHandlers.find(
                    h => h.label == msg.label
                )
                if (handler) handler.handler(msg)
            }
        }

        /**
         * Indicate whether we're currently connected to the cloud server.
         * When offline, `upload` commands are queued, and `get_twin` respond with cached values.
         */
        //% callInDebugger
        //% group="IoT"
        //% weight=100
        connected(): boolean {
            this.start()
            const values = this._connected.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * User-friendly name of the connection, typically includes name of the server
         * and/or type of cloud service (`"something.cloud.net (Provider IoT)"`).
         */
        //% callInDebugger
        //% group="IoT"
        //% weight=99
        connectionName(): string {
            this.start()
            const values = this._connectionName.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Emitted when we connect or disconnect from the cloud.
         */
        //% group="IoT"
        //% weight=96
        onChange(handler: () => void): void {
            this.registerEvent(jacdac.CloudAdapterEvent.Change, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="cloud adapter1"
    export const cloudAdapter1 = new CloudAdapterClient("cloud Adapter1")
}
