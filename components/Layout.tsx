import { Box } from 'grommet/components/Box';
import { Grommet } from 'grommet/components/Grommet';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { FirebaseAppProvider } from 'reactfire';
import { createGlobalStyle } from 'styled-components';
import urljoin from 'url-join';
import env from '../services/env';
import { firebaseApp } from '../services/firebase';
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

const { origin } = env;

const Layout: React.FC = ({ children }) => {
  React.useEffect(() => {
    const logRocketId = env.logRocketId; // eslint-disable-line prefer-destructuring
    if (process.env.NODE_ENV === 'production') {
      if (logRocketId) {
        LogRocket.init(logRocketId);
      } else {
        console.error('No logrocket id supplied.');
      }

      setupLogRocketReact(LogRocket);

      if (env.mixpanelToken) {
        mixpanel.init(env.mixpanelToken, { batch_requests: true });
      } else {
        console.error('No mixpanel token supplied.');
      }
    }
  }, []);

  return (
    <Box direction={'column'} height={'100%'}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href={urljoin(origin, 'manifest.json')} />
        <meta name="theme-color" content="#f2f2f2" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Roboto:300:400:500&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300:400:500&display=swap"
        />
      </Head>
      <main>
        <GlobalStyle />
        <FirebaseAppProvider firebaseApp={firebaseApp}>
          <Grommet theme={theme} themeMode={'dark'} full>
            {children}
          </Grommet>
          <ToastContainer />
        </FirebaseAppProvider>
      </main>
    </Box>
  );
};

export default Layout;
