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

struct ExchangeBuffer {
    uint8_t magic[8];
    uint8_t irq;
    uint8_t padding[3];

    volatile uint8_t recvBuf0[256];
    volatile uint8_t recvBuf1[256];
    volatile uint8_t sendBuf[256];
};

static ExchangeBuffer *buff;

static void logq_poke();

static volatile uint32_t *recvPtr() {
    auto bp = buff->recvBuf0;
    if (bp[2])
        bp = buff->recvBuf1;
    if (bp[2])
        bp = NULL;
    return (volatile uint32_t *)bp;
}

static void pushOutData(const jd_frame_t *frame) {
    auto bp = recvPtr();
    if (!bp)
        target_panic(111);
    auto src = (uint32_t *)frame;
    int len = (JD_FRAME_SIZE(frame) + 3) & ~3;
    for (int i = 1; i < len; ++i)
        bp[i] = src[i];
    bp[0] = src[0];
}

// a nice unused interrupt
extern "C" void TEMP_IRQHandler() {
    target_disable_irq();
    while (logQ && recvPtr()) {
        auto tmp = logQ;
        logQ = tmp->next;
        pushOutData(tmp);
    }
    target_enable_irq();
}

static void logFrame(const uint8_t *data) {
    auto frame = (const jd_frame_t *)data;

    target_disable_irq();
    if (logQ || !recvPtr()) {
        copyAndAppend(&logQ, frame, MAX_LOGQ);
    } else {
        pushOutData(frame);
    }
    target_enable_irq();
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

    pxt::logJDFrame = logFrame;
}

} // namespace jacdac

#endif