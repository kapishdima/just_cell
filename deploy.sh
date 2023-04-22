#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build:staging

# navigate into the build output directory
cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'
git push -f git@github.com:kapishdima/just_cell.git master:gh-pages

cd -