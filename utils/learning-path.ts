/* eslint-disable indent */

import color from 'color';
import { camelCase, capitalize, fromPairs, isEmpty } from 'lodash';
import { last } from 'ramda';
import urljoin from 'url-join';
import { Difficulty, IVertex, Priority } from '../models/learning-path';
import { Color } from '../models/models';

export const getDifficultyColor = (difficulty?: Difficulty): string => {
  switch (difficulty) {
    case 'beginner':
      return 'paleGreen';
    case 'intermediate':
      return 'yellow';
    case 'advanced':
      return 'indianRed';
    default:
      return 'gray';
  }
};

export const getLearningPath = ({
  rootLearningPath,
  segments,
}: {
  rootLearningPath: IVertex;
  segments: string[];
}): IVertex => {
  return segments.reduce((paths, path) => {
    const key = camelCase(path);
    if (key in paths.children) {
      return paths.children[key];
    }
    return paths;
  }, rootLearningPath);
};

export function hasChildren<A>(maybePath: IVertex | A): maybePath is IVertex {
  return 'children' in maybePath;
}

export const getTextColor = (background: Color): Color => {
  const backgroundColor = color(background.toLowerCase());
  const red = backgroundColor.red();
  const green = backgroundColor.green();
  const blue = backgroundColor.blue();
  return red * 0.299 + green * 0.587 + blue * 0.114 > 178 ? 'black' : 'white';
};

export const getPriorityColor = (priority: Priority): Color => {
  switch (priority) {
    case Priority.platinum:
      return 'linear-gradient(90deg, rgba(220, 220, 220, 1) 0%, rgba(255, 255, 255, 1) 30%, rgba(220, 220, 220, 1) 100%)';
    case Priority.gold:
      return 'linear-gradient(90deg, rgba(255, 215, 0, 1) 0%, rgba(255, 255, 220, 1) 30%, rgba(255, 215, 0, 1) 100%)';
    case Priority.silver:
      return 'linear-gradient(90deg, rgba(220, 220, 220, 1) 0%, rgba(192, 192, 192, 1) 30%, rgba(220, 220, 220, 1) 100%)';
    case Priority.bronze:
      return 'linear-gradient(90deg, rgba(210, 105, 30, 1) 0%, rgb(255, 210, 130, 1) 30%, rgba(210, 105, 30, 1) 100%)';
    default:
      return 'grey';
  }
};

const maxSize = 500;
export const getPrioritySize = (priority: Priority): number =>
  fromPairs(
    Object.values(Priority).map((currentPriority, i) => [
      currentPriority,
      maxSize - i * 50,
    ]),
  )[priority];

type GetPathnameParams = {
  key: string;
  root: IVertex;
  pathnames: string[];
};
export const getFullPathname = (params: GetPathnameParams): string => {
  const rootPathnames = params.pathnames;
  const getFullPathnames = ({
    key,
    root,
    pathnames,
  }: GetPathnameParams): string[] =>
    Object.entries(root.children).reduce(
      (fullPathnames, [childKey, child], i, a) => {
        const lastKey = last(fullPathnames);
        if (lastKey === key) {
          return fullPathnames;
        } else if (key === childKey) {
          return fullPathnames.concat(childKey);
        } else if (isEmpty(child.children)) {
          if (i === a.length - 1) {
            return rootPathnames;
          } else {
            return fullPathnames;
          }
        } else {
          return getFullPathnames({
            key,
            root: child,
            pathnames: pathnames.concat(childKey),
          });
        }
      },
      pathnames,
    );
  return urljoin('/', ...getFullPathnames(params));
};

export const getAssociationLabel = (association: string): never | string => {
  const lastSegment = last(association.split('/'));

  if (lastSegment) {
    return capitalize(lastSegment);
  } else {
    throw new Error(
      `The association must at least have one segment and the provided path ${association} has none.`,
    );
  }
};
