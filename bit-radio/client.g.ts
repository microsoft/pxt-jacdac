namespace modules {
    /**
     * Support for sending and receiving packets using the [Bit Radio protocol](https://github.com/microsoft/pxt-common-packages/blob/master/libs/radio/docs/reference/radio.md), typically used between micro:bit devices.
     **/
    //% fixedInstances blockGap=8
    export class BitRadioClient extends jacdac.Client {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;
        private readonly _group : jacdac.RegisterClient<[number]>;
        private readonly _transmissionPower : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_BIT_RADIO, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.BitRadioReg.Enabled, "u8");
            this._group = this.addRegister<[number]>(jacdac.BitRadioReg.Group, "u8");
            this._transmissionPower = this.addRegister<[number]>(jacdac.BitRadioReg.TransmissionPower, "u8");            
        }
    

        /**
        * Turns on/off the radio antenna.
        */
        //% callInDebugger
        //% group="Bit:radio"
        //% block="%bitradio enabled"
        //% blockId=jacdac_bitradio_enabled___get
        //% weight=100
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Turns on/off the radio antenna.
        */
        //% group="Bit:radio"
        //% blockId=jacdac_bitradio_enabled___set
        //% block="set %bitradio %value=toggleOnOff"
        //% weight=99
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * Group used to filter packets
        */
        //% callInDebugger
        //% group="Bit:radio"
        //% weight=98
        group(): number {
            this.start();            
            const values = this._group.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Group used to filter packets
        */
        //% group="Bit:radio"
        //% weight=97
        setGroup(value: number) {
            this.start();
            const values = this._group.values as any[];
            values[0] = value;
            this._group.values = values as [number];
        }

        /**
        * Antenna power to increase or decrease range.
        */
        //% callInDebugger
        //% group="Bit:radio"
        //% weight=96
        transmissionPower(): number {
            this.start();            
            const values = this._transmissionPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Antenna power to increase or decrease range.
        */
        //% group="Bit:radio"
        //% weight=95
        //% value.min=1
        //% value.max=7
        //% value.defl=6
        setTransmissionPower(value: number) {
            this.start();
            const values = this._transmissionPower.values as any[];
            values[0] = value;
            this._transmissionPower.values = values as [number];
        }
 

        /**
         * Raised when a string packet is received
         */
        //% group="Bit:radio"
        //% blockId=jacdac_on_bitradio_string_received
        //% block="on %bitradio string received"
        //% weight=94
        onStringReceived(handler: () => void): void {
            this.registerEvent(jacdac.BitRadioEvent.StringReceived, handler);
        }
        /**
         * Raised when a number packet is received
         */
        //% group="Bit:radio"
        //% blockId=jacdac_on_bitradio_number_received
        //% block="on %bitradio number received"
        //% weight=93
        onNumberReceived(handler: () => void): void {
            this.registerEvent(jacdac.BitRadioEvent.NumberReceived, handler);
        }
        /**
         * Raised when a buffer packet is received
         */
        //% group="Bit:radio"
        //% blockId=jacdac_on_bitradio_buffer_received
        //% block="on %bitradio buffer received"
        //% weight=92
        onBufferReceived(handler: () => void): void {
            this.registerEvent(jacdac.BitRadioEvent.BufferReceived, handler);
        }

        /**
        * Sends a string payload as a radio message
        */
        //% group="Bit:radio"
        //% blockId=jacdac_bitradio_send_string_cmd
        //% block="%bitradio send string"
        //% weight=91
        sendString(message: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.BitRadioCmd.SendString, "s[18]", [message]))
        }

        /**
        * Sends a double precision number payload as a radio message
        */
        //% group="Bit:radio"
        //% blockId=jacdac_bitradio_send_number_cmd
        //% block="%bitradio send number"
        //% weight=90
        sendNumber(value: number, name: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.BitRadioCmd.SendNumber, "f64 s[12]", [value, name]))
        }

        /**
        * Sends a payload of bytes as a radio message
        */
        //% group="Bit:radio"
        //% blockId=jacdac_bitradio_send_buffer_cmd
        //% block="%bitradio send buffer"
        //% weight=89
        sendBuffer(data: Buffer): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.BitRadioCmd.SendBuffer, "b[18]", [data]))
        }
    
    }
    //% fixedInstance whenUsed
    export const bitRadio = new BitRadioClient("bit Radio");
}