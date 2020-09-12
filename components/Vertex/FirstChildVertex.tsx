import React from 'react';
import { ChildLearningPath } from '../../models/learning-path';

const ChildVertex: React.FC<{
  learningPath: ChildLearningPath;
}> = ({ learningPath }) => {
  return <pre>{JSON.stringify(learningPath, null, 2)}</pre>;
};

export default ChildVertex;
