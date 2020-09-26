import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAnalytics } from '../../hooks/analytics';
import { IVertex } from '../../models/learning-path';
import {
  getAssociationLabel,
  getPrioritySize,
  getTextColor,
} from '../../utils/learning-path';
import { cardStyle } from '../../utils/styles/card';
import VideoLayer from '../Video/VideoLayer';
import Header from './Header';

const Vertex: React.FC<{
  parentPathname: string;
  pathname: string;
  learningPath: IVertex;
  Footer: React.FC<{ openVideo: () => void }>;
}> = ({ parentPathname, pathname, learningPath, Footer }) => {
  const analytics = useAnalytics();

  const router = useRouter();

  const videoLayer = router.query.video === pathname;
  const toggleVideoLayer = React.useCallback(() => {
    router.push({
      pathname: parentPathname,
      query: videoLayer ? {} : { video: pathname },
    });
  }, [router, videoLayer, parentPathname, pathname]);

  const openVideo = React.useCallback(() => {
    analytics.event({ type: 'openVideo', payload: { learningPath: pathname } });

    toggleVideoLayer();
  }, [toggleVideoLayer, analytics, pathname]);

  const childCardStyle: React.CSSProperties = React.useMemo(
    () => ({
      ...cardStyle,
      maxWidth: getPrioritySize(learningPath.priority),
      color: getTextColor(learningPath.color),
    }),
    [learningPath],
  );

  return (
    <Box align={'center'}>
      <Card background={learningPath.color} style={childCardStyle}>
        <Header label={learningPath.label} priority={learningPath.priority} />
        <CardBody pad="medium">
          <Box>{learningPath.description}</Box>
          <Box direction={'row'} margin={{ top: '10px' }}>
            {learningPath.associations?.map((association) => (
              <Link key={association} href={association}>
                <Button
                  hoverIndicator
                  secondary
                  label={getAssociationLabel(association)}
                />
              </Link>
            ))}
          </Box>
        </CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Footer openVideo={openVideo} />
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
