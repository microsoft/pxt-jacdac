#include "pxt.h"
#include "jdlow.h"

namespace pxt {
void (*logJDFrame)(const uint8_t *data);
void (*sendJDFrame)(const uint8_t *data);
} // namespace pxt

static uint32_t nextAnnounce;

void target_disable_irq() {}
void target_enable_irq() {}

void jd_panic() {
    microbit_panic(PANIC_JACDAC);
}

void jd_init() {}
void jd_packet_ready() {}

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