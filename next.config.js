module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/learning-path',
        permanent: true,
      },
    ];
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
  },
};
