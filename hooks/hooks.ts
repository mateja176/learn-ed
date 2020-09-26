import React from 'react';

export const useOrigin = (): string => {
  const [origin, setOrigin] = React.useState('');

  React.useEffect(() => {
    setOrigin(globalThis.location.origin);
  }, []);

  return origin;
};
