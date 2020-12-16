namespace jacdac {
    //% fixedInstances
    //% weight=1
    export class SensorClient extends Client {
        // virtual mode only
        protected _localTime: number;
        protected _lastState: Buffer;
        private _stateChangedHandler: () => void;

        public isStreaming = false

        constructor(name: string, deviceClass: number, requiredDevice: string) {
            super(name, deviceClass, requiredDevice);
            this._lastState = control.createBuffer(0);
        }

        public get state() {
            this.start();
            return this._lastState;
        }

        announceCallback() {
            if (this.isStreaming)
                this.setRegInt(SystemReg.StreamingSamples, this.isStreaming ? 255 : 0)
        }

        /**
         * Enables or disable streaming the sensor internal state
         * @param on streaming enabled
         */
        public setStreaming(on: boolean, interval?: number) {
            this.start();
            this.isStreaming = on
            this.setRegInt(SystemReg.StreamingSamples, this.isStreaming ? 255 : 0)
            if (interval != undefined)
                this.setRegInt(SystemReg.StreamingInterval, interval)
        }

        /**
         * Requests the sensor to calibrate
         */
        public calibrate() {
            this.sendCommand(JDPacket.onlyHeader(SystemCmd.Calibrate))
        }

        public onStateChanged(handler: () => void) {
            this._stateChangedHandler = handler;
            this.start();
        }

        handlePacket(packet: JDPacket) {
            // this.log(`vpkt ${packet.service_command}`)
            switch (packet.service_command) {
                case CMD_GET_REG | SystemReg.Reading: {
                    const state = packet.data
                    const changed = !state.equals(this._lastState);
                    this.handleVirtualState(state);
                    this._lastState = state;
                    this._localTime = control.millis();
                    if (changed && this._stateChangedHandler)
                        this._stateChangedHandler();
                    break
                }
                default:
                    this.handleCustomCommand(packet);
                    break
            }
        }

        protected handleCustomCommand(pkt: JDPacket) {
        }

        protected handleVirtualState(state: Buffer) {
        }

        protected setThreshold(low: boolean, value: number) {
            this.setRegInt(low ? SystemReg.LowThreshold : SystemReg.HighThreshold, value)
        }
    }

    export class BufferedSensorClient<T> extends SensorClient {
        protected _samples: T[]
        protected _numSamples: number
        protected _interval: number
        protected _lastTimestamp: number

        constructor(name: string, deviceClass: number, requiredDevice: string) {
            super(name, deviceClass, requiredDevice);
        }

        enableBuffer(numSamples: number, interval: number) {
            this._numSamples = numSamples
            this._samples = []
            this._interval = interval
            this.setStreaming(true, interval)
        }

        getSamples() {
            if (!this._samples || this._samples.length < this._numSamples)
                return null
            return this._samples.slice(-this._numSamples)
        }

        protected parseSample(packet: JDPacket): T {
            return null
        }

        handlePacket(packet: JDPacket) {
            if (this._samples && packet.service_command == (CMD_GET_REG | SystemReg.Reading)) {
                const v = this.parseSample(packet)
                if (v != null) {
                    let num = 1
                    if (this._lastTimestamp != undefined) {
                        const d = packet.timestamp - this._lastTimestamp
                        num = Math.idiv(d + (this._interval >> 1), this._interval)
                        num = Math.clamp(1, 5, num)
                    }
                    this._lastTimestamp = packet.timestamp
                    while (num--)
                        this._samples.push(v)
                    const del = this._samples.length - this._numSamples
                    if (del > 5)
                        this._samples.splice(0, del)
                }
            }
            super.handlePacket(packet)
        }
    }
}