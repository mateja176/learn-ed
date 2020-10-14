import Gatsby from '../../../assets/gatsby.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const gatsby: IVertex = {
  Logo: Gatsby,
  priority: Priority.gold,
  label: 'Gatsby',
  description: 'Powerful and configurable with over 2000 plugins.',
  url: 'https://www.gatsbyjs.com/docs/',
  videoUrl: 'https://www.youtube.com/watch?v=8t0vNu2fCCM',
  children: {},
};

export default gatsby;
