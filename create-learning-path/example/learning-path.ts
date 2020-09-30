export enum Priority {
  platinum = 'platinum',
  gold = 'gold',
  silver = 'silver',
  bronze = 'bronze',
}

export type IVertex = {
  priority: Priority;
  label: string;
  description: string;
  url: string;
  videoUrl: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
  children: Record<string, IVertex>;
  associations?: ReadonlyArray<string>;
};
