modules.button1.onUp(() => console.log("up"))
modules.button1.onDown(() => console.log("down"))
modules.button1.onHold(() => console.log("hold"))

modules.button2.onUp(() => console.log("up2"))
modules.button2.onDown(() => console.log("down2"))
modules.button2.onHold(() => console.log("hold2"))

modules.button3.onUp(() => console.log("up3"))
modules.button3.onDown(() => console.log("down3"))
modules.button3.onHold(() => console.log("hold3"))

modules.button4.onUp(() => console.log("up4"))
modules.button4.onDown(() => console.log("down4"))
modules.button4.onHold(() => console.log("hold4"))

//forever(() => {
//   console.log(`${modules.button1.pressed()} ${modules.button2.pressed()} ${modules.button3.pressed()} ${modules.button4.pressed()}`)
//   pause(500)
//})
