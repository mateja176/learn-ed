import Jest from '../../../assets/jest.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const jest: IVertex = {
  Logo: Jest,
  priority: Priority.platinum,
  color: '#c21325',
  label: 'Jest',
  description: 'Delightful testing with a focus on simplicity.',
  url: 'https://jestjs.io/docs/en/getting-started.html',
  videoUrl: 'https://www.youtube.com/watch?v=D9DdY2WmM-s',
  children: {},
};

export default jest;
