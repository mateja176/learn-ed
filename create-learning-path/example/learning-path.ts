export enum Priority {
  platinum = 'platinum',
  gold = 'gold',
  silver = 'silver',
  bronze = 'bronze',
}

export type IVertex = {
  priority: Priority;
  color: string;
  label: string;
  description: string;
  url: string;
  videoUrl: string;
  children: Record<string, IVertex>;
  associations?: ReadonlyArray<string>;
};
