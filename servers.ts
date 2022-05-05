namespace jacdac {
    class ActuatorServer extends jacdac.Server {
        private readonly sync: (actuator: ActuatorServer) => void

        constructor(
            serviceClass: number,
            sync: (server: jacdac.Server) => void,
            options?: jacdac.ServerOptions
        ) {
            super(serviceClass, options)
            this.sync = sync
            this.on(jacdac.CHANGE, () => this.syncMaybe())
            this.syncMaybe()
        }

        private syncMaybe() {
            if (this.statusCode !== jacdac.SystemStatusCodes.Ready) return
            this.sync(this)
        }
    }

    export function createActuatorServer(
        serviceClass: number,
        sync: (actuator: ActuatorServer) => void,
        options?: jacdac.ServerOptions
    ): jacdac.Server {
        return new ActuatorServer(serviceClass, sync, options)
    }
}
