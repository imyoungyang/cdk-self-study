# CDK init and folder structures

Available templates:
* app: Template for a CDK Application
    * `cdk init app --language=`[csharp|fsharp|java|javascript|python|typescript]
* lib: Template for a CDK Construct Library
    * `cdk init lib --language=`typescript
* sample-app: Example CDK Application with some constructs
    * `cdk init sample-app --language=`[csharp|fsharp|java|javascript|python|typescript]

## Project Directory

| Folder / File  | Description  |  
|---|---|
| bin | This file contains the entry point for AWS CDK app |
| lib | Files contains the code for AWS CDK stack |
| node_models | Contains supporting code packages that the app and stack can use as needed |
| package.json | Contains information to make running the npm command easier and with possibly fewer build and run error |
| cdk.json | tell the entry point of the app |

### Related configurations of CDK

#### cdk.json
* You need to add the following line to let CDK know your application entry file:
```
{
  "app": "npx ts-node bin/hello-cdk.ts"
}
```

or, use the command `cdk --app`. [ref](https://docs.aws.amazon.com/cdk/latest/guide/tools.html)

#### package.json
* CDK Application: "bin" field in your package.json which is a map of command name to local file name
  ```
    "bin": {
      "cdk_app": "bin/cdk_app.js"
    },
  ```

* CDK library: "main" field is a `module` primary entry point to your program. That is, if your package is named foo, and a user installs it, and then does require("foo"), then your main module’s exports object will be returned.
  ```
    "main": "lib/index.js"
  ```

* npm `build`, `watch`, and `test` command:
  ```
    "scripts": {
      "build": "tsc",
      "watch": "tsc -w",
      "test": "jest",
      "cdk": "cdk"
    }
  ```
