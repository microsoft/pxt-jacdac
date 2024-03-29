script({
    title: "MakeCode Blocks Localization",
    description: "Translate block strings that define blocks in MakeCode",
    group: "MakeCode",
    temperature: 0,
})

/**
 * The makecode localization files for block in packages 
 * is a JSON record: key -> localized value.
 * 
 * Each localized files is placed in a subfolder with the language code and the same basename:
 * jacdac-strings.json -> fr/jacdac-strings.json.
 * 
```json
  "modules.ServoClient.setEnabled|block": "set %servo %value=toggleOnOff",
  "modules.ServoClient.stop|block": "servo continuous %servo stop",
  "modules.servo1|block": "servo1",
  "modules.servo2|block": "servo2",
  "modules.servo3|block": "servo3",
  "modules.servo4|block": "servo4",
  "modules|block": "modules",
  "{id:category}Jacdac": "Jacdac",
  "{id:category}Modules": "Modules",
```
 */

// language parameterization
const langCode = env.vars.lang || "de"
const target = env.vars.target || "microbit"

// given a language code, refer to the full name to help the LLM
const langName = {
    fr: "French",
    "es-ES": "Spanish",
    de: "German",
    sr: "Serbian",
    vi: "Vietnamese",
    it: "Italian",
}[langCode]
if (!langName) cancel("unknown language")

// find the first compatible file
const file = env.files.find(
    ({ filename }) =>
        filename.endsWith("-strings.json") &&
        !filename.includes("jsdoc") &&
        !/_locales\/\w+\/[/]+-strings\.json/.test(filename)
)
if (!file) cancel("no strings file found")
const { filename, label, content } = file
const dir = path.dirname(filename)

// there should be a pxt.json file in the folder
const pxtJson = parsers.JSON5(await fs.readFile(path.join(dir, "..", "pxt.json")))
if (!pxtJson || !pxtJson.supportedTargets?.includes(target))
    cancel(`package not supported by ${target}`)

// read the stings, which are stored as a JSON record
const strings = JSON.parse(content)

// find the existing translation and remove existing translations
const trfn = path.join(dir, langCode, path.basename(filename))
const translated = parsers.JSON5(await fs.readFile(trfn))

// remove strings that have already been translated
if (translated)
    for (const k of Object.keys(strings)) if (translated[k]) delete strings[k]

// shortcut: all translation is done
if (Object.keys(strings).length === 0) cancel(`no strings to translate`)

// use simple .env format key=value format
const contentToTranslate = Object.entries(strings)
    .map(([k, v]) => `${k}=${v.replace(/(\.|\n).*/s, ".").trim()}`)
    .join("\n")

// the prompt engineering piece
$`
## Role

You are an expert at Computer Science education. 
You are an expert TypeScript coder. 
You are an expert at Microsoft MakeCode.
You are an expert ${langName} translator.

## Task

Translate the content of ORIGINAL to ${langName} (lang-iso '${langCode}').
The ORIGINAL files are formatted with one key and localized value pair per line as follows.

\`\`\`
key1=en value1
key2=en value2
...
\`\`\`

Write the translation to file ${trfn} formatted with one key and localized value pair per line as follows (DO NOT use JSON).

\`\`\` file="${trfn}"
key1=${langCode} value1
key2=${langCode} value2
...
\`\`\`


## Recommendations

- DO NOT translate the keys
- DO translate the values to ${langName} (lang-iso '${langCode}')
- DO NOT use foul language.

### Block Strings

The value for keys ending with "|block" are MakeCode block strings (https://makecode.com/defining-blocks)
and should be translated following these rules:

- Every variable name is prefixed with a '%' or a '$', like %foo or $bar.
- Do NOT translate variable names.
- Some variable names have a value, like '%foo=toggleOnOff'. The value should be NOT translated.
- All variables in the original string should be in the translated string.
- Make sure to translate '\\%' to '\\%' and '\\$' to '\\$' if they are not variables.
- Event string starts with 'on', like 'on pressed'. Interpret 'on' as 'when' when, like 'when pressed', when translating.
- The translations of "...|block" string should be short.
- Capitalize acronyms (LCD, OLED), Bool.

`

// language specific instructions
if (langCode === "de") {
    $`
- Capitalize Pipe in translations.
- Always translate "on ..." with "wenn ..."
`
}


// add to prompt context
def(
    "ORIGINAL",
    {
        filename,
        label,
        content: contentToTranslate,
    },
    { language: "txt" }
)

// merge the translations with the old one and marshal yaml to json
defFileMerge((filename, label, before, generated) => {
    if (!filename.endsWith("-strings.json")) return undefined

    // existing translatins
    const olds = JSON.parse(before || "{}")

    // parse out kv
    const news = generated
        .split(/\n/g)
        .map(line => /^([^=]+)=(.+)$/.exec(line))
        .filter(m => !!m)
        .reduce((o, m) => {
            const [, key, value] = m
            // assign
            o[key] = value
            return o
        }, {})

    // merge new translations with olds ones
    Object.assign(olds, news)

    // return stringified json
    return JSON.stringify(olds, null, 2)
})
