forever(() => {
    modules.relay1.setActive(true)
    pause(1000)
    modules.relay1.setActive(false)
    pause(1000)
})
