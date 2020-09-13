import React from 'react';
import { usePlayer } from '../../hooks/youtube';
import { WithVideoUrl } from '../../models/learning-path';

export const Video: React.FC<WithVideoUrl> = (props) => {
  const { playerRef, player } = usePlayer(props);

  React.useEffect(() => {
    return () => {
      if (player) {
        console.log('title', player.target.playerInfo.videoData.title);
        console.log('currentTime', player.target.playerInfo.currentTime);
        console.log('duration', player.target.playerInfo.duration);
      }
    };
  }, [player]);

  return <div ref={playerRef} />;
};
