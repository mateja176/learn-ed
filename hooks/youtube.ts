import { useBoolean } from 'ahooks';
import React from 'react';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { Player } from '../interfaces/youtube';
import { WithVideoUrl } from '../models/learning-path';
import {
  createPlayerWrapper,
  loadScriptService,
  RenderPlayerParams,
  renderPlayerService,
} from '../services/youtube';
import { getVideoId } from '../utils/youtube';

export type PlayerRef = HTMLDivElement | null;

export const usePlayer = ({
  videoUrl,
  options,
}: WithVideoUrl & {
  options?: Omit<RenderPlayerParams, 'videoId' | 'playerId'>;
}): {
  loading: boolean;
  playerRef: React.MutableRefObject<PlayerRef>;
  player: Player | null;
} => {
  const playerRef = React.useRef<PlayerRef>(null);

  const [player, setPlayer] = React.useState<Player | null>(null);

  const [loading, setLoading] = useBoolean();

  const playerId = React.useMemo(() => v4(), []);

  React.useEffect(() => {
    if (playerRef.current) {
      setLoading.setTrue();

      // eslint-disable-next-line no-unused-expressions
      playerRef.current.firstChild?.remove();

      const playerWrapper = createPlayerWrapper(playerId);

      playerRef.current.appendChild(playerWrapper);

      loadScriptService()
        .then(() => {
          const videoId = getVideoId(videoUrl);

          return renderPlayerService({ ...options, playerId, videoId });
        })
        .then(setPlayer)
        .catch((error: Error) => {
          toast(error.message, { type: 'error' });
        })
        .finally(() => {
          setLoading.setFalse();
        });
    } else {
      console.error('Youtube player could not be mounted because ref is null');
    }
  }, [playerId, options]);

  return {
    loading,
    playerRef,
    player,
  };
};
