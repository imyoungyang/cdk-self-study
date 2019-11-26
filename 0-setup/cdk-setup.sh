#!/bin/bash
nvm use default
npm uninstall -g aws-cdk
npm uninstall -g typescript
npm install -g typescript
npm install -g aws-cdk
cdk --help
