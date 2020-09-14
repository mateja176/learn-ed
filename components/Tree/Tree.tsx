import { Box } from 'grommet/components/Box';
import React from 'react';
import urljoin from 'url-join';
import ChildVertex from '../Vertex/ChildVertex';
import Edge from '../Vertex/Edge';
import RootVertex, { RootVertexProps } from '../Vertex/Root/RootVertex';

export interface TreeProps
  extends Pick<RootVertexProps, 'learningPath'>,
    Pick<React.CSSProperties, 'color'> {
  pathname: string;
}

const Tree: React.FC<TreeProps> = (props) => {
  return (
    <div>
      <RootVertex color={props.color} learningPath={props.learningPath} />
      {Object.entries(props.learningPath.children).map(([key, path]) => (
        <Box key={key}>
          <Edge />
          <ChildVertex
            parentColor={props.learningPath.color || props.color}
            pathname={urljoin(props.pathname, key)}
            learningPath={path}
          />
        </Box>
      ))}
    </div>
  );
};

export default Tree;
