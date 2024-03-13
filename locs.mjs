import "zx/globals"

const target = "microbit"

await $`pxt target ${target}`
const libs = (await fs.readdir(".", { withFileTypes: true }))
    .filter(
        f => f.isDirectory() && fs.existsSync(path.join(f.name, "pxt.json"))
    )
    .map(f => f.name)
libs.unshift(".")
console.log(`generating locs for ${libs.length} libraries`)
for (const lib of libs) {
    await spinner(lib, async () => {
        try {
            cd(lib)
            const pkg = fs.readJSONSync("pxt.json")
            if (!pkg.supportedTargets?.includes(target)) return
            await $`pxt install`
            await $`pxt gendocs --locs`
            await $`git checkout -- 'pxt.json'`.nothrow()
        } finally {
            if (lib !== ".")
                cd("..")
        }
    })
}
