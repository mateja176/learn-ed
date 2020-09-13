import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
  ChildLearningPath,
  FirstChildLearningPath,
  RootLearningPath,
} from '../../../models/learning-path';
import { cardStyle } from '../../../utils/styles/card';
import Header from '../Header';

export type RootVertexProps = Pick<React.CSSProperties, 'color'> & {
  learningPath: RootLearningPath | FirstChildLearningPath | ChildLearningPath;
};

const rootCardStyle: React.CSSProperties = {
  ...cardStyle,
  maxWidth: 550,
};

const RootVertex: React.FC<RootVertexProps> = ({ color, learningPath }) => {
  const cardBackground = React.useMemo(() => learningPath.color ?? color, [
    learningPath.color,
  ]);

  return (
    <Box align={'center'}>
      <Card background={cardBackground} style={rootCardStyle}>
        <Header label={learningPath.label} priority={learningPath.priority} />
        <CardBody pad="medium">{learningPath.description}</CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Button
            style={{ visibility: 'hidden' }}
            icon={<Icons.Dislike color="gray" />}
            hoverIndicator
          />
          <Button
            style={{ visibility: 'hidden' }}
            icon={<Icons.Like color="brand" />}
            hoverIndicator
          />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default RootVertex;
