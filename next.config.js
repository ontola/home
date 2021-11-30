/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  target: 'serverless',
});
