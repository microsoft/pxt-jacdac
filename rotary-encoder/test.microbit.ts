forever(() => {
    led.toggle(0, 0)
    console.log(`clicks per turn1: ${modules.rotaryEncoder1.clicksPerTurn()}`)
    console.log(`position1: ${modules.rotaryEncoder1.position()}`)
    console.log(`clicks per turn2: ${modules.rotaryEncoder2.clicksPerTurn()}`)
    console.log(`position2: ${modules.rotaryEncoder2.position()}`)
    pause(50)
})
