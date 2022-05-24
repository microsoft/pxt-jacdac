#!/bin/sh

echo "$BASH_VERSION"
FILENAME="others.txt"
LINES=$(cat $FILENAME)
rm -Rf "others"
mkdir "others"
cd others
for SLUG in $LINES
do
    echo "cloning $SLUG"
    git clone https://github.com/$SLUG
done
mkc build --mono-repo
