namespace modules {
    /**
     * Upload and download data to a cloud provider
     **/
    //% fixedInstances blockGap=8
    export class JacscriptCloudClient extends jacdac.Client {
        private readonly _connected: jacdac.RegisterClient<[boolean]>
        private readonly _connectionName: jacdac.RegisterClient<[string]>

        constructor(role: string) {
            super(jacdac.SRV_JACSCRIPT_CLOUD, role)

            this._connected = this.addRegister<[boolean]>(
                jacdac.JacscriptCloudReg.Connected,
                jacdac.JacscriptCloudRegPack.Connected
            )
            this._connectionName = this.addRegister<[string]>(
                jacdac.JacscriptCloudReg.ConnectionName,
                jacdac.JacscriptCloudRegPack.ConnectionName
            )
        }

        /**
         * Indicate whether we're currently connected to the cloud server. When offline, uploadcommands are queued.
         */
        //% callInDebugger
        //% group="IoT"
        //% weight=100
        connected(): boolean {
            this.start()
            const values = this._connected.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * User-friendly name of the connection, typically includes name of the server and/or type of cloud service ("something.cloud.net (Provider IoT)").
         */
        //% callInDebugger
        //% group="IoT"
        //% weight=100
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
        //% blockId=jacdac_on_jacscriptcloud_event
        //% block="on %jacscriptcloud %event"
        //% weight=93
        onEvent(ev: jacdac.JacscriptCloudEvent, handler: () => void): void {
            this.registerEvent(ev, handler)
        }

        /**
         * Raised when the connection status changes
         */
        //% group="IoT"
        //% weight=92
        onChange(handler: () => void): void {
            this.registerEvent(jacdac.JacscriptCloudEvent.Change, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="jacscript cloud"
    export const jacscriptCloud = new JacscriptCloudClient("jacscript cloud")
}
