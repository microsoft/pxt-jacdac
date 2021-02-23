namespace modules {
    /**
     * A controller for 1 or more monochrome or RGB LEDs connected in parallel.
     **/
    //% fixedInstances blockGap=8
    export class LedClient extends jacdac.Client {

        private readonly _brightness : jacdac.RegisterClient<[number]>;
        private readonly _animation : jacdac.RegisterClient<[number,([number, number, number, number])[]]>;
        private readonly _maxPower : jacdac.RegisterClient<[number]>;
        private readonly _ledCount : jacdac.RegisterClient<[number]>;
        private readonly _waveLength : jacdac.RegisterClient<[number]>;
        private readonly _luminousIntensity : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.LedVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_LED, role);

            this._brightness = this.addRegister<[number]>(jacdac.LedReg.Brightness, "u0.16");
            this._animation = this.addRegister<[number,([number, number, number, number])[]]>(jacdac.LedReg.Animation, "u16 r: u8 u8 u8 u8");
            this._maxPower = this.addRegister<[number]>(jacdac.LedReg.MaxPower, "u16");
            this._ledCount = this.addRegister<[number]>(jacdac.LedReg.LedCount, "u16");
            this._waveLength = this.addRegister<[number]>(jacdac.LedReg.WaveLength, "u16");
            this._luminousIntensity = this.addRegister<[number]>(jacdac.LedReg.LuminousIntensity, "u16");
            this._variant = this.addRegister<[jacdac.LedVariant]>(jacdac.LedReg.Variant, "u8");            
        }
    

        /**
        * Set the luminosity of the strip. The value is used to scale `value` in `steps` register.
        * At `0` the power to the strip is completely shut down.
        */
        //% callInDebugger
        //% group="Light"
        //% block="%led brightness"
        //% blockId=jacdac_led_brightness___get
        //% weight=100
        brightness(): number {
            this.start();            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Set the luminosity of the strip. The value is used to scale `value` in `steps` register.
        * At `0` the power to the strip is completely shut down.
        */
        //% group="Light"
        //% blockId=jacdac_led_brightness___set
        //% block="set %led brightness to %value"
        //% weight=99
        //% value.min=0
        //% value.max=1
        setBrightness(value: number) {
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=98
        animationRepetitions(): number {
            this.start();            
            const values = this._animation.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% group="Light"
        //% weight=97
        setAnimationRepetitions(value: number) {
            this.start();
            const values = this._animation.values as any[];
            values[0] = value;
            this._animation.values = values as [number,([number, number, number, number])[]];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=96
        animationHue(): ([number, number, number, number])[] {
            this.start();            
            const values = this._animation.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% group="Light"
        //% weight=95
        setAnimationHue(value: ([number, number, number, number])[]) {
            this.start();
            const values = this._animation.values as any[];
            values[1] = value;
            this._animation.values = values as [number,([number, number, number, number])[]];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=94
        animationSaturation(): undefined {
            this.start();            
            const values = this._animation.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% group="Light"
        //% weight=93
        setAnimationSaturation(value: undefined) {
            this.start();
            const values = this._animation.values as any[];
            values[2] = value;
            this._animation.values = values as [number,([number, number, number, number])[]];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=92
        animationValue(): undefined {
            this.start();            
            const values = this._animation.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% group="Light"
        //% weight=91
        setAnimationValue(value: undefined) {
            this.start();
            const values = this._animation.values as any[];
            values[3] = value;
            this._animation.values = values as [number,([number, number, number, number])[]];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=90
        animationDuration(): undefined {
            this.start();            
            const values = this._animation.pauseUntilValues() as any[];
            return values[4];
        }

        /**
        * Animations are described using pairs of color description and duration, 
        * similarly to the `status_light` register in the control service.
        * `repetition` as ``0`` is considered infinite.
        * For monochrome LEDs, the hue and saturation are ignored.
        * A specification `(red, 80ms), (blue, 40ms), (blue, 0ms), (yellow, 80ms)`
        * means to start with red, cross-fade to blue over 80ms, stay blue for 40ms,
        * change to yellow, and cross-fade back to red in 80ms.
        */
        //% group="Light"
        //% weight=89
        setAnimationDuration(value: undefined) {
            this.start();
            const values = this._animation.values as any[];
            values[4] = value;
            this._animation.values = values as [number,([number, number, number, number])[]];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% callInDebugger
        //% group="Light"
        //% weight=88
        maxPower(): number {
            this.start();            
            const values = this._maxPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% group="Light"
        //% weight=87
        //% value.defl=100
        setMaxPower(value: number) {
            this.start();
            const values = this._maxPower.values as any[];
            values[0] = value;
            this._maxPower.values = values as [number];
        }

        /**
        * If known, specifies the number of LEDs in parallel on this device.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=86
        ledCount(): number {
            this.start();            
            const values = this._ledCount.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * If monochrome LED, specifies the wave length of the LED.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=85
        waveLength(): number {
            this.start();            
            const values = this._waveLength.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The luminous intensity of the LED, at full value, in micro candella.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=84
        luminousIntensity(): number {
            this.start();            
            const values = this._luminousIntensity.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The physical type of LED.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=83
        variant(): jacdac.LedVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const led = new LedClient("led");
}