import React from 'react';

export const useOrigin = () => {
  const [origin, setOrigin] = React.useState('');

  React.useEffect(() => {
    setOrigin(globalThis.location.origin);
  }, []);

  return origin;
};
