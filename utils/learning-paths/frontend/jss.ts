import Jss from '../../../assets/jss.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const jss: IVertex = {
  Logo: Jss,
  priority: Priority.gold,
  label: 'JSS',
  description: 'Styles - the conflict free, reusable way.',
  url: 'https://cssinjs.org/',
  videoUrl: 'https://www.youtube.com/watch?v=IeLqT75N8V0',
  children: {},
};

export default jss;
