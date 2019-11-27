#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkSamExampleStack } from '../lib/cdk-sam-example-stack';

const app = new cdk.App();
new CdkSamExampleStack(app, 'CdkSamExampleStack');
