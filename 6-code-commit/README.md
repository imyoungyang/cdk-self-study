# CDK pipeline

## Create CodeCommit and CodeBuild
* Go to folder `cdk-cicd`

```
npm run build
cdk list
cdk deploy
```

* code commit repo name: `cdk-cicd-demo`

* checkout codecommit repo `cdk-cicd-demo` at `~/environment`

```
cd ~/environment
git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true
cp -r /home/ec2-user/environment/cdk-self-study/6-code-commit/simple-lambda cdk-cicd-demo
cd cdk-cicd-demo
git init
git remote add origin https://git-codecommit.us-east-1.amazonaws.com/v1/repos/cdk-cicd-demo
git add .
git commit -m "init"
git push origin master
```