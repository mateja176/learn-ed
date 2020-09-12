export enum Priority {
  platinum,
  gold,
  silver,
  bronze,
}

type Key = string;

interface WithColor {
  color: string;
}

interface LearningPath<Children> {
  priority: Priority;
  label: string;
  videoUrl: string;
  associations?: string[];
  children: Record<Key, Children>;
}

export type RootLearningPath = LearningPath<FirstChildLearningPath>;

export interface FirstChildLearningPath
  extends LearningPath<ChildLearningPath>,
    WithColor {}

export interface ChildLearningPath
  extends LearningPath<ChildLearningPath>,
    Partial<WithColor> {}
