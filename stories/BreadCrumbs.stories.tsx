import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Breadcrumbs, {
  BreadcrumbsProps,
} from '../components/Breadcrumbs/Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    pathname: {
      name: 'pathname',
      defaultValue: 'products/tv/details',
    },
  },
} as Meta<BreadcrumbsProps>;

const Template: React.FC<BreadcrumbsProps> = (props) => (
  <Breadcrumbs {...props} />
);

export const Index = Template.bind(null);
