import qs from 'qs';
import { QueryParams } from '../interfaces/youtube';
import { WithVideoUrl } from '../models/learning-path';

export const getVideoId = (videoUrl: WithVideoUrl['videoUrl']): string => {
  const queryParams = (qs.parse(
    videoUrl.split('?')[1],
  ) as unknown) as QueryParams;

  return queryParams.v;
};
