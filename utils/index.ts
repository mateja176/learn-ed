import Root from '../assets/root.svg';
import { Priority, RootVertex } from '../models/learning-path';
import jobs from './jobs';
import learn from './learn';
import projects from './projects';

const root: RootVertex = {
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
    jobs,
    projects,
  },
};

export default root;
