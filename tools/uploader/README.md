# Jacdac Uploader

## Sim environment setup

In a separate folder, clone the `gh-pages` branch of this repo.

```bash
git clone --branch gh-pages https://github.com/microsoft/pxt-jacdac gh-pages-pxt-jacdac
```

To build, in this folder:

```bash
mkc -j
cp built/binary.js ../../gh-pages-pxt-jacdac/assets/js/binary-local.js
```

To run simulator, in `gh-pages-pxt-jacdac`:

```bash
http-server -c0 -p3232 .
```

Then open https://microsoft.github.io/jacdac-docs/editors/makecode?localhost=1 and select `pxt serve` option.

If you want to link a local copy of `azureiot` or `mqtt` packages, create `mkc-local.json` similar to this:

```json
{
    "targetWebsite": "https://maker.makecode.com",
    "links": {
        "jacdac": "../..",
        "jacdac-accelerometer": "../../accelerometer",
        "jacdac-servo": "../../servo",
        "jacdac-motor": "../../motor",
        "jacdac-button": "../../button",
        "jacdac-rotaryencoder": "../../rotary-encoder",
        "jacdac-ledpixel": "../../led-pixel",
        "jacdac-led": "../../led",
        "wifi---esp32": "/path/to/pxt-common-packages/libs/wifi---esp32",
        "net": "/path/to/pxt-common-packages/libs/net",
        "azureiot": "/path/to/pxt-common-packages/libs/azureiot"
    }
}
```

Then instead of `mkc -j` run `mkc -j -c mkc-local.json`

