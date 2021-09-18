#!/bin/bash

echo "Start deploy"
ssh -tq root@88.198.50.217 '/bin/bash -l -c "source ~/.nvm/nvm.sh; cd /var/www/html/sigmaverse/;git pull && yarn && yarn build && npx next export"'
echo "Deployed Successfully!"

exit 0
