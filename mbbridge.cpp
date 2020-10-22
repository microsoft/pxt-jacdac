#include "pxt.h"

#ifdef MICROBIT_CODAL
namespace pxt {
void (*logJDFrame)(const uint8_t *data);
void (*sendJDFrame)(const uint8_t *data);

static void logFrame(const uint8_t *data) {

}

void mbbridge_init()
{
    logJDFrame = logFrame;
    // make sure no-one will be using serial anymore
    uBit.serial.lockTx();
    uBit.serial.lockRx();
    // un-allocate serial peripherals
    uBit.serial.~NRF52Serial();
}

uint64_t current_time_us() {
    return system_timer_current_time_us();
}

} // namespace pxt

#endif