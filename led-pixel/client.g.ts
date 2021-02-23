namespace modules {
    /**
     * A controller for strips of individually controlled RGB LEDs.
     **/
    //% fixedInstances blockGap=8
    export class LedPixelClient extends jacdac.Client {

            private readonly _brightness : jacdac.RegisterClient<[number]>;
            private readonly _actualBrightness : jacdac.RegisterClient<[number]>;
            private readonly _lightType : jacdac.RegisterClient<[jacdac.LedPixelLightType]>;
            private readonly _numPixels : jacdac.RegisterClient<[number]>;
            private readonly _numColumns : jacdac.RegisterClient<[number]>;
            private readonly _maxPower : jacdac.RegisterClient<[number]>;
            private readonly _maxPixels : jacdac.RegisterClient<[number]>;
            private readonly _numRepeats : jacdac.RegisterClient<[number]>;
            private readonly _variant : jacdac.RegisterClient<[jacdac.LedPixelVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_LED_PIXEL, role);

            this._brightness = this.addRegister<[number]>(jacdac.LedPixelReg.Brightness, "u0.8");
            this._actualBrightness = this.addRegister<[number]>(jacdac.LedPixelReg.ActualBrightness, "u0.8");
            this._lightType = this.addRegister<[jacdac.LedPixelLightType]>(jacdac.LedPixelReg.LightType, "u8");
            this._numPixels = this.addRegister<[number]>(jacdac.LedPixelReg.NumPixels, "u16");
            this._numColumns = this.addRegister<[number]>(jacdac.LedPixelReg.NumColumns, "u16");
            this._maxPower = this.addRegister<[number]>(jacdac.LedPixelReg.MaxPower, "u16");
            this._maxPixels = this.addRegister<[number]>(jacdac.LedPixelReg.MaxPixels, "u16");
            this._numRepeats = this.addRegister<[number]>(jacdac.LedPixelReg.NumRepeats, "u16");
            this._variant = this.addRegister<[jacdac.LedPixelVariant]>(jacdac.LedPixelReg.Variant, "u8");            
        }
    

        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% callInDebugger
        //% group="Light"
        //% block="%ledpixel brightness"
        //% blockId=jacdac_ledpixel_brightness___get
        brightness(): number {
            this.start();            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% blockId=jacdac_ledpixel_brightness___set
        //% group="Light" value.min=0 value.max=1 value.defl=0.05
        //% block="set %ledpixel brightness to %value"
        setBrightness(value: number) {
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        }

        /**
        * This is the luminosity actually applied to the strip.
        * May be lower than `brightness` if power-limited by the `max_power` register.
        * It will rise slowly (few seconds) back to `brightness` is limits are no longer required.
        */
        //% callInDebugger
        //% group="Light"
        actualBrightness(): number {
            this.start();            
            const values = this._actualBrightness.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the type of light strip connected to controller.
        * Controllers which are sold with lights should default to the correct type
        * and could not allow change.
        */
        //% callInDebugger
        //% group="Light"
        lightType(): jacdac.LedPixelLightType {
            this.start();            
            const values = this._lightType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the type of light strip connected to controller.
        * Controllers which are sold with lights should default to the correct type
        * and could not allow change.
        */
        //% 
        //% group="Light"
        //% block="set %ledpixel light type to %value"
        setLightType(value: jacdac.LedPixelLightType) {
            this.start();
            const values = this._lightType.values as any[];
            values[0] = value;
            this._lightType.values = values as [jacdac.LedPixelLightType];
        }

        /**
        * Specifies the number of pixels in the strip.
        * Controllers which are sold with lights should default to the correct length
        * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
        */
        //% callInDebugger
        //% group="Light"
        numPixels(): number {
            this.start();            
            const values = this._numPixels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the number of pixels in the strip.
        * Controllers which are sold with lights should default to the correct length
        * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
        */
        //% 
        //% group="Light" value.defl=15
        //% block="set %ledpixel num pixels to %value"
        setNumPixels(value: number) {
            this.start();
            const values = this._numPixels.values as any[];
            values[0] = value;
            this._numPixels.values = values as [number];
        }

        /**
        * If the LED pixel strip is a matrix, specifies the number of columns. Otherwise, a square shape is assumed. Controllers which are sold with lights should default to the correct length
        * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
        */
        //% callInDebugger
        //% group="Light"
        numColumns(): number {
            this.start();            
            const values = this._numColumns.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * If the LED pixel strip is a matrix, specifies the number of columns. Otherwise, a square shape is assumed. Controllers which are sold with lights should default to the correct length
        * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
        */
        //% 
        //% group="Light"
        //% block="set %ledpixel num columns to %value"
        setNumColumns(value: number) {
            this.start();
            const values = this._numColumns.values as any[];
            values[0] = value;
            this._numColumns.values = values as [number];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% callInDebugger
        //% group="Light"
        maxPower(): number {
            this.start();            
            const values = this._maxPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% 
        //% group="Light" value.defl=200
        //% block="set %ledpixel max power to %value"
        setMaxPower(value: number) {
            this.start();
            const values = this._maxPower.values as any[];
            values[0] = value;
            this._maxPower.values = values as [number];
        }

        /**
        * The maximum supported number of pixels.
        * All writes to `num_pixels` are clamped to `max_pixels`.
        */
        //% callInDebugger
        //% group="Light"
        maxPixels(): number {
            this.start();            
            const values = this._maxPixels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * How many times to repeat the program passed in `run` command.
        * Should be set before the `run` command.
        * Setting to `0` means to repeat forever.
        */
        //% callInDebugger
        //% group="Light"
        numRepeats(): number {
            this.start();            
            const values = this._numRepeats.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * How many times to repeat the program passed in `run` command.
        * Should be set before the `run` command.
        * Setting to `0` means to repeat forever.
        */
        //% 
        //% group="Light" value.defl=1
        //% block="set %ledpixel num repeats to %value"
        setNumRepeats(value: number) {
            this.start();
            const values = this._numRepeats.values as any[];
            values[0] = value;
            this._numRepeats.values = values as [number];
        }

        /**
        * Specifies the shape of the light strip.
        */
        //% callInDebugger
        //% group="Light"
        variant(): jacdac.LedPixelVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const ledPixel = new LedPixelClient("led Pixel");
}