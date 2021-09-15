namespace jacdac {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type EventHandler = (arg: any) => void

    export class EventListener {
        constructor(
            // use string for parity with JS
            public readonly key: string,
            public readonly handler: EventHandler,
            public readonly once: boolean,
            public readonly inBackground: boolean
        ) {}
    }

    export const ERROR = "error"

    export class EventSource {
        // use array to save on heap
        // consider using 2 arrays
        private readonly listeners: EventListener[] = []

        constructor() {}

        on(eventName: string, handler: EventHandler, inBackground?: boolean) {
            this.addListenerInternal(eventName, handler, false, inBackground)
            return this
        }

        once(eventName: string, handler: EventHandler, inBackground?: boolean) {
            this.addListenerInternal(eventName, handler, true, inBackground)
        }

        off(eventName: string, handler: EventHandler) {
            this.removeListenerInternal(eventName, handler)
            return this
        }

        private addListenerInternal(
            eventName: string,
            handler: EventHandler,
            once: boolean,
            inBackground: boolean
        ) {
            if (!eventName || !handler) {
                return
            }

            // find existing one
            const previous = this.listeners.find(
                l => l.key === eventName && l.handler === handler
            )
            if (previous) {
                return
            }

            // append to list
            const listener = new EventListener(
                eventName,
                handler,
                once,
                inBackground
            )
            this.listeners.push(listener)
        }

        private removeListenerInternal(
            eventName: string,
            handler: EventHandler
        ): void {
            if (!eventName || !handler) return

            const listeners = this.listeners
            const n = listeners.length
            for (let i = 0; i < n; ++i) {
                const listener = listeners[i]
                if (
                    listener.key === eventName &&
                    listener.handler === handler
                ) {
                    this.listeners.splice(i, 1)
                    return
                }
            }
        }

        /**
         * Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered.
         * @param eventName
         * @param arg
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        emit(eventName: string, arg?: any): boolean {
            if (!eventName) return false

            // run handlers
            let someOnce = false
            for (const listener of this.listeners) {
                if (listener.key === eventName) {
                    someOnce = someOnce || listener.once
                    const handler = listener.handler
                    const inBackground = listener.inBackground
                    if (inBackground) {
                        control.runInBackground(() =>
                            this.runHandler(handler, arg)
                        )
                    } else {
                        this.runHandler(handler, arg)
                    }
                }
            }

            // cleanup the "once"
            if (someOnce) {
                let i = 0
                while (i < this.listeners.length) {
                    const listener = this.listeners[i]
                    if (listener.once && listener.key === eventName) {
                        this.listeners.splice(i, 1)
                        // no need to increment i
                    } else {
                        i++
                    }
                }
            }

            return true
        }

        private runHandler(handler: EventHandler, arg: any) {
            try {
                handler(arg)
            } catch (e) {
                this.emit(ERROR, e)
            }
        }

        listenerCount(eventName: string): number {
            if (!eventName) return 0
            let k = 0
            for (const listener of this.listeners) {
                if (listener.key === eventName) {
                    k++
                }
            }
            return k
        }

        /**
         * Subscribes to an event and returns the unsubscription handler
         * @param eventName
         * @param next
         */
        subscribe<T>(eventName: string, next: (value: T) => void): () => void {
            this.addListenerInternal(eventName, next, false, false)
            const unsubscribe = () =>
                this.removeListenerInternal(eventName, next)
            return unsubscribe
        }
    }
}
