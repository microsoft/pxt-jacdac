namespace modules {
    /**
     * Generates random numbers using entropy sourced from physical processes.
     * 
     * This typically uses a cryptographical pseudo-random number generator (for example [Fortuna](https://en.wikipedia.org/wiki/Fortuna_(PRNG))),
     * which is periodically re-seeded with entropy coming from some hardware source.
     **/
    //% fixedInstances blockGap=8
    export class RngClient extends jacdac.Client {

            private readonly _variant : jacdac.RegisterClient<[jacdac.RngVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_RNG, role);

            this._variant = this.addRegister<[jacdac.RngVariant]>(jacdac.RngReg.Variant, "u8");            
        }
    

        /**
        * The type of algorithm/technique used to generate the number.
        * `Quantum` refers to dedicated hardware device generating random noise due to quantum effects.
        * `ADCNoise` is the noise from quick readings of analog-digital converter, which reads temperature of the MCU or some floating pin.
        * `WebCrypto` refers is used in simulators, where the source of randomness comes from an advanced operating system.
        */
        //% callInDebugger
        //% group="Random Number Generator"
        variant(): jacdac.RngVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const rng = new RngClient("rng");
}