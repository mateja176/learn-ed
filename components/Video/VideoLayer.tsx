import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Layer } from 'grommet/components/Layer';
import React from 'react';
import { Video } from './Video';

const VideoLayer: React.FC<
  React.ComponentProps<typeof Video> & { open: boolean; onClose: () => void }
> = (props) =>
  props.open ? (
    <Layer full>
      <Box background="light-2" justify="end" align="center" direction="row">
        <Button icon={<Icons.FormClose />} onClick={props.onClose} />
      </Box>
      <Box fill background="light-2" justify={'center'}>
        <Video videoUrl={props.videoUrl} />
      </Box>
    </Layer>
  ) : null;

export default VideoLayer;
