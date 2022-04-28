led.toggle(0,0)
control.runInBackground(() => {
    led.toggle(1,0)
    new jacdac.ServoServer(AnalogPin.P0).start()
    led.toggle(2,0)
})
