import { kebabCase } from 'lodash';
import urljoin from 'url-join';
import { IVertex } from '../models/learning-path';
import rootLeaningPath from '../utils/learning-paths';

const [origin] = process.argv.slice(2);

const generateSitemap = (sitemap: string) => (prefix: string) => (
  vertex: IVertex,
): string =>
  Object.entries(vertex.children).reduce((_sitemap, [key, _vertex]) => {
    const _prefix = urljoin(prefix, kebabCase(key)); // eslint-disable-line no-underscore-dangle
    return generateSitemap(_sitemap.concat('\n').concat(_prefix))(_prefix)(
      _vertex,
    );
  }, sitemap);

// eslint-disable-next-line no-console
console.log(
  generateSitemap('')(urljoin(origin, 'learning-path'))(rootLeaningPath),
);
