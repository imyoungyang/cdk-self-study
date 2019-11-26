import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import AppDlami = require('../lib/app-dlami-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AppDlami.AppDlamiStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});