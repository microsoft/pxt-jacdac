namespace microbit {
    export class Screen extends jacdac.Host {
        constructor() {
            super("microbitScreen", SRV_LEDMATRIX)
        }
        
        handlePacket(packet: jacdac.JDPacket) {
            if (packet.reg_identifier == LEDMatrixReg.Leds) {
                if (packet.is_reg_set) {
                    let x = 0, y = 0;
                    for (let i=0; i<25; i++) {
                        let byte = Math.floor(i/5);
                        let bit = 1 << (i - (byte*5)); 
                        if (packet.data[byte] & bit) 
                            led.plot(x,y);
                        else led.unplot(x,y);
                        x++; if (x ==5) { x=0; y++; }
                    }
                } else {
                    let x = 0, y = 0;
                    let buf = Buffer.create(5);
                    for (let i=0; i<25; i++) {
                        if (led.point(x, y)) {
                            let byte = Math.floor(i/5);
                            let bit = 1 << (i - (byte*5)); 
                            buf[byte] |= bit; 
                        }
                        x++; if (x == 5) { x=0; y++; }
                    }
                    this.handleRegBuffer(packet, packet.reg_identifier, buf);
                }
            } else if (packet.reg_identifier == LEDMatrixReg.Rows || 
                       packet.reg_identifier == LEDMatrixReg.Columns) {
                this.handleRegValue(packet, packet.reg_identifier, "u16", 5);
            }
        }
    }
}