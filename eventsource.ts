namespace jacdac {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type EventHandler = (...args: any[]) => void

    class Listener {
        constructor(public key: string,
            public handler: EventHandler) {

        }
    }

    //% whenUsed
    export const NEW_LISTENER = "newListener"
    //% whenUsed
    export const REMOVE_LISTENER = "removeListener"
    //% whenUsed
    export const ERROR = "error"

    
    export class EventSource {
        private readonly listeners: Listener[] = []

        constructor() { }

        on(eventName: string, handler: EventHandler) {
            this.addListenerInternal(eventName, handler)
            return this
        }

        off(eventName: string, handler: EventHandler) {
            this.removeListenerInternal(eventName, handler)
            return this
        }

        private addListenerInternal(
            eventName: string,
            handler: EventHandler,
        ) {
            if (!eventName || !handler) {
                return
            }

            // find existing one
            const previous = this.listeners.find(l => l.key === eventName && l.handler === handler);
            if (previous) {
                return
            }

            // append to list
            this.listeners.push(new Listener(eventName, handler))
            this.emit(NEW_LISTENER, eventName, handler)
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
                if (listener.key === eventName && listener.handler === handler) {
                    this.listeners.splice(i, 1)
                    this.emit(REMOVE_LISTENER, eventName, handler)
                    return
                }
            }
        }

        /**
         * Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered.
         * @param eventName
         * @param args
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        emit(eventName: string, ...args: any[]): boolean {
            if (!eventName) return false

            const listeners = this.listeners
            const n = listeners.length
            for (let i = 0; i < n; ++i) {
                const listener = listeners[i]
                if (listener.key === eventName) {
                    const handler = listener.handler
                    try {
                        handler(args)
                    } catch (e) {
                        this.emit(ERROR, e)
                    }
                }
            }
            return true
        }

        listenerCount(eventName: string): number {
            if (!eventName) return 0
            let k = 0;
            const listeners = this.listeners
            const n = listeners.length
            for (let i = 0; i < n; ++i) {
                const listener = listeners[i]
                if (listener.key === eventName) {
                    k++;
                }
            }
            return k;
        }

        /**
         * Subscribes to an event and returns the unsubscription handler
         * @param eventName
         * @param next
         */
        subscribe<T>(
            eventName: string,
            next: (value: T) => void
        ): () => void {
            this.addListenerInternal(eventName, next)
            const unsubscribe = () => this.removeListenerInternal(eventName, next)
            return unsubscribe;
        }
    }
}