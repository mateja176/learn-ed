import mixpanel from 'mixpanel-browser';

export interface Analytics {
  event: <P extends Record<string, unknown>>(name: string, params: P) => void;
}

export const useAnalytics = (): Analytics => {
  const event: Analytics['event'] = (name, params): void => {
    mixpanel.track(name, params);
  };

  return { event };
};
