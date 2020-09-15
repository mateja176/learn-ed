import { render } from '@testing-library/react';
import { createRouter } from 'next/router';
import { identity } from 'ramda';
import React from 'react';
import App from '../pages/_app';

const router = createRouter('', {}, '', {
  isFallback: false,
  initialProps: {},
  initialStyleSheets: [],
  subscription: () => Promise.resolve(),
  App: ({ children }) => <>{children}</>,
  pageLoader: {},
  wrapApp: identity,
  Component: ({ children }) => <>{children}</>,
});

describe('App', () => {
  test('renders', () => {
    render(
      <App
        Component={({ children }) => <>{children}</>}
        pageProps={{}}
        router={router}
      />,
    );
  });
});
