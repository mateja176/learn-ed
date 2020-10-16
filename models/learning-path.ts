export enum Priority {
  platinum = 'platinum',
  gold = 'gold',
  silver = 'silver',
  bronze = 'bronze',
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type IVertex = {
  priority: Priority;
  label: string;
  description: string;
  url: string;
  videoUrl: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
  children: Record<string, IVertex>;
  associations?: ReadonlyArray<string>;
  difficulty?: Difficulty;
};

export type VertexWithMaybeVideo = Omit<IVertex, 'videoUrl' | 'children'> &
  Partial<Pick<IVertex, 'videoUrl'>> & {
    children: Record<string, VertexWithoutVideo>;
  };

export type VertexWithoutVideo = Omit<IVertex, 'videoUrl' | 'children'> & {
  children: Record<string, VertexWithoutVideo>;
};

export type RootVertex = Omit<IVertex, 'children'> & {
  children: Record<string, VertexWithMaybeVideo>;
};
