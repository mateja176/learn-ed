import color from 'color';
import React from 'react';
import { Priority } from '../models/learning-path';

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
      return 'yellow';
    case Priority.silver:
      return 'silver';
    case Priority.bronze:
      return 'goldenRod';
    default:
      return 'grey';
  }
};
