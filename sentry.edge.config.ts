import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2b2dceb003e7eb6e4d1cf9eef723649d@o4508232869412864.ingest.us.sentry.io/4508232876163072",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
