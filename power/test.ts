forever(() => {
    modules.power1.setAllowed(true)
    pause(500)
    modules.power1.setAllowed(false)
    pause(500)
})
