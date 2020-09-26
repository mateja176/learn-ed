// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react';
import React from 'react';
import RootVertex from '../../components/Vertex/Root/RootVertex';
import frontend from '../../utils/learning-paths/frontend';

export default {
  title: 'Vertex/Root',
  component: RootVertex,
  argTypes: {
    color: {
      name: 'color',
    },
  },
} as Meta<React.ComponentProps<typeof RootVertex>>;

const Template: Story<React.ComponentProps<typeof RootVertex>> = (props) => (
  <RootVertex {...props} />
);

export const Frontend = (): React.ReactElement => (
  <Template
    origin={'https://learn-ed.web.app'}
    parentPathname={'learning-path'}
    pathname={'frontend'}
    learningPath={frontend}
  />
);
