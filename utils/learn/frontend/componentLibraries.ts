import Ant from '../../../assets/ant.svg';
import ComponentLibraries from '../../../assets/componentLibraries.svg';
import MaterialUi from '../../../assets/materialUi.svg';
import ReactBootstrap from '../../../assets/reactBootstrap.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const componentLibraries: IVertex = {
  Logo: ComponentLibraries,
  priority: Priority.platinum,
  label: 'Component Libraries',
  description: 'Leverage the power of design systems.',
  url:
    'https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238',
  videoUrl: 'https://www.youtube.com/watch?v=9pT-q0SSYow',
  children: {
    materialUi: {
      Logo: MaterialUi,
      priority: Priority.gold,
      label: 'Material UI',
      description: 'Material design for your website.',
      url: 'https://material-ui.com/getting-started/installation/',
      videoUrl: 'https://www.youtube.com/watch?v=vyJU9efvUtQ&t=5s',
      children: {},
    },
    ant: {
      Logo: Ant,
      priority: Priority.gold,
      label: 'Ant Design',
      description: 'Enterprise grade.',
      url: 'https://ant.design/docs/react/getting-started',
      videoUrl: 'https://www.youtube.com/watch?v=m96DTtTpGpA',
      children: {},
    },
    reactBootstrap: {
      Logo: ReactBootstrap,
      priority: Priority.gold,
      label: 'React Bootstrap',
      description: 'Bootstrap rebuilt for React.',
      url: 'https://react-bootstrap.github.io/getting-started/introduction/',
      videoUrl: 'https://www.youtube.com/watch?v=8pKjULHzs0s',
      children: {},
    },
  },
};

export default componentLibraries;
