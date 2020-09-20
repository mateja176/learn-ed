import { Priority, RootLearningPath } from '../../models/learning-path';
import frontend from './frontend';
import javascript from './frontend/javascript';
import react from './frontend/react';

const rootLearningPath: RootLearningPath = {
  priority: Priority.platinum,
  color: 'white',
  label: '🏁 Root',
  description: 'Your journey starts here',
  children: { frontend, javascript, react },
};
export default rootLearningPath;
