import Root from '../assets/root.svg';
import { IVertex, Priority } from '../models/learning-path';
import learn from './learn';

const root: IVertex = {
  Logo: Root,
  priority: Priority.platinum,
  label: '💻 Learn-ed',
  description:
    'Improve your odds of getting a programming job and level up your skills.',
  url:
    'https://www.freecodecamp.org/news/how-to-get-a-software-engineer-job-at-google-and-other-top-tech-companies-efa235a33a6d/',
  videoUrl: 'https://www.youtube.com/watch?v=yXIL5CjQJdQ',
  children: {
    learn,
  },
};

export default root;
