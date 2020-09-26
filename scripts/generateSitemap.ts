import { kebabCase } from 'lodash';
import urljoin from 'url-join';
import { IVertex } from '../models/learning-path';
import rootLeaningPath from '../utils/learning-paths';

const generateSitemap = (sitemap: string) => (parentUrl: string) => (
  pathname: string,
) => (vertex: IVertex): string => {
  // eslint-disable-next-line no-underscore-dangle
  const url = urljoin(parentUrl, kebabCase(pathname));

  return Object.entries(vertex.children).reduce((_sitemap, [key, _vertex]) => {
    return generateSitemap(_sitemap)(url)(key)(_vertex);
  }, sitemap.concat(url, '\n'));
};

if (!process.env.ORIGIN) {
  throw new Error('No origin env variable.');
}

process.stdout.write(
  generateSitemap('')(process.env.ORIGIN)('learning-path')(rootLeaningPath),
);
