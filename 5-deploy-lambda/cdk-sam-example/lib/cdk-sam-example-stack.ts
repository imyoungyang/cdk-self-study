import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import path = require('path');

export class CdkSamExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'hello', {
      runtime: lambda.Runtime.NODEJS_8_10,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'hello')),
    });
  }
}
