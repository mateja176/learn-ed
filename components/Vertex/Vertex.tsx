import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IVertex } from '../../models/learning-path';
import {
  getFullPathname,
  getPrioritySize,
  getRootKey,
  getTextColor,
} from '../../utils/learning-path';
import rootLearningPath from '../../utils/learning-paths';
import { cardStyle } from '../../utils/styles/card';
import VideoLayer from '../Video/VideoLayer';
import Header from './Header';

const Vertex: React.FC<{
  parentPathname: string;
  pathname: string;
  learningPath: IVertex;
  Footer: React.FC<{ openVideo: () => void }>;
}> = ({ parentPathname, pathname, learningPath, Footer }) => {
  const router = useRouter();

  const videoLayer = router.query.video === pathname;
  const toggleVideoLayer = React.useCallback(() => {
    router.push({
      pathname: parentPathname,
      query: videoLayer ? {} : { video: pathname },
    });
  }, [router, videoLayer, parentPathname, pathname]);

  const childCardStyle: React.CSSProperties = React.useMemo(
    () => ({
      ...cardStyle,
      maxWidth: getPrioritySize(learningPath.priority),
      color: getTextColor(learningPath.color),
    }),
    [learningPath],
  );

  const rootKey = getRootKey(parentPathname);
  const root = rootLearningPath.children[rootKey];

  return (
    <Box align={'center'}>
      <Card background={learningPath.color} style={childCardStyle}>
        <Header label={learningPath.label} priority={learningPath.priority} />
        <CardBody pad="medium">
          <Box>{learningPath.description}</Box>
          <Box direction={'row'} margin={{ top: '10px' }}>
            {learningPath.associations?.map((association) => (
              <Link
                key={association}
                href={getFullPathname({
                  key: association,
                  root,
                  pathnames: ['learning-path', rootKey],
                })}
              >
                <Button
                  hoverIndicator
                  secondary
                  label={capitalize(association)}
                />
              </Link>
            ))}
          </Box>
        </CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Footer openVideo={toggleVideoLayer} />
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

export default Vertex;
