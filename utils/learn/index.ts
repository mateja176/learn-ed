import Learn from '../../assets/learn.svg';
import { IVertex, Priority } from '../../models/learning-path';
import frontend from './frontend';
import javascript from './frontend/javascript';
import react from './frontend/react';
import graphql from './graphql';
import typescript from './typescript';

const learn: IVertex = {
  Logo: Learn,
  priority: Priority.platinum,
  label: '📖 Learn Programing',
  description: "It's not all ones and zeros.",
  url:
    'https://www.freecodecamp.org/news/a-gentler-introduction-to-programming-1f57383a1b2c/',
  videoUrl: 'https://www.youtube.com/watch?v=zOjov-2OZ0E',
  children: { frontend, javascript, react, typescript, graphql },
};
export default learn;
