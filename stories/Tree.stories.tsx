import { Meta, Story } from '@storybook/react';
import React from 'react';
import urljoin from 'url-join';
import Tree from '../components/Tree/Tree';
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
} as Meta<React.ComponentProps<typeof Tree>>;

const Template: Story<React.ComponentProps<typeof Tree>> = (props) => (
  <Tree {...props} />
);

const rootPath = '/learning-path';
export const Root = (): React.ReactElement => (
  <Template
    parentPathname={rootPath}
    pathname={'frontend'}
    learningPath={frontend}
  />
);

const frontendPathname = urljoin(rootPath, 'frontend');
const {
  children: { frameworks },
} = frontend;
export const FirstChild = (): React.ReactElement => (
  <Template
    parentPathname={frontendPathname}
    pathname={'frameworks'}
    learningPath={frameworks}
  />
);

const frameworksPathname = urljoin(frontendPathname, 'react');
const {
  children: { react },
} = frameworks;
export const GrandChild = (): React.ReactElement => (
  <Template
    parentPathname={frameworksPathname}
    pathname={'react'}
    learningPath={react}
  />
);
