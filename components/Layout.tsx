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

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <Box direction={'column'} height={'100%'}>
    <Head>
      <title>{title}</title>
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
