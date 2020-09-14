import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import React from 'react';
import { ILearningPath } from '../../../models/learning-path';
import { getTextColor } from '../../../utils/learning-path';
import { cardStyle } from '../../../utils/styles/card';
import Header from '../Header';

export type RootVertexProps = Pick<React.CSSProperties, 'color'> & {
  learningPath: ILearningPath;
};

const RootVertex: React.FC<RootVertexProps> = ({ color, learningPath }) => {
  const cardBackground = React.useMemo(
    () => learningPath.color ?? color ?? 'black',
    [learningPath.color],
  );

  const rootCardStyle: React.CSSProperties = React.useMemo(
    () => ({
      ...cardStyle,
      maxWidth: 550,
      color: getTextColor(cardBackground),
    }),
    [cardBackground],
  );

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
