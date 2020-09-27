export enum Priority {
  platinum = 'platinum',
  gold = 'gold',
  silver = 'silver',
  bronze = 'bronze',
}

export type IVertex = {
  priority: Priority;
  color: NonNullable<React.CSSProperties['color']>;
  label: string;
  description: string;
  url: string;
  videoUrl: string;
  imageUrl: string;
  children: Record<string, IVertex>;
  associations?: ReadonlyArray<string>;
};
