import { IVertex, Priority } from '../../../models/learning-path';

const fetch: IVertex = {
  imageUrl: '/fetch.svg',
  priority: Priority.platinum,
  color: 'fireBrick',
  label: 'Fetch API',
  description: 'Like XMLHttpRequest, but more powerful and flexible.',
  url: 'https://developer.mozilla.org/en/docs/Web/API/Fetch_API',
  videoUrl: 'https://www.youtube.com/watch?v=T3Px88x_PsA',
  children: {},
};

export default fetch;
