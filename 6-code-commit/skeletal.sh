#!/bin/bash
touch README.md .gitignore package.json cdk.json index.ts tsconfig.json

cat <<EOT >> .gitignore
*.js
*.d.ts
.application.json
node_modules/
.npm
cdk.out
lambda-payloads.json
EOT

cat <<EOT >> package.json
{
  "name": "cdk-cicd",
  "version": "0.1.0",
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "cdk": "cdk"
  },
  "devDependencies": {
    "@aws-cdk/assert": "^1.18.0",
    "@types/node": "^10.17.5",
    "aws-cdk": "^1.18.0",
    "ts-node": "^8.1.0",
    "typescript": "~3.7.2"
  },
  "dependencies": {
    "@aws-cdk/core": "^1.18.0",
    "source-map-support": "^0.5.16"
  }
}
EOT

cat <<EOT >> cdk.json
{
  "app": "npx ts-node index.ts"
}
EOT

cat <<EOT >> tsconfig.json
{
  "compilerOptions": {
    "target":"ES2018",
    "module": "commonjs",
    "lib": ["es2018"],
    "declaration": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": false,
    "inlineSourceMap": true,
    "inlineSources": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization":false,
    "typeRoots": ["./node_modules/@types"]
  },
  "exclude": ["cdk.out"]
}
EOT

cat <<EOT >> index.ts
#!/usr/bin/env node
import 'source-map-support/register';
import cdk= require('@aws-cdk/core');
import { CdkCICDStack } from './lib/cdk-cicd-stack';

const app = new cdk.App();
// https://docs.aws.amazon.com/cdk/latest/guide/environments.html
new CdkCICDStack(app, 'AppDlamiStack', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION
  }
});
EOT

mkdir lib && cd ./lib
touch cdk-cicd-stack.ts
cat <<EOT >> cdk-cicd-stack.ts
import cdk = require('@aws-cdk/core');

export class CdkCICDStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}
EOT
npm i
