# Deploy Lambda

* Create a AWS CDK application and add the Lambda package or run [shell](./sam-init.sh)

```
mkdir cdk-sam-example && cd cdk-sam-example
cdk init app --language typescript
npm install @aws-cdk/aws-lambda
```

* Add a Lambda reference to lib/cdk-sam-example-stack.ts

```
import lambda = require('@aws-cdk/aws-lambda');
import path = require('path');
```

* Replace comments with lambda functions to lib/cdk-sam-example-stack.ts

```
    new lambda.Function(this, 'hello', {
      runtime: lambda.Runtime.NODEJS_8_10,
      handler: 'index.handler',
      code:    code: lambda.Code.fromAsset(path.join(__dirname, 'hello')),
    });
```

* Create directory 'lib/hello'

```
mkdir -p cdk-sam-example/lib/hello && cd cdk-sam-example/lib/hello
touch index.js
```

* copy codes into index.js

```
exports.handler = (event, context) => {
   console.log('Hello World From CDK')
};
```

* Comple CDK and generate template at cdk-sam-example directory

```
npm run build
cdk synth --no-staging > ./lib/hello/template.yaml
```

* Find the logical ID for Lambda function in template.yaml. It like

```
  hello26396490:
    Type: AWS::Lambda::Function
    Properties:
```

* Use sam local to test your function

```
cd ./lib/hello/
sam local invoke hello26396490 --no-event
```

* And Get the results:

```
sam local invoke hello26396490 --no-event
2019-11-27 11:04:37 Found credentials in shared credentials file: ~/.aws/credentials
2019-11-27 11:04:38 Invoking index.handler (nodejs8.10)

Fetching lambci/lambda:nodejs8.10 Docker container image......
2019-11-27 11:04:38 Mounting /home/ec2-user/environment/cdk-self-study/5-deploy-lambda/cdk-sam-example/lib/hello as /var/task:ro inside runtime container
START RequestId: 7a181029-cf4b-17ab-2141-99905febc322 Version: $LATEST
2019-11-27T11:04:38.706Z        7a181029-cf4b-17ab-2141-99905febc322    Hello World From CDK
END RequestId: 7a181029-cf4b-17ab-2141-99905febc322
```

* Deploy lambda at `cdk-sam-example`

```
cdk list
cdk deploy
```