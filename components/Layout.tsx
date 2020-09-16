import { Box } from 'grommet/components/Box';
import { Grommet } from 'grommet/components/Grommet';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { FirebaseAppProvider } from 'reactfire';
import { createGlobalStyle } from 'styled-components';
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

const firebaseConfig = {
  firebaseApiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  firebaseDatabaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  firebaseProjectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  firebaseStorageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppId: process.env.REACT_APP_FIREBASE_APP_ID,
  firebaseMeasurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const Layout: React.FC = ({ children }) => (
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
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Grommet theme={theme} themeMode={'dark'} full>
        {children}
      </Grommet>
      <ToastContainer />
    </FirebaseAppProvider>
  </Box>
);

export default Layout;
