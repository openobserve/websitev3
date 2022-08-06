#!/bin/sh


# Move the files to S3 bucket for hosting
aws s3 sync ./dist s3://zincsearch-website-staging/ --profile=zinc-dev

# # invalidate cloudfront cache so that latest files can be served
# aws cloudfront create-invalidation --distribution-id EHLGSI3HYP380 --paths=/* --profile=zinc-prod
