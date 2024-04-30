#!/bin/sh

echo "######### BUILD DOCS #########"

echo "building docusaurus main docs"
npm ci && npm run build
# copy legacy docs to build folder
cp -r ./legacy ./build/
mv build ~/output
echo "done building docusaurus main docs"
