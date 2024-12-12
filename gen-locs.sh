#!/bin/sh

set -e

npm install -g pxt
npm install -g genaiscript
npm install -g zx
pxt target microbit
node gen-locs.mjs
