import { kebabCase } from 'lodash';
import urljoin from 'url-join';
import { IVertex } from '../models/learning-path';
import rootLeaningPath from '../utils/learning-paths';

const generateSitemap = (sitemap: string) => (prefix: string) => (
  vertex: IVertex,
): string =>
  Object.entries(vertex.children).reduce((_sitemap, [key, _vertex]) => {
    const _prefix = urljoin(prefix, kebabCase(key)); // eslint-disable-line no-underscore-dangle
    return generateSitemap(_sitemap.concat('\n').concat(_prefix))(_prefix)(
      _vertex,
    );
  }, sitemap);

if (!process.env.ORIGIN) {
  throw new Error('No origin env variable.');
}

// eslint-disable-next-line no-console
console.log(
  generateSitemap('')(urljoin(process.env.ORIGIN, 'learning-path'))(
    rootLeaningPath,
  ),
);
