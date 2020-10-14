import { Box } from 'grommet';
import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { usePlayer } from '../../hooks/youtube';
import { IVertex } from '../../models/learning-path';

export const Video: React.FC<Pick<IVertex, 'videoUrl'>> = (props) => {
  const { playerRef, player, loading } = usePlayer(props);

  React.useEffect(
    () => () => {
      if (player) {
        console.log('title', player.target.playerInfo.videoData.title); // eslint-disable-line no-console
        console.log('currentTime', player.target.playerInfo.currentTime); // eslint-disable-line no-console
        console.log('duration', player.target.playerInfo.duration); // eslint-disable-line no-console
      }
    },
    [player],
  );

  return (
    <Box justify={'center'} style={{ position: 'relative' }}>
      {loading && (
        <Box alignSelf="center" style={{ position: 'absolute' }}>
          <PacmanLoader color="crimson" />
        </Box>
      )}
      <div ref={playerRef} />
    </Box>
  );
};
