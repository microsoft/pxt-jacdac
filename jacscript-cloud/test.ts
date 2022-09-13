forever(() => {
    led.toggle(0, 0)
    modules.jacscriptCloud.uploadNumber(
        "time",
        input.runningTime(),
        Math.random()
    )
    pause(1000)
})
