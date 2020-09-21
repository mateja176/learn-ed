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

interface LearningPath<Children> extends WithPriority {
  label: string;
  description: string;
  associations?: ReadonlyArray<Key>;
  children: Record<Key, Children>;
}

export interface IVertex
  extends LearningPath<IVertex>,
    WithPriority,
    WithVideoUrl,
    WithUrl,
    WithColor {}
