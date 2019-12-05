#!/bin/bash

env -i
success=true

if [ "$1" = false ]
then
  echo "updating git index to no-assume unchanged for sensitive config files..."
  git update-index --no-assume-unchanged src/data/server.crt
  git update-index --no-assume-unchanged src/data/server.key
  git update-index --no-assume-unchanged ./.env
  #git update-index --no-assume-unchanged NodeApi/src/config/auth/authConfig.js
  #git update-index --no-assume-unchanged NodeApi/src/config/db/dbconnection.js
  #git update-index --no-assume-unchanged WebClient/src/environments/environment.ts
  #git update-index --no-assume-unchanged WebClient/src/environments/environment.prod.ts
elif [ "$1" = true ]
then
  echo "updating git index to assume unchanged for sensitive config files..."
  git update-index --assume-unchanged src/data/server.crt
  git update-index --assume-unchanged src/data/server.key
  git update-index --assume-unchanged ./.env
  #git update-index --assume-unchanged NodeApi/src/config/auth/authConfig.js
  #git update-index --assume-unchanged NodeApi/src/config/db/dbconnection.js
  #git update-index --assume-unchanged WebClient/src/environments/environment.ts
  #git update-index --assume-unchanged WebClient/src/environments/environment.prod.ts
else
  echo "please pass in either true/false as only argument to script"
  success=false
fi

if [ $success = true ]
then
  echo "successfully updated git index"
else
  echo "error running script..."
fi
