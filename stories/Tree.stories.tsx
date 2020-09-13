import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import urljoin from 'url-join';
import Tree, { TreeProps } from '../components/Tree';
import frontend from '../utils/learning-paths/frontend';

export default {
  title: 'Tree',
  component: Tree,
  argTypes: {
    pathname: {
      name: 'pathname',
    },
    color: {
      name: 'color',
    },
  },
} as Meta<TreeProps>;

const Template: Story<React.ComponentProps<typeof Tree>> = (props) => (
  <Tree {...props} />
);

export const Root = (): React.ReactElement => (
  <Template pathname={'frontend'} learningPath={frontend} />
);

const frameworksPathname = urljoin('frontend', 'frameworks');
const {
  children: { frameworks },
} = frontend;
export const FirstChild = (): React.ReactElement => (
  <Template pathname={frameworksPathname} learningPath={frameworks} />
);

const {
  children: { react },
} = frameworks;
export const GrandChild = (): React.ReactElement => (
  <Template
    pathname={urljoin(frameworksPathname, 'react')}
    learningPath={react}
    color={'cyan'}
  />
);
