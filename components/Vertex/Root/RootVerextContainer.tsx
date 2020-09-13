import { useRouter } from 'next/router';
import React from 'react';
import RootVertex from './RootVertex';

export interface RootVertexContainerProps
  extends React.ComponentProps<typeof RootVertex> {}

const RootVertexContainer: React.FC<RootVertexContainerProps> = (props) => {
  const router = useRouter();

  return (
    <RootVertex
      {...props}
      color={
        Array.isArray(router.query.color)
          ? router.query.color[0]
          : router.query.color
      }
    />
  );
};

export default RootVertexContainer;
