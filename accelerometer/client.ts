namespace modules {
    //% fixedInstances
    //% group="Accelerometer"
    export class AccelerometerClient extends jacdac.BufferedSensorClient<number[]> {
        constructor(requiredDevice: string = null) {
            super("acc", jacdac.SRV_ACCELEROMETER, requiredDevice);
        }

        protected parseSample(packet: jacdac.JDPacket) {
            return packet.jdunpack<[number, number, number]>("i6.10 i6.10 i6.10")
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockCombine
        get x(): number {
            return this.get(JDDimension.X);
        }

        /**
         * Reads the current y value from the sensor
         */
        //% blockCombine
        get y(): number {
            return this.get(JDDimension.Y);
        }

        /**
         * Reads the current z value from the sensor
         */
        //% blockCombine
        get z(): number {
            return this.get(JDDimension.Z);
        }

        /**
         * Reads the current strength value from the sensor
         */
        //% blockCombine
        get strength(): number {
            return this.get(JDDimension.Strength);
        }

        private get(dimension: JDDimension): number {
            const s = this.state;
            if (!s || s.length < 6) return 0;
            switch (dimension) {
                case JDDimension.X:
                case JDDimension.Y:
                case JDDimension.Z:
                    return s.getNumber(NumberFormat.Int16LE, dimension * 2);
                default: // strength
                    let r = 0;
                    for (let i = 0; i < 3; ++i) {
                        const x = s.getNumber(NumberFormat.Int16LE, i * 2);
                        r += x * x;
                    }
                    return Math.sqrt(r);
            }
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacadacacconevent block="$accelerometer on $event"
        onEvent(event: jacdac.AccelerometerEvent, handler: () => void) {
            this.registerEvent(event, handler);
        }
    }

    //% fixedInstance whenUsed
    export const accelerometer = new AccelerometerClient();
}