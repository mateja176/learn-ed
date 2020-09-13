import { useBoolean } from 'ahooks';
import color from 'color';
import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import React from 'react';
import { ChildLearningPath } from '../../models/learning-path';
import { getPrioritySize, getTextColor } from '../../utils/learning-path';
import { cardStyle } from '../../utils/styles/card';
import VideoLayer from '../Video/VideoLayer';
import Header from './Header';

const ChildVertex: React.FC<{
  pathname: string;
  parentColor?: React.CSSProperties['color'];
  learningPath: ChildLearningPath;
}> = ({ pathname, parentColor, learningPath }) => {
  const [videoLayerOpen, setVideoLayerOpen] = useBoolean();

  const cardBackground = color(parentColor).fade(0.5);

  const childCardStyle: React.CSSProperties = React.useMemo(
    () => ({
      ...cardStyle,
      maxWidth: getPrioritySize(learningPath.priority),
      color: learningPath.color ? getTextColor(learningPath.color) : 'black',
    }),
    [learningPath],
  );

  const hasChildren = Object.values(learningPath.children).length;

  return (
    <Box align={'center'}>
      <Card
        background={learningPath.color || cardBackground.toString()}
        style={childCardStyle}
      >
        <Header label={learningPath.label} priority={learningPath.priority} />
        <CardBody pad="medium">
          <Box>{learningPath.description}</Box>
          <Box direction={'row'} margin={{ top: '10px' }}>
            {learningPath.associations?.map((association) => (
              <Button
                hoverIndicator
                secondary
                label={capitalize(association)}
              />
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
          <Button
            icon={<Icons.Video color={'brand'} />}
            onClick={setVideoLayerOpen.setTrue}
            hoverIndicator
          />
          <Link href={pathname}>
            <Button
              disabled={!hasChildren}
              title={`${hasChildren ? 'Explore' : 'No subsections'}`}
              icon={<Icons.Next />}
              hoverIndicator
            />
          </Link>
        </CardFooter>
      </Card>

      <VideoLayer
        videoUrl={learningPath.videoUrl}
        open={videoLayerOpen}
        onClose={setVideoLayerOpen.setFalse}
      />
    </Box>
  );
};

export default ChildVertex;
