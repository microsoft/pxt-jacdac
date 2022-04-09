namespace modules {
    /**
     * A controller for small displays of individually controlled RGB LEDs.
     * 
     * This service handles displays with 64 or less LEDs.
     * Use the [LED strip service](/services/ledstrip) for longer light strips.
     **/
    //% fixedInstances blockGap=8
    export class LedDisplayClient extends jacdac.Client {

        private readonly _pixels : jacdac.RegisterClient<[Buffer]>;
        private readonly _brightness : jacdac.RegisterClient<[number]>;
        private readonly _actualBrightness : jacdac.RegisterClient<[number]>;
        private readonly _lightType : jacdac.RegisterClient<[jacdac.LedDisplayLightType]>;
        private readonly _numPixels : jacdac.RegisterClient<[number]>;
        private readonly _numColumns : jacdac.RegisterClient<[number]>;
        private readonly _maxPower : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.LedDisplayVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_LED_DISPLAY, role);

            this._pixels = this.addRegister<[Buffer]>(jacdac.LedDisplayReg.Pixels, jacdac.LedDisplayRegPack.Pixels);
            this._brightness = this.addRegister<[number]>(jacdac.LedDisplayReg.Brightness, jacdac.LedDisplayRegPack.Brightness);
            this._actualBrightness = this.addRegister<[number]>(jacdac.LedDisplayReg.ActualBrightness, jacdac.LedDisplayRegPack.ActualBrightness);
            this._lightType = this.addRegister<[jacdac.LedDisplayLightType]>(jacdac.LedDisplayReg.LightType, jacdac.LedDisplayRegPack.LightType);
            this._numPixels = this.addRegister<[number]>(jacdac.LedDisplayReg.NumPixels, jacdac.LedDisplayRegPack.NumPixels);
            this._numColumns = this.addRegister<[number]>(jacdac.LedDisplayReg.NumColumns, jacdac.LedDisplayRegPack.NumColumns);
            this._maxPower = this.addRegister<[number]>(jacdac.LedDisplayReg.MaxPower, jacdac.LedDisplayRegPack.MaxPower);
            this._variant = this.addRegister<[jacdac.LedDisplayVariant]>(jacdac.LedDisplayReg.Variant, jacdac.LedDisplayRegPack.Variant);            
        }
    

        /**
        * A buffer of 24bit RGB color entries for each LED, in R, G, B order.
        */
        //% callInDebugger
        //% group="Light"
        //% block="%leddisplay pixels"
        //% blockId=jacdac_leddisplay_pixels___get
        //% weight=100
        pixels(): Buffer {
            this.start();            
            const values = this._pixels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A buffer of 24bit RGB color entries for each LED, in R, G, B order.
        */
        //% group="Light"
        //% blockId=jacdac_leddisplay_pixels___set
        //% block="set %leddisplay pixels to %value"
        //% weight=99
        setPixels(value: Buffer) {
            this.start();
            const values = this._pixels.values as any[];
            values[0] = value;
            this._pixels.values = values as [Buffer];
        }

        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% callInDebugger
        //% group="Light"
        //% block="%leddisplay brightness"
        //% blockId=jacdac_leddisplay_brightness___get
        //% weight=98
        brightness(): number {
            this.start();            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% group="Light"
        //% blockId=jacdac_leddisplay_brightness___set
        //% block="set %leddisplay brightness to %value"
        //% weight=97
        //% value.min=0
        //% value.max=100
        //% value.defl=0.05
        setBrightness(value: number) {
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value / 100;
            this._brightness.values = values as [number];
        }

        /**
        * This is the luminosity actually applied to the strip.
        * May be lower than `brightness` if power-limited by the `max_power` register.
        * It will rise slowly (few seconds) back to `brightness` is limits are no longer required.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=96
        actualBrightness(): number {
            this.start();            
            const values = this._actualBrightness.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Specifies the type of light strip connected to controller.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=95
        lightType(): jacdac.LedDisplayLightType {
            this.start();            
            const values = this._lightType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the number of pixels in the strip.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=94
        numPixels(): number {
            this.start();            
            const values = this._numPixels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * If the LED pixel strip is a matrix, specifies the number of columns.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=93
        numColumns(): number {
            this.start();            
            const values = this._numColumns.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% callInDebugger
        //% group="Light"
        //% weight=92
        maxPower(): number {
            this.start();            
            const values = this._maxPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% group="Light"
        //% weight=91
        //% value.min=0
        //% value.max=65535
        //% value.defl=200
        setMaxPower(value: number) {
            this.start();
            const values = this._maxPower.values as any[];
            values[0] = value;
            this._maxPower.values = values as [number];
        }

        /**
        * Specifies the shape of the light strip.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=90
        variant(): jacdac.LedDisplayVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

    
    }
    //% fixedInstance whenUsed weight=1 block="led display1"
    export const ledDisplay1 = new LedDisplayClient("led Display1");
}