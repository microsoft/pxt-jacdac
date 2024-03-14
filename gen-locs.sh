#!/bin/sh

set -e

npm install -g pxt
npm install zx
pxt target microbit
node gen-locs.mjs
