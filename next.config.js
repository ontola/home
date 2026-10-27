const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Should import, but bug in AWS deploy
const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  i18n,
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cases/atomic-data/',
        destination: '/cases/atomic-place/',
        permanent: true,
      },
    ];
  },
});
