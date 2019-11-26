#!/bin/bash
mkdir -p cdk_app && cd cdk_app
cdk init app --language=typescript && cd ..
mkdir -p cdk_lib && cd cdk_lib
cdk init lib --language=typescript && cd ..
mkdir -p cdk_sample_app && cd cdk_sample_app
cdk init sample-app --language=typescript && cd ..