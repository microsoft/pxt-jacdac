namespace modules {
    //% fixedInstances
    export class MonoLightAnimation {
        constructor(public buffer: Buffer) { }
    }

    export namespace mono {
        //% fixedInstance whenUsed
        //% block="slow glow"
        export const slowGlow = new MonoLightAnimation(hex`000f dc05 ffff dc05 000f 0100`)
        //% fixedInstance whenUsed
        //% block="stable"
        export const stable = new MonoLightAnimation(hex`ffff e803 ffff 0000`)
        //% fixedInstance whenUsed
        //% block="blink"
        export const blink = new MonoLightAnimation(hex`ffff f401 ffff 0100 0000 fd01`)
    }

    //% fixedInstances
    //% blockGap=8
    export class MonoLightClient extends jacdac.Client {
        constructor(requiredDevice: string = null) {
            super("monol", jacdac.SRV_MONO_LIGHT, requiredDevice);
        }

        // set to negative for infinity
        setIterations(numIters: number): void {
            numIters |= 0
            if (numIters < 0 || numIters >= 0xffff) numIters = 0xffffffff
            else if (numIters) numIters--
            this.setRegInt(jacdac.MonoLightReg.MaxIterations, numIters)
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
            this.setRegInt(jacdac.MonoLightReg.Brightness, brightness << 8)
        }

        /**
         * Show animation
         */
        //% blockId=jacdacmonolightshowanimation block="%monoLight show $animation animation"
        //% group="Mono Light"
        showAnimation(animation: MonoLightAnimation, speed = 100) {
            const anim = animation.buffer.slice()
            if (speed != 100) {
                for (let i = 0; i < anim.length; i += 4) {
                    const curr = anim.getNumber(NumberFormat.UInt16LE, i + 2)
                    let adj = Math.idiv(curr * 100, speed)
                    if (curr != 0 && adj == 0) adj = 1
                    anim.setNumber(NumberFormat.UInt16LE, i + 2, adj)
                }
            }
            this.setRegBuffer(jacdac.MonoLightReg.Steps, anim)
        }
    }

    //% fixedInstance whenUsed
    export const monoLight = new MonoLightClient();
}