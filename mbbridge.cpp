#include "pxt.h"
#include "jdlow.h"
#include "mbbridge.h"
#include "ZDMASerial.h"

#ifdef MICROBIT_CODAL

namespace pxt {
void (*logJDFrame)(const uint8_t *data);
void (*sendJDFrame)(const uint8_t *data);
uint64_t current_time_us() {
    return system_timer_current_time_us();
}
} // namespace pxt

namespace jacdac {

#define MAX_LOGQ 10
static LinkedFrame *volatile logQ;
static ZDMASerial *serial;
static volatile uint8_t sending;
static volatile uint8_t recvBuf[256];

static void logq_poke();

static void logFrame(const uint8_t *data) {
    copyAndAppend(&logQ, (jd_frame_t *)data, MAX_LOGQ);
    logq_poke();
}

static void send_done(void *frame) {
    free(frame);
    sending = 0;
    logq_poke();
}

static void logq_poke() {
    LinkedFrame *frame = NULL;
    target_disable_irq();
    if (!sending) {
        frame = logQ;
        if (frame) {
            logQ = frame->next;
            sending = 1;
        }
    }
    target_enable_irq();
    if (!frame)
        return;

    frame->timestamp_ms = 0x6b70444a; // magic JDpk
    serial->startSend((uint8_t *)frame + 4, 4 + JD_FRAME_SIZE(&frame->frame), send_done, frame);
}

void mbbridge_init() {
    // make sure no-one will be using serial anymore
    uBit.serial.lockTx();
    uBit.serial.lockRx();
    // un-allocate serial peripherals
    uBit.serial.~NRF52Serial();

    serialLoggingDisabled = true;

    // serial = new ZDMASerial(uBit.io.usbTx, uBit.io.usbRx);
    serial = new ZDMASerial(uBit.io.P1, uBit.io.P2);
    serial->enableTxRx(true, true);
    serial->setBaud(115200); // for now

    pxt::logJDFrame = logFrame;
}

} // namespace jacdac

#endif