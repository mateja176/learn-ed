import React from 'react';
import LearningPath, { LearningPathProps } from './[...all]';

export interface RootLearningPathProps extends LearningPathProps {}

const RootLearningPath: React.FC<RootLearningPathProps> = LearningPath;

export default RootLearningPath;
