// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Edge, { EdgeProps } from '../../components/Vertex/Edge';

export default {
  title: 'Vertex/Edge',
  component: Edge,
} as Meta<EdgeProps>;

const Template: Story<React.ComponentProps<typeof Edge>> = (props) => (
  <Edge {...props} />
);

export const Index = (): React.ReactElement => <Template />;
