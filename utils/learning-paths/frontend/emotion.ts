import Emotion from '../../../assets/emotion.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const emotion: IVertex = {
  Logo: Emotion,
  priority: Priority.gold,
  color: 'paleVioletRed',
  label: 'Emotion',
  description: 'Powerful and predictable styling.',
  url: 'https://emotion.sh/docs/introduction',
  videoUrl: 'https://youtu.be/fhkAvKUOqDs?t=826',
  children: {},
};

export default emotion;
