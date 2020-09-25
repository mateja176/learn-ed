import { IVertex, Priority } from './learning-path';

const example: IVertex = {
  label: '<Example>',
  description: 'Describe your learning path in a sentence of two.',
  url: 'https://example.com', // Documentation link
  videoUrl: 'https://www.youtube.com/watch?v=CLXt3yh2g0s', // Link to a YouTube tutorial
  color: 'gray', // Card color
  priority: Priority.platinum, // How important is the topic for the current learning path
  children: {}, // A Record whose key is used to construct the path to a resource
  // associations: [] // Optional list of full paths to related vertices
};

export default example;
