/* eslint-disable indent */

import color from 'color';
import { camelCase, fromPairs, isEmpty } from 'lodash';
import { last, reduce } from 'ramda';
import React from 'react';
import urljoin from 'url-join';
import {
  ILearningPath,
  Priority,
  RootLearningPath,
} from '../models/learning-path';

export const getLearningPath = ({
  rootLearningPath,
  segments,
}: {
  rootLearningPath: RootLearningPath;
  segments: string[];
}): ILearningPath => {
  return segments.reduce((paths, path) => {
    const key = camelCase(path);
    if (key in paths.children) {
      return paths.children[key];
    }
    return paths;
  }, rootLearningPath as ILearningPath);
};

export function hasChildren<A>(
  maybePath: ILearningPath | A,
): maybePath is ILearningPath {
  return 'children' in maybePath;
}

export const getPathnameSegments = (pathname: string): string[] =>
  pathname.replace('/learning-path/', '').split('/');

export const getTextColor = (
  background: NonNullable<React.CSSProperties['color']>,
): React.CSSProperties['color'] => {
  const backgroundColor = color(background.toLowerCase());
  const red = backgroundColor.red();
  const green = backgroundColor.green();
  const blue = backgroundColor.blue();
  return red * 0.299 + green * 0.587 + blue * 0.114 > 178 ? 'black' : 'white';
};

export const getPriorityColor = (
  priority: Priority,
): React.CSSProperties['color'] => {
  switch (priority) {
    case Priority.platinum:
      return 'linear-gradient(90deg, rgba(215,215,215,1) 0%, rgba(255,255,255,1) 35%, rgba(207,206,206,1) 100%)';
    case Priority.gold:
      return 'gold';
    case Priority.silver:
      return 'silver';
    case Priority.bronze:
      return 'chocolate';
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

export const getLearningPathColor = ({
  rootLearningPath,
  segments,
}: {
  rootLearningPath: ILearningPath;
  segments: string[];
}): React.CSSProperties['color'] =>
  reduce(
    ({ currentLearningPath, currentColor }, segment) => {
      const childLearningPath = currentLearningPath.children[segment];
      if (childLearningPath) {
        return {
          currentLearningPath: childLearningPath,
          currentColor:
            childLearningPath.color ??
            color(currentColor.toLowerCase()).fade(0.2).toString(),
        };
      }
      return {
        currentLearningPath,
        currentColor,
      };
    },
    { currentLearningPath: rootLearningPath, currentColor: 'black' },
    segments,
  ).currentColor;

type GetPathnameParams = {
  key: string;
  root: ILearningPath;
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
