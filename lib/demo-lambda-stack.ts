import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class DemoLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const myLambdaFunction = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,    // Define the runtime environment
      code: lambda.Code.fromAsset('lib/lambda'),  // Code loaded from the "lambda" directory
      handler: 'index.handler',               // File is "index", function is "handler"
    });
  }
}
