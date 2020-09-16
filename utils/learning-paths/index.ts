import { Priority, RootLearningPath } from '../../models/learning-path';
import frontend from './frontend';

const rootLearningPath: RootLearningPath = {
  priority: Priority.platinum,
  color: 'white',
  label: '🏁 Root',
  description: 'Your journey starts here',
  children: { frontend },
};
export default rootLearningPath;
