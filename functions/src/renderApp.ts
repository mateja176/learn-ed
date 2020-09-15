import * as functions from 'firebase-functions';
import next from 'next';

const isDev = process.env.NODE_ENV !== 'production';
const nextjsDistDir = '.next';

const server = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
  },
});

const handler = server.getRequestHandler();

export const renderApp = functions.https.onRequest((req, res) => {
  return server.prepare().then(() => handler(req, res));
});
