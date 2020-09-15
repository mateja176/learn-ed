import { Box } from 'grommet/components/Box';
import { Grommet } from 'grommet/components/Grommet';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
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
    <Grommet theme={theme} themeMode={'dark'} full>
      {children}
    </Grommet>
    <ToastContainer />
  </Box>
);

export default Layout;
