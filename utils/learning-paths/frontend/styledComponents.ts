import StyledComponents from '../../../assets/styledComponents.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const styledComponents: IVertex = {
  Logo: StyledComponents,
  priority: Priority.platinum,
  color: 'salmon',
  label: 'Styled Components',
  description: 'Visual primitives for the component age.',
  url: 'https://styled-components.com/docs/basics',
  videoUrl: 'https://www.youtube.com/watch?v=syqw5UJrfoc',
  children: {},
};

export default styledComponents;
