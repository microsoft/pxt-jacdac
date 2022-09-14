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

            this.on(jacdac.EVENT, pkt => this.handleCloudCommandEvent(pkt))
        }

        private handleCloudCommandEvent(pkt: jacdac.JDPacket) {
            if (pkt.eventCode != jacdac.CloudAdapterEvent.CloudCommand) return

            try {
                // decode message
                const [seqno, label, values] = pkt.jdunpack<
                    [number, string, number[][]]
                >(jacdac.CloudAdapterEventPack.CloudCommand)

                // find handler
                const handler = this._messageHandlers.find(
                    h => h.label == label
                )

                // send ack
                const busy = this._messages.length > MAX_QUEUE
                const status = busy
                    ? jacdac.CloudAdapterCommandStatus.Busy
                    : !handler
                    ? jacdac.CloudAdapterCommandStatus.NotFound
                    : jacdac.CloudAdapterCommandStatus.OK
                const resValues: number[][] = []
                const data = jacdac.jdpack(
                    jacdac.CloudAdapterCmdPack.AckCloudCommand,
                    [seqno, status, resValues]
                )
                this.sendCommand(
                    jacdac.JDPacket.from(
                        jacdac.CloudAdapterCmd.AckCloudCommand,
                        data
                    )
                )

                // queue message
                if (!busy) {
                    const msg = new CloudMessage()
                    msg.label = label
                    msg.values = values.shift()
                    this._messages.push(msg)
                }
            } catch (e) {
                console.log(`invalid cloud command ${e}`)
            }
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
         * Uploads a label and numberical value.
         */
        //% group="IoT"
        //% blockId=jacdac_jacscriptcloud_upload_number_cmd
        //% block="%jacscriptcloud upload number $label $value||$value2 $value3 $value4"
        //% weight=92
        //% inlineInputMode=inline
        uploadNumber(
            label: string,
            value: number,
            value2?: number,
            value3?: number,
            value4?: number
        ): void {
            if (!label || isNaN(value)) return
            const values: number[] = [value]
            if (!isNaN(value2)) {
                values.push(value2)
                if (!isNaN(value3)) {
                    values.push(value3)
                    if (!isNaN(value4)) {
                        values.push(value4)
                    }
                }
            }
            this.upload(label, values)
        }

        /**
         * Uploads a labelled payload of values.
         */
        //% group="IoT"
        //% weight=92
        upload(label: string, values: number[]): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.CloudAdapterCmd.Upload,
                    jacdac.CloudAdapterCmdPack.Upload,
                    [label, values.map(v => [v])]
                )
            )
        }

        /**
         * Emitted when we connect or disconnect from the cloud.
         */
        //% group="IoT"
        //% weight=96
        onChange(handler: () => void): void {
            this.registerEvent(jacdac.CloudAdapterEvent.Change, handler)
        }

        /**
         * Registers a handler for a given cloud command
         * @param label command name
         * @param handler
         * @returns
         */
        //% draggableParameters=reporter
        //% blockId=jacdac_cloudadapter_on_cloud_command block="on %cloudadapter command $label"
        //% group="IoT"
        //% weight=96
        onCloudCommand(
            label: string,
            handler: (value: number, values: number[]) => void
        ) {
            if (!label) return
            let h = this._messageHandlers.find(h => h.label == label)
            if (!h) {
                h = new CloudMessageHandler()
                h.label = label
                h.handler = (msg: CloudMessage) =>
                    handler(msg.values[0], msg.values)
                this._messageHandlers.push(h)
            }
            this.registerEvent(jacdac.CloudAdapterEvent.CloudCommand, () =>
                this.handleConsumeCloudMessages()
            )
        }
    }

    //% fixedInstance whenUsed weight=1 block="cloud adapter1"
    export const cloudAdapter1 = new CloudAdapterClient("cloud Adapter1")
}
