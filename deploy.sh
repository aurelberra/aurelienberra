#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# rm -r public
# git rm -r public
# rm -rf <submodule> && git submodule update
# rm -rf .git/modules/public
# git submodule add git@github.com:aurelberra/aurelberra.github.io.git public

git add .
msg="Regenerate site `date +%Y-%m-%d\ %H:%M:%S`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
git push -u origin master

# Build the project
# hugo
hugo -d /Users/aurel/Documents/github/aurelberra.github.io
cd /Users/aurel/Documents/github/aurelberra.github.io # build public into github pages repo

# Add changes to git
# git add -A
git add . # add all

# Commit changes with provided argument or with date as message
msg="Regenerate site `date +%Y-%m-%d\ %H:%M:%S`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source
git push -u origin master
