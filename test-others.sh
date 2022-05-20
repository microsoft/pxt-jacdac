#!/bin/sh

echo "$BASH_VERSION"
FILENAME="others.txt"
LINES=$(cat $FILENAME)
mkdir "others"
cd others
for LINE in $LINES
do
    echo "cloning $LINE"
    SLUG=${LINE/\/jacdac//}
    PROJECT=${SLUG#*/}
    if [[ -d "$PROJECT" ]]
    then
        cd $PROJECT
        git pull
        cd ..
    else
        git clone https://github.com/$SLUG
    fi
done
mkc build --mono-repo
