namespace modules {
    /**
     * Generates random numbers using entropy sourced from physical processes.
     * 
     * This typically uses a cryptographical pseudo-random number generator (for example [Fortuna](https://en.wikipedia.org/wiki/Fortuna_(PRNG))),
     * which is periodically re-seeded with entropy coming from some hardware source.
     **/
    //% fixedInstances blockGap=8
    export class RngClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_RNG, role);
            
        }
    
 

    }
    //% fixedInstance whenUsed
    export const rng = new RngClient("rng");
}