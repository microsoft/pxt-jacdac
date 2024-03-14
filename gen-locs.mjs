import "zx/globals"

const target = "microbit"
const langs = ["de"]

const libs = (await fs.readdir(".", { withFileTypes: true }))
    .filter(
        f => f.isDirectory() && fs.existsSync(path.join(f.name, "pxt.json"))
    )
    .map(f => f.name)
libs.unshift(".")
console.log(`generating locs for ${libs.length} libraries`)
for (const lib of libs) {
    await spinner(lib, async () => {
        // generate strings file
        try {
            cd(lib)
            const pkg = fs.readJSONSync("pxt.json")
            if (!pkg.supportedTargets?.includes(target)) return
            await $`pxt install`
            await $`pxt gendocs --locs`
            await $`git checkout -- 'pxt.json'`.nothrow()
        } finally {
            if (lib !== ".") cd("..")
        }
        // update translations as needed
        for (const lang of langs) {
            await $`node .genaiscript/genaiscript.cjs run loc-strings "${lib}/_locales/jacdac*-strings.json" --apply-edits --vars target=${target} lang=${lang}`.nothrow()
        }
    })
}
