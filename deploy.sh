#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project
hugo

# Add changes to git
git add -A

# Commit changes with provided argument or with date as message
msg="Rebuilding site `date +%Y-%m-%d:%H:%M:%S`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source
git push origin master
