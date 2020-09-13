import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import { CardHeader } from 'grommet/components/CardHeader';
import capitalize from 'lodash/capitalize';
import React from 'react';
import { ChildLearningPath } from '../../models/learning-path';
import { getPriorityColor, getTextColor } from '../../utils/color';

const priorityIndicatorSize = 20;

const ChildVertex: React.FC<{
  parentColor?: React.CSSProperties['color'];
  learningPath: ChildLearningPath;
}> = ({ parentColor, learningPath: childLearningPath }) => {
  const priorityIndicatorStyle: React.CSSProperties = React.useMemo(
    () => ({
      background: getPriorityColor(childLearningPath.priority),
      borderRadius: 5,
      width: priorityIndicatorSize,
      height: priorityIndicatorSize,
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
    }),
    [childLearningPath],
  );
  const cardStyle: React.CSSProperties = React.useMemo(
    () => ({
      color: childLearningPath.color
        ? getTextColor(childLearningPath.color)
        : parentColor,
    }),
    [childLearningPath],
  );

  const hasChildren = Object.values(childLearningPath.children).length;

  return (
    <Card background={childLearningPath.color} style={cardStyle}>
      <CardHeader pad="medium">
        <Box direction={'row'} width={'100%'}>
          <Box
            round
            style={priorityIndicatorStyle}
            title={`${capitalize(childLearningPath.priority)} priority`}
          />
          &nbsp;
          <Box flex={'grow'} align={'center'}>
            {childLearningPath.label}
          </Box>
        </Box>
      </CardHeader>
      <CardBody pad="medium">
        <Box>{childLearningPath.description}</Box>
        <Box direction={'row'} margin={{ top: '10px' }}>
          {childLearningPath.associations?.map((association) => (
            <Button hoverIndicator secondary label={capitalize(association)} />
          ))}
        </Box>
      </CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Button icon={<Icons.Book />} hoverIndicator />
        <Button icon={<Icons.Video color={'blue'} />} hoverIndicator />
        <Button
          disabled={!hasChildren}
          title={`${hasChildren ? 'Explore' : 'No subsections'}`}
          icon={<Icons.Next />}
          hoverIndicator
        />
      </CardFooter>
    </Card>
  );
};

export default ChildVertex;
