import ReactNative from '../../../assets/reactNative.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const reactNative: IVertex = {
  Logo: ReactNative,
  priority: Priority.gold,
  label: 'React Native',
  description: 'Leverage the power or React to build IOS and Android apps',
  url: 'https://reactnative.dev/docs/getting-started',
  videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
  children: {},
};

export default reactNative;
