forever(() => {
    const h = modules.humidity1.humidity()
    led.plotBarGraph(h, 100)
    pause(100)
})
