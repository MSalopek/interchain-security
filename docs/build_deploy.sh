#!/bin/sh

echo "######### BUILD DOCS #########"

# pull in the versions from versions.json
# source ./sync_versions.sh

echo "building docusaurus main docs"
# npm ci && npm run build
# copy legacy docs to build folder
git fetch origin
git checkout --track origin/legacy-docs-page -- legacy
cp -r ../legacy ./build/
mv build ~/output
echo "done building docusaurus main docs"
