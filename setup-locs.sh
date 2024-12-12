#!/bin/sh

set -e

npm install -g pxt
npm install -D genaiscript@1.84.3
npm install -D zx
pxt target microbit
