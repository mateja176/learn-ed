/* eslint-disable indent */

import { Box } from 'grommet/components/Box';
import { kebabCase } from 'lodash';
import React from 'react';
import urljoin from 'url-join';
import ChildVertex from '../Vertex/ChildVertex';
import Edge from '../Vertex/Edge';
import RootVertex from '../Vertex/Root/RootVertex';

const Tree: React.FC<React.ComponentProps<typeof RootVertex>> = (props) => {
  const fullPathname = urljoin(props.parentPathname, props.pathname);
  return (
    <div>
      <RootVertex {...props} />
      {Object.entries(props.learningPath.children).map(
        ([key, learningPath]) => {
          return (
            <Box key={key}>
              <Edge />
              <ChildVertex
                parentPathname={fullPathname}
                pathname={kebabCase(key)}
                learningPath={learningPath}
              />
            </Box>
          );
        },
      )}
    </div>
  );
};

export default Tree;
