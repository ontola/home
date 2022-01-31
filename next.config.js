/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// Should import, but bug in AWS deploy
// const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },
  reloadOnPrerender: true,
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  // Fixes a problem with building on AWS Amplify
  // https://answers.netlify.com/t/build-with-next-i18next-error-error-cannot-find-module-next-i18next-config-js/34132/4
  target: 'experimental-serverless-trace',
});
