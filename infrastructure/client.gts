namespace modules {
    /**
     * A service that tags a device as purely infrastructure device.
     * 
     * 
     * A Jacdac user interface can ignore any device that hosts this service.
     **/
    //% fixedInstances blockGap=8
    export class InfrastructureClient extends jacdac.Client {

        private readonly _variant : jacdac.RegisterClient<[jacdac.InfrastructureVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_INFRASTRUCTURE, role);

            this._variant = this.addRegister<[jacdac.InfrastructureVariant]>(jacdac.InfrastructureReg.Variant, "u8");            
        }
    

        /**
        * Describes the type of infrastructure feature supported.
        */
        //% callInDebugger
        //% group="Infrastructure"
        //% weight=100
        variant(): jacdac.InfrastructureVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

    
    }
    //% fixedInstance whenUsed block="infrastructure1"
    export const infrastructure1 = new InfrastructureClient("infrastructure1");
}