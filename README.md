# Jacdac Services for MakeCode

This project contains [Jacdac](https://aka.ms/jacdac) host and client services for MakeCode editors.

* [Read the documentation](https://microsoft.github.io/jacdac-docs/clients/makecode/)

## Using this extensions

-   Open your MakeCode editor (see supported editors)
-   Go to the extension dialog and search for https://github.com/microsoft/pxt-jacdac
-   Import the extension.

### Supported editors

-   MakeCode for micro:bit (V2), https://makecode.microbit.org/
-   MakeCode Arcade, https://arcade.makecode.com/
-   Calliope, https://makecode.calliope.cc/

## Developer section

Issues are tracked at https://github.com/microsoft/jacdac/issues .

To build all projects

```
sh mk.sh
```

To bump the release, use the CLI. Don't create releases from the MakeCode built-in GitHub editors.

```
sh bump.sh
```

Run `makecode --pxt-modules` to create files in `pxt_modules/*`, which help with TypeScript auto-completion.

To refresh the `constants.ts` files, build jacdac-spec (`yarn buildspecs` from jacdac-ts) from https://github.com/microsoft/jacdac-ts .

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

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
