#!/bin/sh

echo "building docusaurus main docs"
npm ci && npm run build
cp -r ./legacy ./build
mv build ~/output
echo "done building docusaurus main docs"
