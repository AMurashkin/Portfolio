#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/projects | grep -v \\\.\$`; do
  cat app/projects/$file | python -mjson.tool > tmp.json
  rm app/projects/$file
  mv tmp.json app/projects/$file
done
