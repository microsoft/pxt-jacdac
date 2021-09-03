# Jacdac Uploader

## Sim environment setup

To build, run `./build.sh`.
If it detects a local checkout of `pxt-common-packages` in the right spot, it will try to use it
(for freshest version of `azureiot`, `mqtt`, etc.).

To test, run `./serve.sh` and head to 
https://microsoft.github.io/jacdac-docs/editors/makecode?localhost=1 
Then select `pxt serve` option.

To publish a new version to github pages, do the following:

```bash
cp ../../docs/assets/js/binary-local.js ../../docs/assets/js/binary.js
git add ../../docs/assets/js/binary.js
git commit -m "new build of uploader"
```
