#include "pxt.h"

#if defined(PICO_BOARD)
#include "hardware/gpio.h"
#include "hardware/pwm.h"
#elif defined(PXT_ESP32)
#include "driver/ledc.h"
#else
#define USE_CODAL_PWM
#endif

namespace jacdac {

#define SINGLE_LED 0x04
#define ACTIVE_LOW 0x02
#define INITED 0x01
#define G_INIT 0x10

struct LedInfo {
    uint8_t pinid;
    uint8_t ch;
    uint16_t value;
#ifdef USE_CODAL_PWM
    Pin *pinobj;
#endif
};

#ifndef CHK
#define CHK(e)                                                                                     \
    if ((e) != ESP_OK)                                                                             \
    target_panic(901)
#endif

#ifndef MICROBIT_CODAL
static LedInfo leds[3];
static uint8_t led_init;

static void set_pwm_level(LedInfo *led, uint16_t level) {
    if (led_init & ACTIVE_LOW)
        level = 0xffff - level;
#if defined(PICO_BOARD)
    pwm_set_gpio_level(led->pinid, level >> 6);
#elif defined(PXT_ESP32)
    CHK(ledc_set_duty_with_hpoint(LEDC_LOW_SPEED_MODE, (ledc_channel_t)(led->ch), level >> 6, 0));
    CHK(ledc_update_duty(LEDC_LOW_SPEED_MODE, (ledc_channel_t)(led->ch)));
#else
    if (led->pinobj)
        led->pinobj->setAnalogValue(level >> 6);
#endif
}

static void setup_pwm_pin(LedInfo *led) {
    int pin = led->pinid;
#if defined(PICO_BOARD)
    gpio_set_function(pin, GPIO_FUNC_PWM);
    int slice = pwm_gpio_to_slice_num(pin);
    pwm_set_clkdiv_int_frac(slice, 1, 0);
    pwm_set_wrap(slice, (1 << 10) - 2); // 10 bit
    set_pwm_level(led, 0);
    pwm_set_enabled(slice, true);
#elif defined(PXT_ESP32)
    if (!(led_init & G_INIT)) {
        led_init |= G_INIT;
        ledc_fade_func_install(0);
        ledc_timer_config_t ledc_timer;
        memset(&ledc_timer, 0, sizeof(ledc_timer));
        ledc_timer.duty_resolution = LEDC_TIMER_10_BIT;
        ledc_timer.freq_hz = 50000;
        ledc_timer.speed_mode = LEDC_LOW_SPEED_MODE;
        ledc_timer.timer_num = LEDC_TIMER_1;
        ledc_timer.clk_cfg = LEDC_AUTO_CLK;
        CHK(ledc_timer_config(&ledc_timer));
    }
    ledc_channel_config_t cfg;
    memset(&cfg, 0, sizeof(cfg));
    cfg.channel = (ledc_channel_t)led->ch;
    cfg.gpio_num = pin;
    cfg.timer_sel = LEDC_TIMER_1;
    cfg.speed_mode = LEDC_LOW_SPEED_MODE;
    cfg.duty = 1 << 10;
    CHK(ledc_channel_config(&cfg));
    set_pwm_level(led, 0);
#else
    led->pinobj = pxt::lookupPin(pin);
    if (led->pinobj) {
        led->pinobj->setAnalogPeriodUs(2000);
        set_pwm_level(led, 0);
    }
#endif
}
#endif

//%
void _setLedChannel(int ch, uint16_t val) {
#ifdef MICROBIT_CODAL
    // TODO?
#else
    if (!led_init) {
        led_init = INITED;
        int lr = getConfig(CFG_PIN_LED_R, -1);
        if (lr == -1) {
            lr = getConfig(CFG_PIN_LED, -1);
            // assume LED_G,B are also undefined
            leds[0].pinid = leds[1].pinid = leds[2].pinid = lr;
            led_init |= SINGLE_LED;
            if (lr != -1)
                setup_pwm_pin(&leds[0]);
        } else {
            leds[0].pinid = lr;
            leds[1].pinid = PIN(LED_G);
            leds[2].pinid = PIN(LED_B);
            leds[1].ch = 1;
            leds[2].ch = 2;
        }
        if (lr & 0x10000)
            led_init |= ACTIVE_LOW;
        for (int i = 0; i < 3; ++i)
            setup_pwm_pin(&leds[i]);
    }

    leds[ch].value = val;

    if (led_init & SINGLE_LED) {
        if (leds[0].pinid != 0xff)
            set_pwm_level(&leds[0],
                          (leds[0].value + leds[1].value + leds[1].value + leds[2].value) >> 2);
    } else {
        set_pwm_level(&leds[ch], leds[ch].value);
    }
#endif
}

} // namespace jacdac