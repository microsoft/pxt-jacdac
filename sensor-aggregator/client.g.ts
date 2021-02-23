namespace modules {
    /**
     * Aggregate data from multiple sensors into a single stream
     * (often used as input to machine learning models on the same device, see model runner service).
     **/
    //% fixedInstances blockGap=8
    export class SensorAggregatorClient extends jacdac.SensorClient<[Buffer]> {

        private readonly _inputs : jacdac.RegisterClient<[number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]]>;
        private readonly _numSamples : jacdac.RegisterClient<[number]>;
        private readonly _sampleSize : jacdac.RegisterClient<[number]>;
        private readonly _streamingSamples : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_SENSOR_AGGREGATOR, role, "b");

            this._inputs = this.addRegister<[number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]]>(jacdac.SensorAggregatorReg.Inputs, "u16 u16 u32 r: b[8] u32 u8 u8 u8 i8");
            this._numSamples = this.addRegister<[number]>(jacdac.SensorAggregatorReg.NumSamples, "u32");
            this._sampleSize = this.addRegister<[number]>(jacdac.SensorAggregatorReg.SampleSize, "u8");
            this._streamingSamples = this.addRegister<[number]>(jacdac.SensorAggregatorReg.StreamingSamples, "u32");            
        }
    

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=100
        samplingInterval(): number {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=99
        setSamplingInterval(value: number) {
            this.start();
            const values = this._inputs.values as any[];
            values[0] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=98
        samplesInWindow(): number {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=97
        setSamplesInWindow(value: number) {
            this.start();
            const values = this._inputs.values as any[];
            values[1] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=96
        reserved(): ([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[] {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=95
        setReserved(value: ([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]) {
            this.start();
            const values = this._inputs.values as any[];
            values[2] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=94
        deviceId(): undefined {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=93
        setDeviceId(value: undefined) {
            this.start();
            const values = this._inputs.values as any[];
            values[3] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=92
        serviceClass(): undefined {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[4];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=91
        setServiceClass(value: undefined) {
            this.start();
            const values = this._inputs.values as any[];
            values[4] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=90
        serviceNum(): undefined {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[5];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=89
        setServiceNum(value: undefined) {
            this.start();
            const values = this._inputs.values as any[];
            values[5] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=88
        sampleSize(): undefined {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[6];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=87
        setSampleSize(value: undefined) {
            this.start();
            const values = this._inputs.values as any[];
            values[6] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=86
        sampleType(): undefined {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[7];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=85
        setSampleType(value: undefined) {
            this.start();
            const values = this._inputs.values as any[];
            values[7] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=84
        sampleShift(): undefined {
            this.start();            
            const values = this._inputs.pauseUntilValues() as any[];
            return values[8];
        }

        /**
        * Set automatic input collection.
        * These settings are stored in flash.
        */
        //% group="Sensor Aggregator"
        //% weight=83
        setSampleShift(value: undefined) {
            this.start();
            const values = this._inputs.values as any[];
            values[8] = value;
            this._inputs.values = values as [number,number,([Buffer, number, number, number, jacdac.SensorAggregatorSampleType, number])[]];
        }

        /**
        * Number of input samples collected so far.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=82
        numSamples(): number {
            this.start();            
            const values = this._numSamples.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Size of a single sample.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=81
        sampleSize(): number {
            this.start();            
            const values = this._sampleSize.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * When set to `N`, will stream `N` samples as `current_sample` reading.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% weight=80
        streamingSamples(): number {
            this.start();            
            const values = this._streamingSamples.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * When set to `N`, will stream `N` samples as `current_sample` reading.
        */
        //% group="Sensor Aggregator"
        //% weight=79
        setStreamingSamples(value: number) {
            this.start();
            const values = this._streamingSamples.values as any[];
            values[0] = value;
            this._streamingSamples.values = values as [number];
        }

        /**
        * Last collected sample.
        */
        //% callInDebugger
        //% group="Sensor Aggregator"
        //% block="%sensoraggregator current sample"
        //% blockId=jacdac_sensoraggregator_current_sample___get
        //% weight=78
        currentSample(): Buffer {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const sensorAggregator = new SensorAggregatorClient("sensor Aggregator");
}