module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  env: {
    firebaseApiKey: 'AIzaSyBJpWY3zxbrQw8omGdZ5ls_nT3gq1pvo4E',
    firebaseAuthDomain: 'learn-ed.firebaseapp.com',
    firebaseDatabaseUrl: 'https://learn-ed.firebaseio.com',
    firebaseProjectId: 'learn-ed',
    firebaseStorageBucket: 'learn-ed.appspot.com',
    firebaseMessagingSenderId: '555673042379',
    firebaseAppId: '1:555673042379:web:2ea7ff082d549feaa5ca4e',
    firebaseMeasurementId: 'G-6B32XEYKB',
    logRocketId: 'learn-ed/learn-ed',
    mixpanelToken: '59148aca96d44b8788b32c6475378df5',
    origin: 'https://d2kko0cf1h4tlx.cloudfront.net/',
  },
  webpack(config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
