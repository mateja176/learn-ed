import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import { CardHeader } from 'grommet/components/CardHeader';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { RootLearningPath } from '../../models/learning-path';
import ChildVertex from './ChildVertex';
import Edge from './Edge';

const RootVertex: React.FC<{
  learningPath: RootLearningPath;
}> = ({ learningPath }) => {
  return (
    <Box>
      <Card background="light-1">
        <CardHeader pad="medium">
          <Box direction={'row'} width={'100%'}>
            <span role="img" aria-label={learningPath.label}>
              {learningPath.emoji}
            </span>{' '}
            <Box flex={'grow'} align={'center'}>
              {learningPath.label}
            </Box>
          </Box>
        </CardHeader>
        <CardBody pad="medium">{learningPath.description}</CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Button
            style={{ visibility: 'hidden' }}
            icon={<Icons.Dislike color="gray" />}
            hoverIndicator
          />
          <Button
            style={{ visibility: 'hidden' }}
            icon={<Icons.Like color="blue" />}
            hoverIndicator
          />
        </CardFooter>
      </Card>
      {Object.entries(learningPath.children).map(([key, path]) => (
        <Box key={key}>
          <Edge />
          <ChildVertex learningPath={path} />
        </Box>
      ))}
    </Box>
  );
};

export default RootVertex;
