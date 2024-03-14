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
        if (lib !== ".") cd(lib)
        try {
            const pkg = fs.readJSONSync("pxt.json")
            if (!pkg.supportedTargets?.includes(target)) return
            await $`pxt install`
            await $`pxt gendocs --locs`
            await $`git checkout -- 'pxt.json'`.nothrow()
            // update translations as needed
            const clijs = `${
                lib === "." ? "" : "../"
            }.genaiscript/genaiscript.cjs`
            for (const lang of langs)
                await $`node ${clijs} run loc-strings "_locales/*-strings.json" --apply-edits --vars target=${target} lang=${lang}`.nothrow()
            // add generated files to pxt.json
            let modded = false
            const locs = await glob(`_locales/*/*.json`)
            for (const loc of locs)
                if (!pkg.files.includes(loc)) {
                    pkg.files.push(loc)
                    modded = true
                }
            if (modded)
                await fs.writeFile(`pxt.json`, JSON.stringify(pkg, null, 2), {
                    encoding: "utf8",
                })
        } finally {
            if (lib !== ".") cd("..")
        }
    })
}
