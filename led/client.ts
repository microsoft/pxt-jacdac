namespace modules {
    //% fixedInstances
    export class LEDAnimation {
        constructor(public buffer: Buffer) { }
    }

    export namespace ledAnimations {
        //% fixedInstance whenUsed
        //% block="slow glow"
        export const slowGlow = new LEDAnimation(hex`000f dc05 ffff dc05 000f 0100`)
        //% fixedInstance whenUsed
        //% block="stable"
        export const stable = new LEDAnimation(hex`ffff e803 ffff 0000`)
        //% fixedInstance whenUsed
        //% block="blink"
        export const blink = new LEDAnimation(hex`ffff f401 ffff 0100 0000 fd01`)
    }

    //% fixedInstances
    //% blockGap=8
    export class LEDClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.constants.SRV_LED, role);
        }

        // set to negative for infinity
        setIterations(numIters: number): void {
            numIters |= 0
            if (numIters < 0 || numIters >= 0xffff) numIters = 0xffffffff
            else if (numIters) numIters--
         //   this.setReg(jacdac.LedReg.MaxIterations, numIters)
            throw "TODO"
        }

        /**
         * Sets the brightness of the light
         * @param brightness 
         */
        //% blockId=jacdacmonolightsetbrightness block="set %monoLight brightness to $brightness"
        //% brightness.min=0
        //% brightness.max=255
        //% group="Mono Light"
        setBrightness(brightness: number): void {
            this.setReg(jacdac.constants.LedReg.Brightness, "u0.16", [brightness])
        }

        /**
         * Show animation
         */
        //% blockId=jacdacmonolightshowanimation block="%monoLight show $animation animation"
        //% group="Mono Light"
        showAnimation(animation: LEDAnimation, speed = 100) {
            const anim = animation.buffer.slice()
            if (speed != 100) {
                for (let i = 0; i < anim.length; i += 4) {
                    const curr = anim.getNumber(NumberFormat.UInt16LE, i + 2)
                    let adj = Math.idiv(curr * 100, speed)
                    if (curr != 0 && adj == 0) adj = 1
                    anim.setNumber(NumberFormat.UInt16LE, i + 2, adj)
                }
            }
            this.setRegBuffer(jacdac.constants.LedReg.Animation, anim)
        }
    }

    //% fixedInstance whenUsed
    export const led = new LEDClient("led");
}