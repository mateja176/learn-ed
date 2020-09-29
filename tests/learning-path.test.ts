import { IVertex } from '../models/learning-path';
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
  // describe('imageUrl', () => {
  // eslint-disable-next-line max-len
  //   test('each vertex has an imageUrl where the image name corresponds its key and has a valid extension', () => {
  //     const test = ([key, learningPath]: [string, IVertex]) => {
  //       expect(
  //         learningPath.imageUrl.match(/\/(?<name>\w+)\.(svg|png)/)?.groups
  //           ?.name,
  //       ).toBe(key);
  //       Object.entries(learningPath.children).forEach(test);
  //     };
  //     test(['programming', rootLearningPath]);
  //   });
  // });
});
