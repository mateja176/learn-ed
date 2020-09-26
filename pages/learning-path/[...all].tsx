import { Box } from 'grommet/components/Box';
import { camelCase } from 'lodash';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { head, init, last } from 'ramda';
import React from 'react';
import urljoin from 'url-join';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Tree from '../../components/Tree/Tree';
import { useOrigin } from '../../hooks/hooks';
import { IVertex } from '../../models/learning-path';
import rootLearningPath from '../../utils/learning-paths';

export interface LearningPathProps {
  asPath: string;
}

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

const LearningPath: NextPage<LearningPathProps> = (props) => {
  const router = useRouter();
  const asPath = getPathname(props.asPath)(router.asPath);
  const pathnames = React.useMemo(() => asPath.split('/'), [asPath]);
  const segments = React.useMemo(() => pathnames.slice(2), [pathnames]);
  const learningPath: IVertex = React.useMemo(
    () =>
      segments.reduce((paths, path) => {
        const key = camelCase(path);
        if (key in paths.children) {
          return paths.children[key];
        }
        return paths;
      }, rootLearningPath),
    [segments],
  );

  const parentPathname = React.useMemo(() => urljoin('/', ...init(pathnames)), [
    pathnames,
  ]);

  const origin = useOrigin();

  return (
    <Box height={'100%'} direction={'column'}>
      <Head>
        <title>{learningPath.label}</title>
        <meta name="description" content={learningPath.description} />
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
          pathname={last(pathnames) as string}
          learningPath={learningPath}
        />
      </Box>
    </Box>
  );
};

export default LearningPath;

LearningPath.getInitialProps = async ({
  asPath,
}: NextPageContext): Promise<LearningPathProps> => {
  if (!asPath) {
    throw new Error('No "asPath"');
  }
  return { asPath };
};
