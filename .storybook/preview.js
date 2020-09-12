import { Grommet } from 'grommet/components/Grommet';
import React from 'react';
import { theme } from '../utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Grommet theme={theme} full themeMode={'dark'}>
      <Story />
    </Grommet>
  ),
];
