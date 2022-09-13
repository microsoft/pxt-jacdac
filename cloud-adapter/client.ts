namespace modules {
    /**
     * Supports cloud connections to upload and download data.
     * Note that `f64` values following a label are not necessarily aligned.
     **/
    //% fixedInstances blockGap=8
    export class CloudAdapterClient extends jacdac.Client {
        private readonly _connected: jacdac.RegisterClient<[boolean]>
        private readonly _connectionName: jacdac.RegisterClient<[string]>

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
                    jacdac.JacscriptCloudCmd.Upload,
                    jacdac.JacscriptCloudCmdPack.Upload,
                    [label, values.map(v => [v])]
                )
            )
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="IoT"
        //% blockId=jacdac_on_cloudadapter_event
        //% block="on %cloudadapter %event"
        //% weight=98
        onEvent(ev: jacdac.CloudAdapterEvent, handler: () => void): void {
            this.registerEvent(ev, handler)
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
