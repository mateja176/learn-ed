import Next from '../../../assets/next.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const next: IVertex = {
  Logo: Next,
  priority: Priority.gold,
  color: 'black',
  label: 'Next',
  description: 'Hybrid static & server rendering for React.',
  url: 'https://nextjs.org/',
  videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
  children: {},
  associations: ['frontend/frameworks/react'],
};

export default next;
