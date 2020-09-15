import React from 'react';
import LearningPath, { LearningPathProps } from './[...all]';

export type RootLearningPathProps = LearningPathProps;

const RootLearningPath: React.FC<RootLearningPathProps> = LearningPath;

export default RootLearningPath;
