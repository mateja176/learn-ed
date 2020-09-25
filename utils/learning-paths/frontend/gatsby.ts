import { IVertex } from '../../../create-learning-path/example/learning-path';
import { Priority } from '../../../models/learning-path';

const gatsby: IVertex = {
  priority: Priority.gold,
  color: '#663399',
  label: 'Gatsby',
  description: 'Powerful and configurable with over 2000 plugins.',
  url: 'https://www.gatsbyjs.com/docs/',
  videoUrl: 'https://www.youtube.com/watch?v=8t0vNu2fCCM',
  children: {},
};

export default gatsby;
