import Programming from '../../assets/programming.svg';
import { IVertex, Priority } from '../../models/learning-path';
import frontend from './frontend';
import javascript from './frontend/javascript';
import react from './frontend/react';

const rootLearningPath: IVertex = {
  Logo: Programming,
  priority: Priority.platinum,
  color: 'white',
  label: '💻 Programing',
  description: "It's not all ones and zeros.",
  url:
    'https://www.freecodecamp.org/news/a-gentler-introduction-to-programming-1f57383a1b2c/',
  videoUrl: 'https://www.youtube.com/watch?v=zOjov-2OZ0E',
  children: { frontend, javascript, react },
};
export default rootLearningPath;
