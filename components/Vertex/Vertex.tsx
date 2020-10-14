import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Card } from 'grommet/components/Card';
import { CardBody } from 'grommet/components/CardBody';
import { CardFooter } from 'grommet/components/CardFooter';
import { Text } from 'grommet/components/Text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAnalytics } from '../../hooks/analytics';
import { VertexWithMaybeVideo } from '../../models/learning-path';
import {
  getAssociationLabel,
  getPriorityColor,
  getPrioritySize,
} from '../../utils/learning-path';
import { cardStyle } from '../../utils/styles/card';
import VideoLayer from '../Video/VideoLayer';

const imageWrapperStyle: React.CSSProperties = {
  height: 100,
  minWidth: 100,
  maxWidth: 100,
  marginRight: 12,
  borderRadius: 5,
  overflow: 'hidden',
};

const Vertex: React.FC<{
  parentPathname: string;
  pathname: string;
  learningPath: VertexWithMaybeVideo;
  Footer: React.FC<{ openVideo: (() => void) | null }>;
}> = ({ parentPathname, pathname, learningPath, Footer }) => {
  const analytics = useAnalytics();

  const router = useRouter();

  const videoLayerOpen = React.useMemo(() => router.query.video === pathname, [
    router,
    pathname,
  ]);
  const toggleVideoLayer = React.useCallback(() => {
    router.push({
      pathname: parentPathname,
      query: videoLayerOpen ? {} : { video: pathname },
    });
  }, [router, videoLayerOpen, parentPathname, pathname]);

  const openVideo = React.useCallback(() => {
    analytics.event({ type: 'openVideo', payload: { learningPath: pathname } });

    toggleVideoLayer();
  }, [toggleVideoLayer, analytics, pathname]);

  const childCardStyle: React.CSSProperties = React.useMemo(
    () => ({
      ...cardStyle,
      maxWidth: getPrioritySize(learningPath.priority),
      background: getPriorityColor(learningPath.priority),
    }),
    [learningPath],
  );

  return (
    <Box align={'center'}>
      <Card style={childCardStyle}>
        <CardBody pad="medium" direction="row" align="center">
          <Box style={imageWrapperStyle}>
            <learningPath.Logo width={'100%'} height={'100%'} />
          </Box>
          <Box style={{ flex: 1 }}>
            <Box pad={{ bottom: '24px' }}>
              <Text textAlign={'center'} size="large" weight="bold">
                {learningPath.label}
              </Text>
            </Box>
            <Text textAlign="center">{learningPath.description}</Text>
            <Box direction={'row'} margin={{ top: '10px' }}>
              {learningPath.associations?.map((association) => (
                <Link key={association} href={association}>
                  <Button
                    hoverIndicator
                    secondary
                    label={getAssociationLabel(association)}
                    margin={{ right: '5px' }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        </CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Footer openVideo={learningPath.videoUrl ? openVideo : null} />
        </CardFooter>
      </Card>

      {learningPath.videoUrl && (
        <VideoLayer
          videoUrl={learningPath.videoUrl}
          open={videoLayerOpen}
          onClose={toggleVideoLayer}
        />
      )}
    </Box>
  );
};

export default Vertex;
