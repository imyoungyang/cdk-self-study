#!/bin/bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
## list available node version
nvm use default
node --version