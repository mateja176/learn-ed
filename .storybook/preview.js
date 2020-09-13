import { Grommet } from 'grommet/components/Grommet';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '../utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Grommet theme={theme} themeMode={'dark'}>
      <Story />
      <ToastContainer />
    </Grommet>
  ),
];
