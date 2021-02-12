namespace modules {
    /**
     * A device that reads various barcodes, like QR codes. For the web, see [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector).
     **/
    //% fixedInstances blockGap=8
    export class BarcodeReaderClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_BARCODE_READER, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.BarcodeReaderReg.Enabled, "u8");            
        }
    

        /**
        * Turns on or off the detection of barcodes.
        */
        //% blockId=jacdac_barcodereader_enabled___get
        //% group="Barcode reader"
        //% block="%barcodereader enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Turns on or off the detection of barcodes.
        */
        //% blockId=jacdac_barcodereader_enabled___set
        //% group="Barcode reader"
        //% block="set %barcodereader %value=toggleOnOff"
        setEnabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

        /**
         * Raised when a bar code is detected and decoded. If the reader detects multiple codes, it will issue multiple events.
        * In case of numeric barcodes, the `data` field should contain the ASCII (which is the same as UTF8 in that case) representation of the number.
         */
        //% blockId=jacdac_on_barcodereader_detect
        //% block="detect" blockSetVariable=myModule
        //% group="Barcode reader"
        onDetect(handler: () => void) {
            this.registerEvent(jacdac.BarcodeReaderEvent.Detect, handler);
        }
    }
    //% fixedInstance whenUsed
    export const barcodeReader = new BarcodeReaderClient("barcode Reader");
}