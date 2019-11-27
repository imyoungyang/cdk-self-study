#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { SimpleLambdaStack } = require('./lib/simple-lambda-stack');

const app = new cdk.App();
new SimpleLambdaStack(app, 'SimpleLambdaStack');
