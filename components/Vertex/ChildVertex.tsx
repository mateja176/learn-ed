import React from 'react';
import { ChildLearningPath } from '../../models/learning-path';

const ChildVertex: React.FC<{
  parentSize: number;
  parentColor: React.CSSProperties['color'];
  childLearningPath: ChildLearningPath;
}> = ({ childLearningPath }) => {
  return <pre>{JSON.stringify(childLearningPath)}</pre>;
};

export default ChildVertex;
