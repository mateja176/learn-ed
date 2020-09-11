export enum Priority {
  platinum,
  gold,
  silver,
  bronze,
}

type Key = string;

export interface LearningPath {
  priority: Priority;
  label: string;
  children: Record<Key, LearningPath>;
  associations?: string[];
}
