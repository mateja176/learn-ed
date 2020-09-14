import { AppProps } from 'next/app';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import './app.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
