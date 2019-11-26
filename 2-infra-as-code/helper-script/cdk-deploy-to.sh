#!bash
# cdk-deploy-to.sh
CDK_DEPLOY_ACCOUNT=$1
shift
CDK_DEPLOY_REGION=$1
shift
cdk deploy "$@"
