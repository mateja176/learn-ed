import { Box } from 'grommet/components/Box';
import React from 'react';
import urljoin from 'url-join';
import ChildVertex from '../Vertex/ChildVertex';
import Edge from '../Vertex/Edge';
import RootVertex, { RootVertexProps } from '../Vertex/Root/RootVertex';

export interface TreeProps extends RootVertexProps {}

const Tree: React.FC<TreeProps> = (props) => {
  return (
    <div>
      <RootVertex
        pathname={props.pathname}
        parentColor={props.parentColor}
        learningPath={props.learningPath}
      />
      {Object.entries(props.learningPath.children).map(([key, path]) => (
        <Box key={key}>
          <Edge />
          <ChildVertex
            parentColor={props.learningPath.color || props.parentColor}
            pathname={urljoin(props.pathname, key)}
            learningPath={path}
          />
        </Box>
      ))}
    </div>
  );
};

export default Tree;
