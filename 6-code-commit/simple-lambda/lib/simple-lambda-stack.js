const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const path = require('path');

class SimpleLambdaStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

  const fn = new lambda.Function(this, 'simple-lambda', {
    runtime: lambda.Runtime.PYTHON_3_7,
    handler: 'app.lambda_handler',
    code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
  });
  }
}

module.exports = { SimpleLambdaStack }
