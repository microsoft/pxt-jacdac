modules.button1.onUp(() => console.log("up"))
modules.button1.onDown(() => console.log("down"))
modules.button1.onHold(() => console.log("hold"))
forever(() => {
    console.log(modules.button1.pressed() ? "pressed" : "released")
    pause(500)
})
