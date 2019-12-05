#!/bin/bash
# This script is to reset sensitive config files. I use a git stash to persist the changes I need while switching branches/making commits to local branches for deploying to cloud
# And the other script to trigger whether git is tracking their changes or not

env -i

echo "resetting config files..."

git checkout src/data/server.crt
git checkout src/data/server.key
git checkout ./.env
