#!/bin/sh

echo "######### BUILD DOCS #########"

echo "building docusaurus main docs"
npm ci && npm run build

git fetch origin
git checkout v3-docs-legacy -- legacy/**
echo $(pwd)
echo $(ls -alh ../)
echo $(ls -alh)
# copy legacy docs to build folder
cp -r ./legacy ./build/
mv build ~/output
echo "done building docusaurus main docs"
