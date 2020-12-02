namespace jacdac {
    export const SETTINGS_PREFIX = "$jdsettings:"
    export class SettingsHost extends Host {
        constructor(name: string) {
            super(name, SRV_SETTINGS_STORAGE);
        }

        handlePacket(packet: JDPacket) {
            switch (packet.service_command) {
                case SettingsCmd.Delete: this.handleDeleteCommand(packet); break;
                case SettingsCmd.ListKeys: this.handleListKeys(packet); break;
                case SettingsCmd.List: this.handleList(packet); break;
                case SettingsCmd.Set: this.handleSetCommand(packet); break;
                case SettingsCmd.Get: this.handleGetCommand(packet); break;
            }
        }

        private handleDeleteCommand(packet: JDPacket) {
            const key = packet.data.toString();
            const id = SETTINGS_PREFIX + key;
            settings.remove(id);
        }

        private handleGetCommand(packet: JDPacket) {
            const key = packet.data.toString();
            const id = SETTINGS_PREFIX + key;
            let value: Buffer = undefined;
            if (key[0] !== "$") // don't leak secrets
                value = settings.readBuffer(id);
            // return empty buffer if not found
            if (!value) value = Buffer.create(0)
            this.sendReport(JDPacket.from(SettingsCmd.Get, packet.data.concat(value)));
        }

        private handleSetCommand(packet: JDPacket) {
            const key = packet.data.toString().split("\u0000")[0];
            const value = packet.data.slice(8); // todo
            const id = SETTINGS_PREFIX + key;
            if (value.length == 0)
                settings.remove(id)
            else
                settings.writeBuffer(id, value)
        }

        private handleListKeys(packet: JDPacket) {
            OutPipe.respondForEach<string>(packet, settings.list(SETTINGS_PREFIX),
                k => Buffer.fromUTF8(k.slice(SETTINGS_PREFIX.length))
            )
        }

        private handleList(packet: JDPacket) {
            OutPipe.respondForEach<string>(packet, settings.list(SETTINGS_PREFIX),
                k => {
                    const key = k.slice(SETTINGS_PREFIX.length);
                    const value = (key[0] === "$" ? Buffer.create(0) : settings.readBuffer(k)) 
                        || Buffer.create(0)
                    return Buffer.fromUTF8(key).concat(value);
                }
            )
        }

        /**
         * Reads locally a setting, including secrets
         */
        getSetting(key: string) {
            const id = SETTINGS_PREFIX + key;
            const value = settings.readBuffer(id)
            return value;
        }
    }

    //% fixedInstance whenUsed
    export const settingsHost = new SettingsHost("settings");
}
