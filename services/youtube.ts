import {
  GlobalWithMaybeYT,
  GlobalWithYT,
  Options,
  Player,
} from '../interfaces/youtube';

const youtubeIframeApi = 'https://www.youtube.com/iframe_api';

const scriptId = 'youtube-iframe-script';

export type RenderPlayerParams = { playerId: string } & Omit<Options, 'events'>;
export const renderPlayerService = ({
  playerId,
  ...options
}: RenderPlayerParams): Promise<Player | null> =>
  new Promise((resolve) => {
    if ('YT' in globalThis) {
      return new (globalThis as GlobalWithYT).YT.Player(playerId, {
        ...options,
        events: {
          onReady: resolve,
        },
      });
    }
    return null;
  });

export const loadScriptService = (): Promise<void> => {
  if (globalThis.document.getElementById(scriptId)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const script = globalThis.document.createElement('script');

    script.id = scriptId;

    script.src = youtubeIframeApi;

    script.addEventListener('load', () => {
      if ((globalThis as GlobalWithMaybeYT).YT) {
        (globalThis as GlobalWithYT).YT.ready(resolve);
      } else {
        console.error('"globalThis.YT.ready" is not a function');
      }
    });

    globalThis.document.body.appendChild(script);
  });
};

export const createPlayerWrapper = (
  id: HTMLDivElement['id'],
): HTMLDivElement => {
  const playerWrapper = globalThis.document.createElement('div');
  playerWrapper.id = id;
  playerWrapper.style.width = '100%';

  return playerWrapper;
};
