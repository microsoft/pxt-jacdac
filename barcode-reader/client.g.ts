namespace modules {
    //% fixedInstances
    export class BarcodeReaderClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_BARCODE_READER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const barcodeReader = new BarcodeReaderClient("barcode Reader");
}