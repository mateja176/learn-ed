export enum Priority {
  platinum = 'platinum',
  gold = 'gold',
  silver = 'silver',
  bronze = 'bronze',
}

interface WithPriority {
  priority: Priority;
}

type Key = string;

interface WithColor {
  color: string;
}

export interface WithVideoUrl {
  videoUrl: string;
}
interface WithUrl {
  /**
   * link to documentation
   */
  url: string;
}

interface LearningPath<Children> {
  label: string;
  description: string;
  associations?: Key[];
  children: Record<Key, Children>;
}

export interface RootLearningPath extends LearningPath<FirstChildLearningPath> {
  pathname: string;
  emoji: string;
}

export interface FirstChildLearningPath
  extends LearningPath<ChildLearningPath>,
    WithPriority,
    WithVideoUrl,
    WithUrl,
    WithColor {}

export interface ChildLearningPath
  extends LearningPath<ChildLearningPath>,
    WithPriority,
    WithVideoUrl,
    WithUrl,
    Partial<WithColor> {}
