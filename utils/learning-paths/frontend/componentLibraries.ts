import { IVertex, Priority } from '../../../models/learning-path';

const componentLibraries: IVertex = {
  priority: Priority.platinum,
  color: 'deepSkyBlue',
  label: 'Component Libraries',
  description: 'Leverage the power of design systems.',
  url:
    'https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238',
  videoUrl: 'https://www.youtube.com/watch?v=9pT-q0SSYow',
  children: {
    materialUi: {
      priority: Priority.gold,
      color: '#1976d2',
      label: 'Material UI',
      description: 'Material design for your website.',
      url: 'https://material-ui.com/getting-started/installation/',
      videoUrl: 'https://www.youtube.com/watch?v=PWadEeOuv5o',
      children: {},
    },
    antDesign: {
      priority: Priority.gold,
      color: '#F63344',
      label: 'Ant Design',
      description: 'Enterprise grade.',
      url: 'https://ant.design/docs/react/getting-started',
      videoUrl: 'https://www.youtube.com/watch?v=m96DTtTpGpA',
      children: {},
    },
    reactBootstrap: {
      priority: Priority.gold,
      color: '#2C2C2C',
      label: 'React Bootstrap',
      description: 'Bootstrap rebuilt for React.',
      url: 'https://react-bootstrap.github.io/getting-started/introduction/',
      videoUrl: 'https://www.youtube.com/watch?v=8pKjULHzs0s',
      children: {},
    },
  },
};

export default componentLibraries;
