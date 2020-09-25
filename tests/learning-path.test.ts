import { IVertex } from '../create-learning-path/example/learning-path';
import { getTextColor } from '../utils/learning-path';
import rootLearningPath from '../utils/learning-paths';

describe('learning-path', () => {
  describe('color', () => {
    test('each vertex has a parsable color', () => {
      const test = (learningPath: IVertex) => {
        expect(typeof getTextColor(learningPath.color)).toBe('string');
        Object.values(learningPath.children).forEach(test);
      };
      test(rootLearningPath);
    });
  });
});
