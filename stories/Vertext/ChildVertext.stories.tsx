// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react';
import React from 'react';
import urljoin from 'url-join';
import ChildVertex from '../../components/Vertex/ChildVertex';
import frontend from '../../utils/learn/frontend';

export default {
  title: 'Vertex/Child',
  component: ChildVertex,
} as Meta;

const Template: Story<React.ComponentProps<typeof ChildVertex>> = (props) => (
  <ChildVertex {...props} />
);

const [[webKey, webPath]] = Object.entries(frontend.children);

const origin = 'https://learn-ed.web.app';

export const Web = (): React.ReactElement => (
  <Template
    origin={origin}
    parentPathname={urljoin('frontend')}
    pathname={webKey}
    learningPath={webPath}
  />
);

export const Frameworks = (): React.ReactElement => (
  <Template
    origin={origin}
    parentPathname={urljoin('frontend')}
    pathname={'frameworks'}
    learningPath={frontend.children.frameworks}
  />
);

export const CodeEditors = (): React.ReactElement => (
  <Template
    origin={origin}
    parentPathname={urljoin('frontend')}
    pathname={'codeEditors'}
    learningPath={frontend.children.codeEditors}
  />
);

export const Next = (): React.ReactElement => (
  <Template
    origin={origin}
    parentPathname={urljoin('frontend', 'ssr')}
    pathname={'next'}
    learningPath={frontend.children.ssr.children.next}
  />
);

export const Electron = (): React.ReactElement => (
  <Template
    origin={origin}
    parentPathname={urljoin('frontend')}
    pathname={'electron'}
    learningPath={frontend.children.electron}
  />
);

export const Docosaurus = (): React.ReactElement => (
  <Template
    origin={origin}
    parentPathname={urljoin('frontend', 'documentation')}
    pathname={'docosaurus'}
    learningPath={frontend.children.documentation.children.docusaurus}
  />
);
