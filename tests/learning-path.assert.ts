import { IVertex } from '../create-learning-path/example/learning-path';
import { getTextColor } from '../utils/learning-path';
import rootLearningPath from '../utils/learning-paths';

const test = (learningPath: IVertex) => {
  try {
    getTextColor(learningPath.color);
  } catch (error) {
    console.error(error.message, learningPath);
  }

  Object.values(learningPath.children).forEach(test);
};

test(rootLearningPath);
