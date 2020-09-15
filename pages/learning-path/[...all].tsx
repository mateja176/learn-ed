import { Box } from 'grommet/components/Box';
import { camelCase } from 'lodash';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Tree from '../../components/Tree/Tree';
import { ILearningPath } from '../../models/learning-path';
import { getLearningPathColor } from '../../utils/learning-path';
import rootLearningPath from '../../utils/learning-paths';

export interface LearningPathProps {
  asPath: string;
}

const LearningPath: NextPage<LearningPathProps> = (props) => {
  const router = useRouter();
  const asPath = (process.browser ? router.asPath : props.asPath).split('?')[0];
  const segments = React.useMemo(() => asPath.split('/').slice(2), [asPath]);
  const learningPath: ILearningPath = React.useMemo(
    () =>
      segments.reduce((paths, path) => {
        const key = camelCase(path);
        if (key in paths.children) {
          return paths.children[key];
        }
        return paths;
      }, rootLearningPath as ILearningPath),
    [segments],
  );

  const color: React.CSSProperties['color'] = React.useMemo(
    () => getLearningPathColor({ rootLearningPath, segments }),
    [learningPath, segments],
  );

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
          pathname={asPath}
          learningPath={learningPath}
          parentColor={color}
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
