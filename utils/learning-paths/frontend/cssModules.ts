import CssModules from '../../../assets/cssModules.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const cssModules: IVertex = {
  Logo: CssModules,
  priority: Priority.gold,
  color: 'aliceBlue',
  label: 'CSS Modules',
  description: 'Explicit is better than implicit.',
  url: 'https://github.com/css-modules/css-modules',
  videoUrl: 'https://www.youtube.com/watch?v=pKMWU9OrA2s',
  children: {},
};

export default cssModules;
