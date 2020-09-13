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
}> = ({ parentColor, learningPath }) => {
  const priorityIndicatorStyle: React.CSSProperties = React.useMemo(
    () => ({
      background: getPriorityColor(learningPath.priority),
      borderRadius: 5,
      width: priorityIndicatorSize,
      height: priorityIndicatorSize,
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
    }),
    [learningPath],
  );
  const cardStyle: React.CSSProperties = React.useMemo(
    () => ({
      color: learningPath.color
        ? getTextColor(learningPath.color)
        : parentColor,
    }),
    [learningPath],
  );

  const hasChildren = Object.values(learningPath.children).length;

  return (
    <Card background={learningPath.color} style={cardStyle}>
      <CardHeader pad="medium">
        <Box direction={'row'} width={'100%'}>
          <Box
            round
            style={priorityIndicatorStyle}
            title={`${capitalize(learningPath.priority)} priority`}
          />
          &nbsp;
          <Box flex={'grow'} align={'center'}>
            {learningPath.label}
          </Box>
        </Box>
      </CardHeader>
      <CardBody pad="medium">
        <Box>{learningPath.description}</Box>
        <Box direction={'row'} margin={{ top: '10px' }}>
          {learningPath.associations?.map((association) => (
            <Button hoverIndicator secondary label={capitalize(association)} />
          ))}
        </Box>
      </CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <a
          href={learningPath.url}
          target="__blank"
          rel="noopener noreferrer"
          title={`${learningPath.label} documentation`}
        >
          <Button icon={<Icons.Book />} hoverIndicator />
        </a>
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
