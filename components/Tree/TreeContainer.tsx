import { useRouter } from 'next/router';
import React from 'react';
import Tree, { TreeProps } from './Tree';

export interface TreeContainerProps extends Omit<TreeProps, 'color'> {}

const TreeContainer: React.FC<TreeContainerProps> = (props) => {
  const router = useRouter();

  return (
    <Tree
      {...props}
      color={
        Array.isArray(router.query.color)
          ? router.query.color[0]
          : router.query.color
      }
    />
  );
};

export default TreeContainer;
