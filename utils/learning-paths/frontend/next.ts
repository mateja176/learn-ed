import { Priority, Vertex } from '../../../models/learning-path';

export default {
  priority: Priority.gold,
  color: 'black',
  label: 'Next',
  description: 'Hybrid static & server rendering for React.',
  url: 'https://nextjs.org/',
  videoUrl: 'https://www.youtube.com/watch?v=IkOVe40Sy0U',
  children: {},
  associations: ['react'],
} as Vertex;
