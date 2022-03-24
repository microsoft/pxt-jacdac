machine.addClientFactory(jacdac.SRV_ROTARY_ENCODER, devid => {
    const client = new modules.RotaryEncoderClient(devid)
    client.onPositionChangedBy(() => {
        let clicks = client.clicksPerTurn()
        //console.log(`SRV_ROTARY_ENCODER: clicks = ${clicks}`)
        clicks = clicks ? clicks : 24;
        const current = client.position() % clicks 
        led.plotBarGraph(current, clicks)
    })
})
