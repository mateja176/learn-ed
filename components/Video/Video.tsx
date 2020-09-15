import React from 'react';
import { usePlayer } from '../../hooks/youtube';
import { WithVideoUrl } from '../../models/learning-path';

export const Video: React.FC<WithVideoUrl> = (props) => {
  const { playerRef, player } = usePlayer(props);

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

  return <div ref={playerRef} />;
};
