// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import RootVertex from '../../components/Vertex/RootVertex';
import frontend from '../../utils/frontend.learning-path';

export default {
  title: 'Vertex/Root',
  component: RootVertex,
} as Meta;

const Template: Story<React.ComponentProps<typeof RootVertex>> = (props) => (
  <RootVertex {...props} />
);

export const Frontend = (): React.ReactElement => (
  <Template learningPath={frontend} />
);
