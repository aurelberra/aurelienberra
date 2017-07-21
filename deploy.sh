#!/bin/bash

echo -e "--------------------------------"
echo -e "# \033[0;32mDeploying updates to GitHub...\033[0m"

echo -e "--------------------------------"
echo -e "\033[0;32mUpdate source repo aurelienberra\033[0m"
echo -e "--------------------------------"

git add -A # better than "git add ." according to man page

# Commit changes with provided argument or with date as message
msg="Regenerate site `date +%Y-%m-%d\ %H:%M:%S`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

git push -u origin master

echo -e "--------------------------------"
echo -e "\033[0;32mUpdate repo aurelberra.github.io\033[0m"
echo -e "--------------------------------"

# Build the project
# build public folder in github pages repo worked for me
# hugo
hugo -d /Users/aurel/Documents/github/aurelberra.github.io
cd /Users/aurel/Documents/github/aurelberra.github.io

git add -A

msg="Regenerate site `date +%Y-%m-%d\ %H:%M:%S`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

git push -u origin master
