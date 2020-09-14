import color from 'color';
import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import urljoin from 'url-join';
import { ChildLearningPath } from '../../models/learning-path';
import { getPrioritySize, getTextColor } from '../../utils/learning-path';
import { cardStyle } from '../../utils/styles/card';
import VideoLayer from '../Video/VideoLayer';
import Header from './Header';

const ChildVertex: React.FC<{
  parentPathname: string;
  pathname: string;
  parentColor?: React.CSSProperties['color'];
  learningPath: ChildLearningPath;
}> = ({ parentPathname, pathname, parentColor, learningPath }) => {
  const router = useRouter();

  const videoLayer = router.query.video === pathname;
  const toggleVideoLayer = React.useCallback(() => {
    router.push({
      pathname: parentPathname,
      query: videoLayer ? {} : { video: pathname },
    });
  }, [router, videoLayer, parentPathname, pathname]);

  const cardBackground =
    learningPath.color ??
    color(parentColor?.toLowerCase()).fade(0.2).toString();

  const childCardStyle: React.CSSProperties = React.useMemo(
    () => ({
      ...cardStyle,
      maxWidth: getPrioritySize(learningPath.priority),
      color: getTextColor(cardBackground),
    }),
    [learningPath],
  );

  const hasChildren = Object.values(learningPath.children).length;

  return (
    <Box align={'center'}>
      <Card background={cardBackground} style={childCardStyle}>
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
            onClick={toggleVideoLayer}
            hoverIndicator
          />
          <Link href={urljoin(parentPathname, pathname)}>
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
        open={videoLayer}
        onClose={toggleVideoLayer}
      />
    </Box>
  );
};

export default ChildVertex;
