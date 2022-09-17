# CORS Lambda@Edge - Viewer Response

This CloudFront Lambda@Edge function performs two functions:

* Overwrite CORS headers so single-page apps can perform cross-domain API requests

* Redirect all 4xx errors to root

## Trust Relationship

The Lambda needs to have trust relationships defined before it can be deployed against a CloudFront instance. 

To update trust relationship, from within the Lambda:

1. Click on the `Configuration` horizontal tab
2. Click on the `Permissions` left vertical tab
3. Scroll down to `Execution role`
4. Click on the given role name (new window will appear)
5. Click on the `Trust relationships` horizontal tab
6. Click on the `Edit trust policy` button
7. Paste the JSON code below and `Update Policy`

````
{
   "Version": "2012-10-17",
   "Statement": [
      {
         "Effect": "Allow",
         "Principal": {
            "Service": [
               "lambda.amazonaws.com",
               "edgelambda.amazonaws.com"
            ]
         },
         "Action": "sts:AssumeRole"
      }
   ]
}
````



---
## References

* https://stackoverflow.com/questions/53796032/cannot-create-aws-lamda-function-due-to-some-cryptic-error-message

* https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html

* https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-overriding-response-header