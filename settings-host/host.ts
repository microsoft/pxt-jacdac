namespace jacdac {
    export const SETTINGS_PREFIX = "jdsts:"
    export class SettingsHost extends Host {
        constructor(name: string) {
            super(name, SRV_SETTINGS);
        }

        handlePacket(packet: JDPacket) {
            switch (packet.service_command) {
                case SettingsCmd.Delete: this.handleDeleteCommand(packet); break;
                case SettingsCmd.ListKeys: this.handleListKeys(packet); break;
                case SettingsCmd.List: this.handleList(packet); break;
                case SettingsCmd.Set: this.handleSetCommand(packet); break;
                case SettingsCmd.Get: this.handleGetCommand(packet); break;
                case SettingsCmd.Clear: this.handleClearCommand(packet); break;
            }
        }

        private handleClearCommand(packet: JDPacket) {
            console.log(`clear`)
            settings.clear();
            this.sendChangeEvent();
        }

        private handleDeleteCommand(packet: JDPacket) {
            const key = packet.stringData;
            const id = SETTINGS_PREFIX + key;
            console.log(`delete '${key}' -> '${id}'`)
            settings.remove(id);
            this.sendChangeEvent();
        }

        private handleGetCommand(packet: JDPacket) {
            const key = packet.stringData;
            const id = SETTINGS_PREFIX + key;
            let value: Buffer = undefined;
            if (key[0] !== "$") // don't leak secrets
                value = settings.readBuffer(id);
            // return empty buffer if not found
            if (!value) value = Buffer.create(0)
            console.log(`get '${key}' -> '${id}' ${value.toHex()}`)
            this.sendReport(JDPacket.from(SettingsCmd.Get, packet.data.concat(value)));
        }

        private handleSetCommand(packet: JDPacket) {
            const [key, value] = packet.unjdpack("z b") as [string, Buffer]
            const id = SETTINGS_PREFIX + key.trim();
            console.log(`set '${key}' -> '${id}' '${value}'`)
            if (value.length == 0)
                settings.remove(id)
            else
                settings.writeBuffer(id, value)
            this.sendChangeEvent();
        }

        private handleListKeys(packet: JDPacket) {
            const keys = settings.list(SETTINGS_PREFIX)
                .map(k => k.slice(SETTINGS_PREFIX.length));
            console.log('list keys')
            console.log(keys)
            OutPipe.respondForEach(packet, keys, k => Buffer.fromUTF8(k))
        }

        private handleList(packet: JDPacket) {
            OutPipe.respondForEach(packet, settings.list(SETTINGS_PREFIX),
                k => {
                    const key = k.slice(SETTINGS_PREFIX.length);
                    const value = (key[0] === "$" ? Buffer.create(0) : settings.readBuffer(k))
                        || Buffer.create(0)
                    return jdpack("z b", [key, value]);
                }
            )
        }
    }

    //% fixedInstance whenUsed
    export const settingsHost = new SettingsHost("settings");
}
