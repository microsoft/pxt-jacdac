#include "pxt.h"
#include "jdlow.h"
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
static ZDMASerial *serial;

static volatile uint8_t sending;
static volatile uint8_t recvBuf[256];

jd_frame_t *logq_pull_frame();
void logq_free(jd_frame_t *frame);
void logq_poke();

static void send_done(void *frame) {
    DMESG("end");
    logq_free((jd_frame_t *)frame);
    sending = 0;
    logq_poke();
}

void logq_poke() {
    jd_frame_t *frame = NULL;
    target_disable_irq();
    if (!sending) {
        frame = logq_pull_frame();
        if (frame)
            sending = 1;
    }
    target_enable_irq();
    if (!frame)
        return;
    // frame->crc = 0xf042;
    DMESG("st");
    serial->startSend((const uint8_t *)frame, JD_FRAME_SIZE(frame), send_done, frame);
}

void mbbridge_init() {
    // make sure no-one will be using serial anymore
    uBit.serial.lockTx();
    uBit.serial.lockRx();
    // un-allocate serial peripherals
    uBit.serial.~NRF52Serial();

    serialLoggingDisabled = true;

    //serial = new ZDMASerial(uBit.io.usbTx, uBit.io.usbRx);
    serial = new ZDMASerial(uBit.io.P1, uBit.io.P2);
    serial->enableTxRx(true, true);
    serial->setBaud(115200); // for now
}

} // namespace jacdac

#endif