namespace modules {
    /**
     * Generates random numbers using entropy sourced from physical processes.
     * 
     * This typically uses a cryptographical pseudo-random number generator (for example [Fortuna](https://en.wikipedia.org/wiki/Fortuna_(PRNG))),
     * which is periodically re-seeded with entropy coming from some hardware source.
     **/
    //% fixedInstances blockGap=8
    export class RngClient extends jacdac.SensorClient<[Buffer]> {

        private readonly _variant : jacdac.RegisterClient<[jacdac.RngVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_RNG, role, "b");

            this._variant = this.addRegister<[jacdac.RngVariant]>(jacdac.RngReg.Variant, "u8");            
        }
    

        /**
        * A register that returns a 64 bytes random buffer on every request.
        * This never blocks for a long time. If you need additional random bytes, keep querying the register.
        */
        //% callInDebugger
        //% group="Random Number Generator"
        //% block="%rng random"
        //% blockId=jacdac_rng_random___get
        //% weight=100
        random(): Buffer {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of algorithm/technique used to generate the number.
        * `Quantum` refers to dedicated hardware device generating random noise due to quantum effects.
        * `ADCNoise` is the noise from quick readings of analog-digital converter, which reads temperature of the MCU or some floating pin.
        * `WebCrypto` refers is used in simulators, where the source of randomness comes from an advanced operating system.
        */
        //% callInDebugger
        //% group="Random Number Generator"
        //% weight=99
        variant(): jacdac.RngVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const rng = new RngClient("rng");
}