import { Box } from 'grommet/components/Box';
import { Grommet } from 'grommet/components/Grommet';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { theme } from '../utils/theme';

type Props = {
  title?: string;
};

const grommetStyle: React.CSSProperties = { height: '100%' };

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
    <Grommet theme={theme} themeMode={'dark'} style={grommetStyle}>
      {children}
    </Grommet>
    <ToastContainer />
  </Box>
);

export default Layout;
