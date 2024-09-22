#!/bin/sh

PROJECT=finsy-436413
IMAGE=gcr.io/${PROJECT}/finsy-backend

env_vars="ENV=production,"
# env_vars="${env_vars}GH_APP_IDENTIFIER=${GH_APP_IDENTIFIER},"
# env_vars="${env_vars}GH_APP_SECRET_KEY=${GH_APP_SECRET_KEY},"
# env_vars="${env_vars}GH_WEBHOOK_SECRET=${GH_WEBHOOK_SECRET},"
# env_vars="${env_vars}VERSION=${VERSION},"
# env_vars="${env_vars}SENTRY_WEBPACK_WEBHOOK_SECRET=${SENTRY_WEBPACK_WEBHOOK_SECRET},"

gcloud builds submit --tag $IMAGE --project=$PROJECT --gcs-log-dir=gs://${PROJECT}_cloudbuild/logs && \
gcloud run deploy finsy-backend \
  --image $IMAGE \
  --set-env-vars="$env_vars" \
  --project=$PROJECT \
  --platform managed \
  --allow-unauthenticated \
  --region=europe-west3

