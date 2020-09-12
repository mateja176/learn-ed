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

interface WithVideoUrl {
  videoUrl: string;
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
    WithVideoUrl,
    WithColor {}

export interface ChildLearningPath
  extends LearningPath<ChildLearningPath>,
    WithVideoUrl,
    Partial<WithColor> {}
