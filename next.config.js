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
};
