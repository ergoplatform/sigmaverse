#!/bin/bash

echo "Start deploy"
ssh -tq root@88.198.13.202 "cd /usr/share/nginx/sigmaverse/ && git pull && yarn && yarn build && npx next export"
echo "Deployed Successfully!"

exit 0
