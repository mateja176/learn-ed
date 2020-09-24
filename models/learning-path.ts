export enum Priority {
  platinum = 'platinum',
  gold = 'gold',
  silver = 'silver',
  bronze = 'bronze',
}

/**
 * @property url - Documentation link
 * @property videoUrl - Link to a YouTube tutorial
 * @property children - A Record whose key is used to construct the path to a resource
 * @property associations - Optional list of full paths to related vertices
 */
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
