import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import Link from 'next/link';
import React from 'react';
import { ILearningPath } from '../../../models/learning-path';
import { getTextColor } from '../../../utils/learning-path';
import { cardStyle } from '../../../utils/styles/card';
import Header from '../Header';

export interface RootVertexProps {
  pathname: string;
  parentColor?: React.CSSProperties['color'];
  learningPath: ILearningPath;
}

const RootVertex: React.FC<RootVertexProps> = ({
  pathname,
  parentColor,
  learningPath,
}) => {
  const cardBackground = React.useMemo(
    () => learningPath.color ?? parentColor ?? 'black',
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

  const backLink = pathname.split('/').slice(0, -1).join('/');

  return (
    <Box align={'center'}>
      <Card background={cardBackground} style={rootCardStyle}>
        <Header label={learningPath.label} priority={learningPath.priority} />
        <CardBody pad="medium">{learningPath.description}</CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          {backLink ? (
            <Link href={backLink}>
              <Button icon={<Icons.Previous />} hoverIndicator />
            </Link>
          ) : (
            <Button icon={<Icons.Previous />} disabled />
          )}
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
