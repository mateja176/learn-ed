/* eslint-disable camelcase */

import { CSSProperties } from 'react';

export interface QueryParams {
  v: string;
}

interface Options extends Pick<CSSProperties, 'width' | 'height'> {
  videoId: string;
  events: { onReady: () => void };
}

export interface Player {
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new (playerId: string, options: Options): Player;
  target: { playerInfo: PlayerInfo };
}

export interface Target {
  playerInfo: PlayerInfo;
}

export interface PlayerInfo {
  apiInterface: string[];
  videoBytesLoaded: number;
  videoBytesTotal: number;
  videoLoadedFraction: number;
  videoStartBytes: number;
  playlist: null;
  playlistIndex: number;
  playlistId: null;
  option: null;
  options: [];
  muted: boolean;
  volume: number;
  playerState: number;
  playbackRate: number;
  availablePlaybackRates: number[];
  playbackQuality: string;
  availableQualityLevels: [];
  currentTime: number;
  duration: number;
  debugText: string;
  videoInfoVisible: boolean;
  sphericalProperties: null;
  videoEmbedCode: string;
  videoUrl: string;
  mediaReferenceTime: number;
  videoData: VideoData;
  currentTimeLastUpdated_: number;
}

export interface VideoData {
  video_id: string;
  author: string;
  title: string;
}

export type ready = (onReady: () => void) => void;

export interface YT {
  Player: Player;
  ready: ready;
}

export interface WithYT {
  YT: YT;
}

export type GlobalWithMaybeYT = typeof globalThis & Partial<WithYT>;

export type GlobalWithYT = typeof globalThis & WithYT;
