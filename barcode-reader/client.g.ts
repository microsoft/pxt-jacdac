namespace modules {
    /**
     * A device that reads various barcodes, like QR codes. For the web, see [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector).
     **/
    //% fixedInstances blockGap=8
    export class BarcodeReaderClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_BARCODE_READER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const barcodeReader = new BarcodeReaderClient("barcode Reader");
}