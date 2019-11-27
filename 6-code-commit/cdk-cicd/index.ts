#!/usr/bin/env node
import 'source-map-support/register';
import cdk= require('@aws-cdk/core');
import { CdkCICDStack } from './lib/cdk-cicd-stack';

const app = new cdk.App();
// https://docs.aws.amazon.com/cdk/latest/guide/environments.html
new CdkCICDStack(app, 'cdkCICDStack', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION
  }
});
