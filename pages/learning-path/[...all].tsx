import { Box } from 'grommet/components/Box';
import { camelCase } from 'lodash';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { head, init, last } from 'ramda';
import React from 'react';
import urljoin from 'url-join';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Tree from '../../components/Tree/Tree';
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
  const segments = React.useMemo(() => pathnames.slice(2), [asPath]);
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

  const parentPathname = urljoin('/', ...init(pathnames));

  return (
    <Box height={'100%'} direction={'column'}>
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
    console.error('No "asPath"');
  }
  return { asPath: asPath || '' };
};
