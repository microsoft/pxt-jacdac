# Jacdac Uploader

## Sim environment setup

To build, run `./build.sh`.
This will run the simulator and compilation in watch mode.

If it detects a local checkout of `pxt-common-packages` in the right spot, it will try to use it
(for freshest version of `azureiot`, `mqtt`, etc.).

To test, head to 
https://microsoft.github.io/jacdac-docs/dashboard/?localhost=1
and spin up "Azure IoT (localhost)" simulator.

To publish a new version to github pages, do the following:

```bash
cp built/binary.js ../../docs/assets/js/binary.js
git add ../../docs/assets/js/binary.js
git commit -m "new build of uploader"
```
