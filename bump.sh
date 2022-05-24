#!/bin/sh

set -e
git pull
makecode bump --version-file version.ts
