#!/bin/bash
mkdir -p cdk-sam-example && cd cdk-sam-example
cdk init app --language typescript
npm install @aws-cdk/aws-lambda
