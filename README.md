# Jacdac Services for MakeCode

This project contains [Jacdac](https://aka.ms/jacdac) host and client services for MakeCode editors.

* [Read the documentation](https://jacdac.github.io/jacdac-docs/clients/makecode/)

## Using this extensions

-   Open your MakeCode editor (see supported editors)
-   Go to the extension dialog and search for https://github.com/jacdac/pxt-jacdac
-   Import the extension.

### Supported editors

-   MakeCode for micro:bit (V2), https://makecode.microbit.org/
-   MakeCode Arcade, https://arcade.makecode.com/
-   Calliope, https://makecode.calliope.cc/

## Developer section

Issues are tracked at https://github.com/jacdac/jacdac/issues .

To build all projects

```
sh mk.sh
```

To bump the release, use the CLI. Don't create releases from the MakeCode built-in GitHub editors.

```
sh bump.sh
```

Run `makecode --pxt-modules` to create files in `pxt_modules/*`, which help with TypeScript auto-completion.

To refresh the `constants.ts` files, build jacdac-spec (`yarn buildspecs` from jacdac-ts) from https://github.com/jacdac/jacdac-ts .

### Deploying in WSL/Codespaces

If you do not have access to USB drive, launch a local web service and download the built `binary.hex`

```
mkc build --watch --serve
```

then navigate to the firmware web server

### Building local projects

Typically you can do ``makecode` from any subproject to build for micro:bit. To use another config, for example arcade,

```
makecode -c ../mkc-arcade.json
```

You can also add `--hw d5` or `--hw d5,f4,...` to build for specific hardware profiles.
