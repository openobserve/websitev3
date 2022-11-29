#!/bin/sh

# build from astro to static assets
npm run build

# Move the files to S3 bucket for hosting
aws s3 sync ./dist s3://zincsearch-website/  --exclude=".git/*" --profile=zinc-prod

# invalidate cloudfront cache so that latest files can be served
aws cloudfront create-invalidation --distribution-id EHLGSI3HYP380 --paths="/*" --profile=zinc-prod
