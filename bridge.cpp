#include "pxt.h"
#include "jdlow.h"

#define PIN_TXRQ P0_18
#define TXRQ(v)                                                                                    \
    if (v)                                                                                         \
        NRF_GPIO->OUTCLR = 1 << PIN_TXRQ;                                                          \
    else                                                                                           \
        NRF_GPIO->OUTSET = 1 << PIN_TXRQ

static jd_frame_t rxBuf;
static uint32_t dummyTx;
static jd_frame_t *txFrame, *frameToSend;
static void spis_init();
static int nextAnnounce;

namespace pxt {
void (*logJDFrame)(const uint8_t *data);
void (*sendJDFrame)(const uint8_t *data);
} // namespace pxt

void target_disable_irq() {}
void target_enable_irq() {}

class MyTimer : public MicroBitComponent {
  public:
    MyTimer() { system_timer_add_component(this); }
    virtual void systemTick() {
        if (current_time_ms() > nextAnnounce) {
            nextAnnounce = current_time_ms() + 500;
            app_queue_annouce();
        }
    }
};

void jd_panic() {
    microbit_panic(PANIC_JACDAC);
}

void jd_init() {
    nextAnnounce = current_time_ms() + 500;
    new MyTimer();

    TXRQ(0);
    NRF_GPIO->PIN_CNF[PIN_TXRQ] = (GPIO_PIN_CNF_SENSE_Disabled << GPIO_PIN_CNF_SENSE_Pos) |
                                  (GPIO_PIN_CNF_DRIVE_S0S1 << GPIO_PIN_CNF_DRIVE_Pos) |
                                  (GPIO_PIN_CNF_PULL_Disabled << GPIO_PIN_CNF_PULL_Pos) |
                                  (GPIO_PIN_CNF_INPUT_Disconnect << GPIO_PIN_CNF_INPUT_Pos) |
                                  (GPIO_PIN_CNF_DIR_Output << GPIO_PIN_CNF_DIR_Pos);

    spis_init();
}

void jd_packet_ready() {
    if (frameToSend)
        return;
    frameToSend = app_pull_frame();
    if (frameToSend)
        NRF_SPIS1->TASKS_ACQUIRE = 1;
}

int jd_is_running() {
    return nextAnnounce != 0;
}

jd_diagnostics_t *jd_get_diagnostics() {
    return NULL;
}

namespace jacdac {
//%
Buffer deviceLongSerialNumber() {
    uint8_t buf[8];
    memcpy(buf + 1, (void *)&NRF_FICR->DEVICEADDR[0], 6);
    buf[0] = 0xfe;
    buf[7] = 0xff;
    return mkBuffer(buf, sizeof(uint64_t));
}

} // namespace jacdac

extern "C" void SPI1_TWI1_IRQHandler(void) {
    NRF_SPIS1->EVENTS_ACQUIRED = 0;
    NRF_SPIS1->EVENTS_END = 0;
    auto prevTx = txFrame;
    if (frameToSend) {
        NRF_SPIS1->TXDPTR = (uint32_t)frameToSend;
        NRF_SPIS1->MAXTX = JD_FRAME_SIZE(frameToSend);
        NRF_SPIS1->TASKS_RELEASE = 1; // try to keep this short
        txFrame = frameToSend;
        frameToSend = NULL;
        TXRQ(1);
    } else {
        NRF_SPIS1->TXDPTR = (uint32_t)&dummyTx;
        NRF_SPIS1->MAXTX = 4;
        NRF_SPIS1->TASKS_RELEASE = 1;
        txFrame = NULL;
        TXRQ(0);
    }

    if (prevTx)
        app_frame_sent(prevTx);

    if (rxBuf.size) {
        app_handle_frame(&rxBuf);
        rxBuf.size = 0;
    }
}

