namespace control {
    /**
     * Used internally
     */
    //% flags.defl=0 shim=control::onEvent
    export declare function internalOnEvent(src: number, value: number, handler: () => void, flags?: number): void;

    export function runInBackground(a: () => void) {
        control.runInParallel(a);
        pauseUntil
    }

    let notifyId = 0
    export function allocateNotifyEvent() {
        return ++notifyId

    }

    /**
     * Derive a unique, consistent 64-bit serial number of this device from internal data.
     */
    //% shim=jacdac::deviceLongSerialNumber
    export declare function deviceLongSerialNumber(): Buffer;
}

namespace pins {
    export function pinByCfg(key: number): DigitalInOutPin {
        return null
    }
}

namespace jacdac {
    
}

enum ConsolePriority {
    Debug = 0,
    Log = 1,
    Warning = 2,
    Error = 3,
    Silent = 4
}

namespace console {
    export let minPriority = ConsolePriority.Debug

    export function add(pri: ConsolePriority, text: string) {
        log(text)
    }

    export function debug(text: any) {
        log(text)
    }

    export function warn(text: any) {
        log(text)
    }

    export function error(text: any) {
        log(text)
    }
}

namespace control {
    class PollEvent {
        public eid: number;
        public vid: number;
        public start: number;
        public timeOut: number;
        public condition: () => boolean;
        public once: boolean;
        constructor(eid: number, vid: number, start: number, timeOut: number, condition: () => boolean, once: boolean) {
            this.eid = eid;
            this.vid = vid;
            this.start = start;
            this.timeOut = timeOut;
            this.condition = condition;
            this.once = once;
        }
    }

    let _pollEventQueue: PollEvent[] = undefined;

    function pollEvents() {
        while (_pollEventQueue.length > 0) {
            const now = control.millis();
            for (let i = 0; i < _pollEventQueue.length; ++i) {
                const ev = _pollEventQueue[i];
                if (ev.condition() || (ev.timeOut > 0 && now - ev.start > ev.timeOut)) {
                    control.raiseEvent(ev.eid, ev.vid);
                    if (ev.once) {
                        _pollEventQueue.splice(i, 1);
                        --i;
                    }
                }
            }
            pause(50);
        }
        // release fiber
        _pollEventQueue = undefined;
    }

    export function __queuePollEvent(timeOut: number, condition: () => boolean, handler: () => void) {
        const ev = new PollEvent(
            control.allocateNotifyEvent(),
            1,
            control.millis(),
            timeOut,
            condition,
            !handler
        );

        // start polling fiber if needed
        if (!_pollEventQueue) {
            _pollEventQueue = [ev];
            control.runInParallel(pollEvents);
        }
        else {
            // add to the queue
            _pollEventQueue.push(ev)
        }

        // register event
        if (handler)
            control.onEvent(ev.eid, ev.vid, handler);
        else // or wait
            control.waitForEvent(ev.eid, ev.vid);
    }
}

/**
 * Busy wait for a condition to be true
 * @param condition condition to test for
 * @param timeOut if positive, maximum duration to wait for in milliseconds
 */
function pauseUntil(condition: () => boolean, timeOut?: number): void {
    if (!condition || condition()) return; // optimistic path
    if (!timeOut) timeOut = 0;
    control.__queuePollEvent(timeOut, condition, undefined);
}


namespace control.simmessages {
    // these events are raised by JS simulator when messages come in
    export const CONTROL_MESSAGE_EVT_ID = 2999;
    export const CONTROL_MESSAGE_RECEIVED = 1;

    //% shim=pxt::sendMessage
    export declare function send(channel: string, message: Buffer): void;

    //% shim=pxt::peekMessageChannel
    declare function peekMessageChannel(): string;

    //% shim=pxt::readMessageData
    declare function readMessageData(): Buffer;

    let handlers: { [channel: string]: (msg: Buffer) => void }
    function consumeMessages() {
        while (true) {
            // peek channel of next message
            const channel = peekMessageChannel();
            if (!channel) break;
            // read next message
            const msg = readMessageData();
            // send to handler
            const handler = handlers && handlers[channel];
            if (handler)
                handler(msg);
        }
    }

    /** 
     * Registers the handler for a message on a given channel 
     **/
    export function onReceived(channel: string, handler: (msg: Buffer) => void) {
        if (!channel) return;

        if (!handlers)
            handlers = {};
        handlers[channel] = handler;
        control.onEvent(CONTROL_MESSAGE_EVT_ID, CONTROL_MESSAGE_RECEIVED, consumeMessages);
    }
}