import qs from 'qs';
import { last } from 'ramda';
import { QueryParams } from '../interfaces/youtube';
import { IVertex } from '../models/learning-path';

function hasVideoParam(params: unknown): params is QueryParams {
  return typeof params === 'object' && params !== null && 'v' in params;
}

export const getVideoId = (videoUrl: IVertex['videoUrl']): string | never => {
  const query = last(videoUrl.split('?'));
  if (!query) {
    throw new Error(
      `Cannot get video id because no query params where provided in video URL: ${videoUrl}`,
    );
  } else {
    const queryParams = qs.parse(query);

    if (hasVideoParam(queryParams)) {
      return queryParams.v;
    } else {
      throw new Error(
        `Cannot get video id because the parameter was not provided in video URL: ${videoUrl}`,
      );
    }
  }
};
