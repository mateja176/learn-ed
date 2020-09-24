import { IVertex, Priority } from './learning-path';

export default {
  label: 'Example',
  description: 'This is for demonstrative purposes only.',
  url: 'https://example.com', // Documentation link
  videoUrl: 'https://www.youtube.com/watch?v=CLXt3yh2g0s', // Link to a YouTube tutorial
  color: 'gray', // Card color
  priority: Priority.platinum, // How important is the topic for the current learning path
  children: {}, // A Record whose key is used to construct the path to a resource
  // associations: [] // Optional list of full paths to related vertices
} as IVertex;
