import { Box } from 'grommet/components/Box';
import { Grommet } from 'grommet/components/Grommet';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { FirebaseAppProvider } from 'reactfire';
import { createGlobalStyle } from 'styled-components';
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

const Layout: React.FC = ({ children }) => {
  React.useEffect(() => {
    const logRocketId = process.env.logRocketId; // eslint-disable-line prefer-destructuring
    if (process.env.NODE_ENV === 'production' && logRocketId) {
      LogRocket.init(logRocketId);

      setupLogRocketReact(LogRocket);
    }
  }, []);

  return (
    <Box direction={'column'} height={'100%'}>
      <Head>
        <title>Learn-ed</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          id="test"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <GlobalStyle />
      <FirebaseAppProvider firebaseApp={firebaseApp}>
        <Grommet theme={theme} themeMode={'dark'} full>
          {children}
        </Grommet>
        <ToastContainer />
      </FirebaseAppProvider>
    </Box>
  );
};

export default Layout;
