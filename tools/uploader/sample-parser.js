function toReadings(data) {
    const enq = new Date(data.EnqueuedTimeUtc).getTime()
    const rd = JSON.parse(Buffer.from(data.Body, "base64").toString())
    const entries = []
    for (const devid of Object.keys(rd.readings)) {
        const devdata = rd.readings[devid]
        for (const role of Object.keys(devdata)) {
            const roledata = devdata[role]
            for (let i = 0; i < roledata.readings.length; ++i) {
                entries.push({
                    t: enq + (roledata.timedelta[i] || 0),
                    dev: devid,
                    role: role,
                    val: roledata.readings[i]
                })
            }
        }
    }
    return entries
}

const sample = JSON.stringify(
{
    "EnqueuedTimeUtc": "2021-09-04T12:52:18.9970000Z",
    "Properties": {},
    "SystemProperties": {
        "connectionDeviceId": "jane",
        "connectionAuthMethod": "{\"scope\":\"device\",\"type\":\"sas\",\"issuer\":\"iothub\",\"acceptingIpFilterRule\":null}",
        "connectionDeviceGenerationId": "637662921514430284",
        "enqueuedTime": "2021-09-04T12:52:18.9970000Z"
    },
    "Body": "eyJyZWFkaW5ncyI6eyJDVzM5XzkyNTU1NzRhYTY1ODY5NGYiOnsiaHVtaWRpdHkiOnsicmVhZGluZ3MiOls0MC4wNzYxNzE4NzUsNDkuMDczMjQyMTg3NSw1NS4wNDg4MjgxMjUsNTcuMDIxNDg0Mzc1LDYwLjAyODMyMDMxMjUsNjAuMDU3NjE3MTg3NSw2MC4wNTI3MzQzNzUsNTguMDI1MzkwNjI1LDU3LjA1MjczNDM3NSw1Ny4wMzkwNjI1LDQ2LjA1NTY2NDA2MjUsNDAuMDMxMjUsMzcuMDE3NTc4MTI1LDMzLjA5NjY3OTY4NzUsMzMuMDgxMDU0Njg3NSwzMy4wOTY2Nzk2ODc1LDMzLjAyNTM5MDYyNV0sInRpbWVkZWx0YSI6Wy02MTc0LC02MTA4LC02MDQ4LC01OTgzLC01OTI5LC01NzA5LC00NjYzLC0zNjg3LC0zNjIxLC0zNjEwLC0zNTQ0LC0zNDYzLC0zMjg4LC0zMjIzLC0yNjAxLC0xNTQ1LC01NTldfX19LCJkZXZpY2VUaW1lIjozODc4OX0="
})

const data = JSON.parse(sample)
// const data = JSON.parse(require('fs').readFileSync(0, 'utf-8')); // read from stdin
console.log(toReadings(JSON.parse(sample)))
