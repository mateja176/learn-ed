import { Box } from 'grommet/components/Box';
import React from 'react';

const pointerColor = '#999';
const pointerSize = 4;

export interface EdgeProps {}

const Edge: React.FC<EdgeProps> = () => {
  const wrapperStyle: React.CSSProperties = React.useMemo(
    () => ({
      position: 'relative',
      marginBottom: pointerSize,
    }),
    [],
  );
  const pointerStyle: React.CSSProperties = React.useMemo(
    () => ({
      border: `solid ${pointerColor}`,
      borderWidth: `0 ${pointerSize}px ${pointerSize}px 0`,
      padding: pointerSize,
      transform: 'rotate(45deg)',
      position: 'absolute',
      bottom: 0,
    }),
    [],
  );
  const pointerBodyStyle: React.CSSProperties = React.useMemo(
    () => ({
      width: 3,
      height: 60,
      background: `${pointerColor}`,
    }),
    [],
  );

  return (
    <Box align={'center'} style={wrapperStyle}>
      <Box style={pointerBodyStyle} />
      <Box style={pointerStyle} />
    </Box>
  );
};

export default Edge;
