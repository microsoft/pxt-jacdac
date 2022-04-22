forever(() => {
    modules.ledDisplay1.setAll(0xff0f0f)
    pause(500)
    modules.ledDisplay1.setAll(0)
})
