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
interface WithUrl {
  /**
   * link to documentation
   */
  url: string;
}

interface LearningPath<Children> {
  priority: Priority;
  label: string;
  description: string;
  associations?: Key[];
  children: Record<Key, Children>;
}

export interface RootLearningPath extends LearningPath<FirstChildLearningPath> {
  emoji: string;
}

export interface FirstChildLearningPath
  extends LearningPath<ChildLearningPath>,
    WithVideoUrl,
    WithUrl,
    WithColor {}

export interface ChildLearningPath
  extends LearningPath<ChildLearningPath>,
    WithVideoUrl,
    WithUrl,
    Partial<WithColor> {}
