import mixpanel from 'mixpanel-browser';

export type WithLearningPath = { learningPath: string };

export type Event =
  | { type: 'openVideo'; payload: WithLearningPath }
  | { type: 'share'; payload: WithLearningPath & { provider: string } }
  | { type: 'explore'; payload: WithLearningPath };

export interface Analytics {
  event: (event: Event) => void;
}

export const useAnalytics = (): Analytics => {
  const event: Analytics['event'] = (e): void => {
    if (process.env.NODE_ENV === 'production') {
      mixpanel.track(e.type, e.payload);
    }
  };

  return { event };
};
