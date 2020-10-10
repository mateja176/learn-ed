import { kebabCase } from 'lodash';
import urljoin from 'url-join';
import { IVertex } from '../create-learning-path/example/learning-path';

const generateSitemap = (sitemap: string) => (parentUrl: string) => (
  pathname: string,
) => (vertex: IVertex): string => {
  // eslint-disable-next-line no-underscore-dangle
  const url = urljoin(parentUrl, kebabCase(pathname));

  return Object.entries(vertex.children).reduce((_sitemap, [key, _vertex]) => {
    return generateSitemap(_sitemap)(url)(key)(_vertex);
  }, sitemap.concat(url, '\n'));
};

export default generateSitemap;
