import "zx/globals"
import { run } from "genaiscript/api"

const targets = ["microbit", "arcade"]
const langs = ["de"]

const libs = (await fs.readdir(".", { withFileTypes: true }))
    .filter(
        f => f.isDirectory() && fs.existsSync(path.join(f.name, "pxt.json"))
    )
    .map(f => f.name)
libs.unshift(".")
libs.reverse()
console.log(`generating locs for ${libs.length} libraries`)
for (const lib of libs) {
    console.log(lib)
    // generate strings file
    if (lib !== ".") cd(lib)
    try {
        const pkg = fs.readJSONSync("pxt.json")
        if (!targets.some(target => pkg.supportedTargets?.includes(target)))
            continue
        await $`pxt install`
        await $`pxt gendocs --locs`
        await $`git checkout -- 'pxt.json'`.nothrow()
        const tool = `${lib === "." ? "" : "../"}genaisrc/loc-strings.genai.mjs`
        for (const lang of langs) {
            console.log(`generating locs ${lib} for ${lang}`)
            $`genaiscript run ${tool} _locales/*-strings.json --vars lang=${lang}`.nothrow()
            //            await run(tool, files, {
            //              applyEdits: true,
            //            varsMap: { lang: lang },
            //      })
        }
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
}
