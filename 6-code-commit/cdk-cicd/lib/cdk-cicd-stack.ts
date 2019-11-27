import cdk = require('@aws-cdk/core');
import codecommit = require('@aws-cdk/aws-codecommit');
import codebuild = require('@aws-cdk/aws-codebuild');
import iam = require('@aws-cdk/aws-iam');

function createStatement() {
  const statement = new iam.PolicyStatement({
      resources: ['*'],
      actions: ['lambda:*', 'ecr:*', 'cloudformation:*', 's3:*', 'iam:CreateRole'] });
  return statement;
}

export class CdkCICDStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const repo = new codecommit.Repository(this, 'cdk-cicd-demo' ,{
        repositoryName: 'cdk-cicd-demo',
        description: 'cdk cicd demo',
    });
    const project = new codebuild.Project(this, 'CDKCodeCommitProject', {
      source: codebuild.Source.codeCommit({repository: repo}),
      environment: {
        buildImage: codebuild.LinuxBuildImage.AMAZON_LINUX_2
      }
    });
    
    project.addToRolePolicy(createStatement());
  }
}
