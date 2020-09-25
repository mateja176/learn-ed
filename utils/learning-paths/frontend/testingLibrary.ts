import { IVertex, Priority } from '../../../models/learning-path';

const testingLibrary: IVertex = {
  priority: Priority.platinum,
  color: '#FE4646',
  label: 'Testing Library',
  description:
    'Simple and complete testing utilities that encourage good testing practices.',
  url: 'https://testing-library.com/docs/intro',
  videoUrl: 'https://www.youtube.com/watch?v=3e1GHCA3GP0&t=5s',
  children: {},
};

export default testingLibrary;
