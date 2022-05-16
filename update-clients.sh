#!/bin/sh

set -e
git pull
for f in $(find . -name '*.gts'); do
    echo "processing $f..."; 
    cf="${f%.*}.g.ts"
    if [ -f $cf ]
    then
        cp "$f" "${cf}"
    fi
done

prettier --write **/*.ts