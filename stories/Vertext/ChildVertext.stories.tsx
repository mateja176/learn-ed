// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import ChildVertex from '../../components/Vertex/ChildVertex';
import frontend from '../../utils/frontend.learning-path';

export default {
  title: 'Vertex/Child',
  component: ChildVertex,
} as Meta;

const Template: Story<React.ComponentProps<typeof ChildVertex>> = (props) => (
  <ChildVertex {...props} />
);

export const Web = (): React.ReactElement => (
  <Template childLearningPath={frontend.children.web} />
);

export const Frameworks = (): React.ReactElement => (
  <Template childLearningPath={frontend.children.frameworks} />
);

export const CodeEditors = (): React.ReactElement => (
  <Template childLearningPath={frontend.children.codeEditors} />
);

export const SSR = (): React.ReactElement => (
  <Template childLearningPath={frontend.children.ssr.children.next} />
);

export const Electron = (): React.ReactElement => (
  <Template childLearningPath={frontend.children.electron} />
);

export const Docosaurus = (): React.ReactElement => (
  <Template
    childLearningPath={frontend.children.documentation.children.docusaurus}
  />
);
