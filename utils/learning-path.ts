import color from 'color';
import { fromPairs } from 'lodash';
import { reduce } from 'ramda';
import React from 'react';
import { ILearningPath, Priority } from '../models/learning-path';

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
}): React.CSSProperties['color'] => {
  return reduce(
    ({ currentLearningPath, currentColor }, segment) => {
      const childLearningPath = currentLearningPath.children[segment];
      if (childLearningPath) {
        return {
          currentLearningPath: childLearningPath,
          currentColor:
            childLearningPath.color ??
            color(currentColor.toLowerCase()).fade(0.2).toString(),
        };
      } else {
        return {
          currentLearningPath,
          currentColor,
        };
      }
    },
    { currentLearningPath: rootLearningPath, currentColor: 'black' },
    segments,
  ).currentColor;
};