import * as Icons from 'grommet-icons';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import { CardHeader } from 'grommet/components/CardHeader';
import React from 'react';
import { RootLearningPath } from '../../models/learning-path';

const ChildVertex: React.FC<{
  learningPath: RootLearningPath;
}> = ({ learningPath }) => {
  return (
    <Card height="small" width="small" background="light-1">
      <CardHeader pad="medium">
        <span role="img" aria-label={learningPath.label}>
          🖥️
        </span>{' '}
        {learningPath.label}
      </CardHeader>
      <CardBody pad="medium">Body</CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Icons.Dislike color="gray" />} hoverIndicator />
        <Button icon={<Icons.Like color="blue" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default ChildVertex;
