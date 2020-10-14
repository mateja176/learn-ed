import { Box } from 'grommet';
import { camelCase } from 'lodash';
import { NextPage, NextPageContext } from 'next';
import getConfig from 'next/config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { head, init, last } from 'ramda';
import React from 'react';
import urljoin from 'url-join';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Tree from '../components/Tree/Tree';
import { IVertex } from '../models/learning-path';
import env from '../services/env';
import root from '../utils';
import generateSitemap from '../utils/generateSitemap';

export interface LearningPathProps {
  asPath: string;
}

const { origin } = env;

const getPathname = (serverPath: string) => (
  routerPath: string,
): never | string => {
  const path = process.browser ? routerPath : serverPath;

  const pathname = head(path.split('?'));

  if (pathname) {
    return pathname;
  } else {
    throw new Error(
      `Could not extract pathname from path: ${path} and browser is ${process.browser}`,
    );
  }
};

const Root: NextPage<LearningPathProps> = (props) => {
  const router = useRouter();
  const asPath = React.useMemo(() => getPathname(props.asPath)(router.asPath), [
    props.asPath,
    router.asPath,
  ]);
  const pathnames = React.useMemo(() => asPath.split('/').filter(Boolean), [
    asPath,
  ]);
  const vertex: IVertex = React.useMemo(
    () =>
      pathnames.reduce((paths, path) => {
        const key = camelCase(path);
        if (key in paths.children) {
          return paths.children[key];
        }
        return paths;
      }, root),
    [pathnames],
  );

  const parentPathname = React.useMemo(() => urljoin('/', ...init(pathnames)), [
    pathnames,
  ]);

  const name = React.useMemo(() => last(pathnames) ?? '', [pathnames]);

  const logoPath = React.useMemo(
    () => urljoin(origin, 'img', `${camelCase(name || 'root')}.png`),
    [name],
  );

  return (
    <Box height={'100%'} direction={'column'}>
      <Head>
        <title>{vertex.label}</title>
        <meta name="description" content={vertex.description} />
        <link rel="apple-touch-icon" href={logoPath} />
        <meta name="twitter:image" content={logoPath} />
        <meta property="og:image" content={logoPath} />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta property="og:url" content={urljoin(origin, asPath)} />
        <meta property="og:title" content={vertex.label} />
        <meta property="og:description" content={vertex.description} />
      </Head>
      <Box
        background={'light-2'}
        pad={'20px'}
        elevation={'medium'}
        style={{ zIndex: 1 }}
      >
        <Breadcrumbs pathname={asPath} />
      </Box>
      <Box
        background={'light-3'}
        overflow={'auto'}
        style={{ flex: 1 }}
        pad={{ top: '30px', bottom: '150px' }}
      >
        <Tree
          origin={origin}
          parentPathname={parentPathname}
          pathname={name}
          learningPath={vertex}
        />
      </Box>
    </Box>
  );
};

export default Root;

// * getServerSideProps only works for top level page components
Root.getInitialProps = async ({
  asPath,
}: NextPageContext): Promise<LearningPathProps> => {
  const { serverRuntimeConfig } = getConfig();

  if (
    process.env.NODE_ENV === 'development' &&
    !process.browser &&
    serverRuntimeConfig.PROJECT_ROOT
  ) {
    if (!origin) {
      throw new Error('No origin env variable.');
    }

    const sitemapPath = `${serverRuntimeConfig.PROJECT_ROOT}/public/sitemap.txt`;
    const sitemap = generateSitemap('')(origin)('/')(root);

    import('fs-extra').then((fs) => {
      fs.writeFile(sitemapPath, sitemap).then(() => {
        console.info(`Written to ${sitemapPath}`);
      });
    });
  }

  if (!asPath) {
    throw new Error('No "asPath"');
  }
  return { asPath };
};
