#!/bin/sh

COMMIT=$(git rev-parse HEAD)
for version in $(jq -r .[] versions.json); do
    echo "Building docusaurus $version docs ..."
    git checkout $version
    npm cache clean --force && npm install && npm run docusaurus docs:version $version

    # versions.json / package-lock.json, get mangled by Docusarus causing problems
    # rm versions.json package-lock.json
done

# Rebuild main/commit level docs
echo "Building docusaurus main docs ..."

# rm package-lock.json

cp -R figures ./versioned_docs/
echo "building docusaurus main docs"
git checkout $COMMIT
npm ci && npm run build
cp -r legacy /build
mv build ~/output
echo "done building docusaurus main docs"

# Move figures over

# Actual build
# npm install && npm run build
# mv build ~/output
# echo "done building docusaurus main docs"
# echo "Finished building docs ... "