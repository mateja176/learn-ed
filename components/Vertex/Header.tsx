import { Box } from 'grommet/components/Box';
import { CardHeader } from 'grommet/components/CardHeader';
import React from 'react';
import { IVertex } from '../../models/learning-path';

export type HeaderProps = Pick<IVertex, 'label'>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <CardHeader pad="medium">
      <Box direction={'row'} width={'100%'}>
        <Box flex={'grow'} align={'center'}>
          {props.label}
        </Box>
      </Box>
    </CardHeader>
  );
};

export default Header;
