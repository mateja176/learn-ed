import * as Icons from 'grommet-icons';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Layer } from 'grommet/components/Layer';
import React from 'react';
import { Video } from './Video';

const VideoLayer: React.FC<
  React.ComponentProps<typeof Video> & { open: boolean; onClose: () => void }
> = ({ open, onClose, videoUrl }) => {
  return open ? (
    <Layer full>
      <Box background="light-2" justify="end" align="center" direction="row">
        <Button icon={<Icons.FormClose />} onClick={onClose} />
      </Box>
      <Box fill background="light-2" justify={'center'}>
        <Video videoUrl={videoUrl} />
      </Box>
    </Layer>
  ) : null;
};

export default VideoLayer;
