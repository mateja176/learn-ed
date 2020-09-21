import { Box } from 'grommet/components/Box';
import { CardHeader } from 'grommet/components/CardHeader';
import capitalize from 'lodash/capitalize';
import React from 'react';
import { IVertex } from '../../models/learning-path';
import { getPriorityColor } from '../../utils/learning-path';

export type HeaderProps = Pick<IVertex, 'label' | 'priority'>;

const priorityIndicatorSize = 20;

const Header: React.FC<HeaderProps> = (props) => {
  const priorityIndicatorStyle: React.CSSProperties = React.useMemo(
    () => ({
      background: getPriorityColor(props.priority),
      borderRadius: 5,
      width: priorityIndicatorSize,
      height: priorityIndicatorSize,
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
    }),
    [props],
  );

  return (
    <CardHeader pad="medium">
      <Box direction={'row'} width={'100%'}>
        <Box
          round
          style={priorityIndicatorStyle}
          title={`${capitalize(props.priority)} priority`}
        />
        <Box flex={'grow'} align={'center'}>
          {props.label}
        </Box>
      </Box>
    </CardHeader>
  );
};

export default Header;
