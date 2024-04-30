#!/bin/sh

echo "######### BUILD DOCS #########"

echo "building docusaurus main docs"
npm ci && npm run build
# copy legacy docs to build folder
git fetch v3-docs-legacy
git checkout v3-docs-legacy -- legacy
cp -r ./legacy ./build/
mv build ~/output
echo "done building docusaurus main docs"