static void spis_init() {
    uint8_t mosi = P0_21;
    uint8_t miso = P0_22;
    uint8_t sclk = P0_23;
    uint8_t ssel = P0_16;

    NRF_SPIS1->POWER = 0;
    NRF_SPIS1->POWER = 1;

    NRF_GPIO->PIN_CNF[mosi] = (GPIO_PIN_CNF_SENSE_Disabled << GPIO_PIN_CNF_SENSE_Pos) |
                              (GPIO_PIN_CNF_DRIVE_S0S1 << GPIO_PIN_CNF_DRIVE_Pos) |
                              (GPIO_PIN_CNF_PULL_Disabled << GPIO_PIN_CNF_PULL_Pos) |
                              (GPIO_PIN_CNF_INPUT_Connect << GPIO_PIN_CNF_INPUT_Pos) |
                              (GPIO_PIN_CNF_DIR_Input << GPIO_PIN_CNF_DIR_Pos);
    NRF_GPIO->PIN_CNF[miso] = (GPIO_PIN_CNF_SENSE_Disabled << GPIO_PIN_CNF_SENSE_Pos) |
                              (GPIO_PIN_CNF_DRIVE_S0S1 << GPIO_PIN_CNF_DRIVE_Pos) |
                              (GPIO_PIN_CNF_PULL_Disabled << GPIO_PIN_CNF_PULL_Pos) |
                              (GPIO_PIN_CNF_INPUT_Connect << GPIO_PIN_CNF_INPUT_Pos) |
                              (GPIO_PIN_CNF_DIR_Input << GPIO_PIN_CNF_DIR_Pos);
    NRF_GPIO->PIN_CNF[sclk] = (GPIO_PIN_CNF_SENSE_Disabled << GPIO_PIN_CNF_SENSE_Pos) |
                              (GPIO_PIN_CNF_DRIVE_S0S1 << GPIO_PIN_CNF_DRIVE_Pos) |
                              (GPIO_PIN_CNF_PULL_Disabled << GPIO_PIN_CNF_PULL_Pos) |
                              (GPIO_PIN_CNF_INPUT_Connect << GPIO_PIN_CNF_INPUT_Pos) |
                              (GPIO_PIN_CNF_DIR_Input << GPIO_PIN_CNF_DIR_Pos);
    NRF_GPIO->PIN_CNF[ssel] = (GPIO_PIN_CNF_SENSE_Disabled << GPIO_PIN_CNF_SENSE_Pos) |
                              (GPIO_PIN_CNF_DRIVE_S0S1 << GPIO_PIN_CNF_DRIVE_Pos) |
                              (GPIO_PIN_CNF_PULL_Disabled << GPIO_PIN_CNF_PULL_Pos) |
                              (GPIO_PIN_CNF_INPUT_Connect << GPIO_PIN_CNF_INPUT_Pos) |
                              (GPIO_PIN_CNF_DIR_Input << GPIO_PIN_CNF_DIR_Pos);

    NRF_SPIS1->PSELMOSI = mosi;
    NRF_SPIS1->PSELMISO = miso;
    NRF_SPIS1->PSELSCK = sclk;
    NRF_SPIS1->PSELCSN = ssel;

    NRF_SPIS1->DEF = 0xFE; // this value on the interface side means we dropped the transaction
    NRF_SPIS1->ORC = 0;

    NRF_SPIS1->CONFIG = 0;
    NRF_SPIS1->INTENSET = (1 << 10); // ACQUIRE

    NRF_SPIS1->EVENTS_END = 0;
    NRF_SPIS1->EVENTS_ACQUIRED = 0;

    NRF_SPIS1->SHORTS = (SPIS_SHORTS_END_ACQUIRE_Enabled << SPIS_SHORTS_END_ACQUIRE_Pos);

    NVIC_ClearPendingIRQ(SPI1_TWI1_IRQn);
    NVIC_EnableIRQ(SPI1_TWI1_IRQn);

    NRF_SPIS1->ENABLE = (SPIS_ENABLE_ENABLE_Enabled << SPIS_ENABLE_ENABLE_Pos);

    NRF_SPIS1->MAXRX = sizeof(rxBuf);
    NRF_SPIS1->RXDPTR = (uint32_t)&rxBuf;
    dummyTx = 0xFFFFFFFF;
    SPI1_TWI1_IRQHandler(); // get goin'
}