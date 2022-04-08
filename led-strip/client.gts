namespace modules {
    /**
     * A controller for strips of individually controlled RGB LEDs.
     **/
    //% fixedInstances blockGap=8
    export class LedStripClient extends jacdac.Client {

        private readonly _brightness : jacdac.RegisterClient<[number]>;
        private readonly _actualBrightness : jacdac.RegisterClient<[number]>;
        private readonly _lightType : jacdac.RegisterClient<[jacdac.LedStripLightType]>;
        private readonly _numPixels : jacdac.RegisterClient<[number]>;
        private readonly _numColumns : jacdac.RegisterClient<[number]>;
        private readonly _maxPower : jacdac.RegisterClient<[number]>;
        private readonly _maxPixels : jacdac.RegisterClient<[number]>;
        private readonly _numRepeats : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.LedStripVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_LED_STRIP, role);

            this._brightness = this.addRegister<[number]>(jacdac.LedStripReg.Brightness, "u0.8");
            this._actualBrightness = this.addRegister<[number]>(jacdac.LedStripReg.ActualBrightness, "u0.8");
            this._lightType = this.addRegister<[jacdac.LedStripLightType]>(jacdac.LedStripReg.LightType, "u8");
            this._numPixels = this.addRegister<[number]>(jacdac.LedStripReg.NumPixels, "u16");
            this._numColumns = this.addRegister<[number]>(jacdac.LedStripReg.NumColumns, "u16");
            this._maxPower = this.addRegister<[number]>(jacdac.LedStripReg.MaxPower, "u16");
            this._maxPixels = this.addRegister<[number]>(jacdac.LedStripReg.MaxPixels, "u16");
            this._numRepeats = this.addRegister<[number]>(jacdac.LedStripReg.NumRepeats, "u16");
            this._variant = this.addRegister<[jacdac.LedStripVariant]>(jacdac.LedStripReg.Variant, "u8");            
        }
    

        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% callInDebugger
        //% group="Light"
        //% block="%ledstrip brightness"
        //% blockId=jacdac_ledstrip_brightness___get
        //% weight=100
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
        //% blockId=jacdac_ledstrip_brightness___set
        //% block="set %ledstrip brightness to %value"
        //% weight=99
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
        //% weight=98
        actualBrightness(): number {
            this.start();            
            const values = this._actualBrightness.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Specifies the type of light strip connected to controller.
        * Controllers which are sold with lights should default to the correct type
        * and could not allow change.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=97
        lightType(): jacdac.LedStripLightType {
            this.start();            
            const values = this._lightType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the type of light strip connected to controller.
        * Controllers which are sold with lights should default to the correct type
        * and could not allow change.
        */
        //% group="Light"
        //% weight=96
        setLightType(value: jacdac.LedStripLightType) {
            this.start();
            const values = this._lightType.values as any[];
            values[0] = value;
            this._lightType.values = values as [jacdac.LedStripLightType];
        }

        /**
        * Specifies the number of pixels in the strip.
        * Controllers which are sold with lights should default to the correct length
        * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=95
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
        //% group="Light"
        //% weight=94
        //% value.min=0
        //% value.max=65535
        //% value.defl=15
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
        //% weight=93
        numColumns(): number {
            this.start();            
            const values = this._numColumns.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * If the LED pixel strip is a matrix, specifies the number of columns. Otherwise, a square shape is assumed. Controllers which are sold with lights should default to the correct length
        * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
        */
        //% group="Light"
        //% weight=92
        //% value.min=0
        //% value.max=65535
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
        //% weight=91
        maxPower(): number {
            this.start();            
            const values = this._maxPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power drawn by the light-strip (and controller).
        */
        //% group="Light"
        //% weight=90
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
        * The maximum supported number of pixels.
        * All writes to `num_pixels` are clamped to `max_pixels`.
        */
        //% callInDebugger
        //% group="Light"
        //% weight=89
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
        //% weight=88
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
        //% group="Light"
        //% weight=87
        //% value.min=0
        //% value.max=65535
        //% value.defl=1
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
        //% weight=86
        variant(): jacdac.LedStripVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }


        /**
        * Run the given light "program". See service description for details.
        */
        //% group="Light"
        //% blockId=jacdac_ledstrip_run_cmd
        //% block="%ledstrip run $program"
        //% weight=85
        run(program: Buffer): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.LedStripCmd.Run, "b", [program]))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="led strip1"
    export const ledStrip1 = new LedStripClient("led Strip1");
}